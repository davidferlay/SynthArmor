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
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// JSCAD geometry & STL serializer
import { createGeometry } from '../jscad/geometry.js';
import { serialize } from '@jscad/stl-serializer';

export default {
  props: ['width', 'length'],
  data() {
    return {
      stlData: null,
      // We'll track the currently displayed dimensions for tweening
      currentWidth: 0,
      currentLength: 0,
      // Duration of the tween (ms)
      tweenDuration: 1000
    };
  },
  computed: {
    // This computed property bundles the target dimensions
    targetDimensions() {
      return { width: this.width, length: this.length };
    }
  },
  watch: {
    // When target dimensions change, animate from current dimensions to new ones
    targetDimensions: {
      handler(newVal, oldVal) {
        // On initial mount oldVal might be undefined, so skip tweening in that case.
        if (!oldVal || (oldVal.width === newVal.width && oldVal.length === newVal.length)) {
          return;
        }
        this.animateDimensionsTransition(
          { width: this.currentWidth, length: this.currentLength },
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
    // Initialize current dimensions to the initial props
    this.currentWidth = this.width;
    this.currentLength = this.length;
    this.initScene();
    this.createInitialMesh();
  },
  methods: {
    /**
     * Generate an STL string based on provided dimensions.
     */
    generateSTL(width, length) {
      try {
        const geometryArray = createGeometry({ width, length });
        const stlDataArray = serialize({ binary: false }, geometryArray);
        const stlString = stlDataArray.join('\n');
        return stlString;
      } catch (err) {
        console.error('Error generating geometry or STL:', err);
        return null;
      }
    },

    /**
     * Create the initial mesh without tweening.
     */
    createInitialMesh() {
      const stlString = this.generateSTL(this.width, this.length);
      if (!stlString) return;
      // Store for download if needed
      this.stlData = stlString;
      // Use STLLoader's synchronous parse method to get geometry immediately.
      const loader = new STLLoader();
      const geometry = loader.parse(stlString);
      const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);
    },

    /**
     * Animate from oldDimensions to newDimensions over tweenDuration.
     */
    animateDimensionsTransition(oldDimensions, newDimensions) {
      const startTime = performance.now();
      const duration = this.tweenDuration;
      const loader = new STLLoader();

      const animate = (now) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        // Linear interpolation between old and new dimensions
        const interpWidth = oldDimensions.width + (newDimensions.width - oldDimensions.width) * t;
        const interpLength = oldDimensions.length + (newDimensions.length - oldDimensions.length) * t;
        // Generate intermediate geometry
        const stlString = this.generateSTL(interpWidth, interpLength);
        if (stlString) {
          // Synchronously parse the STL string into geometry
          const geometry = loader.parse(stlString);
          // Replace the mesh geometry (dispose of the old one)
          if (this.mesh) {
            this.mesh.geometry.dispose();
            this.mesh.geometry = geometry;
          }
          // Optionally update stlData for download (you can choose to update only at the end)
          this.stlData = stlString;
        }
        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          // Animation complete: update the current dimensions
          this.currentWidth = newDimensions.width;
          this.currentLength = newDimensions.length;
        }
      };
      requestAnimationFrame(animate);
    },

    /**
     * Initialize Three.js scene, camera, renderer, and controls.
     */
    initScene() {
      const renderWidth = 600;
      const renderHeight = 500;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 1000);
      this.camera.position.set(0, 70, 150);
      this.camera.lookAt(0, 0, 0);
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvas,
        antialias: true
      });
      this.renderer.setSize(renderWidth, renderHeight);
      this.renderer.setClearColor(0xf0f0f0);

      // Ambient and directional lighting
      const ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1).normalize();
      this.scene.add(directionalLight);

      // OrbitControls for user interaction
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.screenSpacePanning = true;
      this.controls.minDistance = 50;
      this.controls.maxDistance = 1000;

      this.animate();
    },

    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },

    downloadSTL() {
      if (!this.stlData) return;
      const blob = new Blob([this.stlData], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `SynthArmor_cover_${this.width}x${this.length}.stl`;
      link.click();
    }
  }
};
</script>

