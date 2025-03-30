<template>
  <div class="mt-6 flex flex-col items-center">
    <canvas ref="canvas" class="border border-gray-300 rounded-md w-full max-w-[600px]"></canvas>
    <button
      @click="downloadSTL"
      class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
    >
      Download STL
    </button>
  </div>
</template>

<script>
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { createGeometry } from '../jscad/geometry.js';
import { serialize } from '@jscad/stl-serializer';

export default {
  props: ['width', 'length', 'safety'],
  data() {
    return {
      stlData: null,
      // Track current dimensions so we can interpolate
      currentWidth: 0,
      currentLength: 0,
      currentSafety: 0,
      tweenDuration: 1000 // ms
    };
  },
  computed: {
    targetDimensions() {
      return {
        width: this.width,
        length: this.length,
        safety: this.safety
      };
    }
  },
  watch: {
    targetDimensions: {
      handler(newVal, oldVal) {
        // Skip if there's no change or if it's the initial run
        if (
          !oldVal ||
          (
            oldVal.width === newVal.width &&
            oldVal.length === newVal.length &&
            oldVal.safety === newVal.safety
          )
        ) {
          return;
        }
        // Animate the transition
        this.animateDimensionsTransition(
          {
            width: this.currentWidth,
            length: this.currentLength,
            safety: this.currentSafety
          },
          newVal
        );
      },
      deep: true
    }
  },
  created() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.mesh = null;
  },
  mounted() {
    // Initialize current dimension trackers
    this.currentWidth = this.width;
    this.currentLength = this.length;
    this.currentSafety = this.safety;

    this.initScene();
    this.createInitialMesh();
  },
  methods: {
    generateSTL(width, length, safety) {
      try {
        const geometryArray = createGeometry({ width, length, safety });
        const stlDataArray = serialize({ binary: false }, geometryArray);
        return stlDataArray.join('\n');
      } catch (err) {
        console.error('Error generating geometry or STL:', err);
        return null;
      }
    },
    createInitialMesh() {
      const stlString = this.generateSTL(this.width, this.length, this.safety);
      if (!stlString) return;
      this.stlData = stlString;
      const loader = new STLLoader();
      const geometry = loader.parse(stlString);
      const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);
    },
    animateDimensionsTransition(oldDims, newDims) {
      const startTime = performance.now();
      const duration = this.tweenDuration;
      const loader = new STLLoader();

      const animate = (now) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);

        const interpWidth = oldDims.width + (newDims.width - oldDims.width) * t;
        const interpLength = oldDims.length + (newDims.length - oldDims.length) * t;
        const interpSafety = oldDims.safety + (newDims.safety - oldDims.safety) * t;

        // Generate intermediate geometry
        const stlString = this.generateSTL(interpWidth, interpLength, interpSafety);
        if (stlString) {
          const geometry = loader.parse(stlString);
          if (this.mesh) {
            this.mesh.geometry.dispose();
            this.mesh.geometry = geometry;
          }
          this.stlData = stlString;
        }

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          // At the end, update our trackers
          this.currentWidth = newDims.width;
          this.currentLength = newDims.length;
          this.currentSafety = newDims.safety;
        }
      };
      requestAnimationFrame(animate);
    },
    initScene() {
      const renderWidth = 600;
      const renderHeight = 500;
      this.scene = new THREE.Scene();

      // Create a perspective camera.
      this.camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 1000);

      // Position the camera so that it sits along the positive Y axis (beyond the front border)
      // and at an elevation that shows the model’s lower edge (Z=0) at the bottom.
      // Parameters: 3/4th, distance, from-above axis
      this.camera.position.set(0, 150, 100);

      // Look at a target that is centered horizontally and near the middle of the model's vertical extent.
      // Here we use (0, 0, 10) assuming the model’s vertical extent is roughly 0 to 20.
      this.camera.lookAt(0, 0, 10);

      // Ensure the camera's up vector remains Z-up.
      this.camera.up.set(0, 0, 1);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvas,
        antialias: true
      });
      this.renderer.setSize(renderWidth, renderHeight);
      this.renderer.setClearColor(0xf0f0f0);

      // Lighting setup
      const ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1).normalize();
      this.scene.add(directionalLight);

      // Use TrackballControls for user interaction.
      // Here we restrict the polar angle so the user sees the model from the intended perspective.
      this.controls = new TrackballControls(this.camera, this.renderer.domElement);
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed = 1.2;
      this.controls.panSpeed = 0.8;
      this.controls.noZoom = false;
      this.controls.noPan = false;
      this.controls.staticMoving = false;
      this.controls.dynamicDampingFactor = 0.05;

      // Limit vertical rotation: prevents the view from flipping over
      // and helps keep the front side facing the user.
      this.controls.minPolarAngle = Math.PI / 4;
      this.controls.maxPolarAngle = Math.PI / 2;

      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);
      if (this.controls) this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
    downloadSTL() {
      if (!this.stlData) return;
      const blob = new Blob([this.stlData], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `SynthArmor_cover_${this.width}x${this.length}_safety${this.safety}.stl`;
      link.click();
    }
  }
};
</script>

