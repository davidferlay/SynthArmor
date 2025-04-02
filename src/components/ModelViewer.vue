<template>
  <div class="mt-2 mb-2 flex flex-col items-center">
    <div class="w-full max-w-[600px] flex flex-col items-center">
      <!-- Top reduced border -->
      <div class="bg-gray-300 h-[1px] w-[95%]"></div>
      <!-- 3D preview canvas (without top/bottom borders) -->
      <canvas ref="canvas" class="rounded-md w-full max-w-[600px] border border-gray-300 border-t-0 border-b-0"></canvas>
      <!-- Bottom reduced border -->
      <div class="bg-gray-300 h-[1px] w-[95%]"></div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { createGeometry } from '../jscad/geometry.js';
import { serialize } from '@jscad/stl-serializer';

export default {
  props: ['width', 'depth', 'safety', 'bottomHeight', 'topHeight', 'borderThickness'],
  data() {
    return {
      stlData: null,
      currentWidth: 0,
      currentDepth: 0,
      currentSafety: 0,
      currentBottomHeight: 0,
      currentTopHeight: 0,
      currentBorderThickness: 0,
      tweenDuration: 1000, // ms
      edgeLines: null
    };
  },
  computed: {
    targetDimensions() {
      return {
        width: this.width,
        depth: this.depth,
        safety: this.safety,
        bottomHeight: this.bottomHeight,
        topHeight: this.topHeight,
        borderThickness: this.borderThickness
      };
    }
  },
  watch: {
    targetDimensions: {
      handler(newVal, oldVal) {
        if (
          !oldVal ||
          (
            oldVal.width === newVal.width &&
            oldVal.depth === newVal.depth &&
            oldVal.safety === newVal.safety &&
            oldVal.bottomHeight === newVal.bottomHeight &&
            oldVal.topHeight === newVal.topHeight &&
            oldVal.borderThickness === newVal.borderThickness
          )
        ) {
          return;
        }
        this.animateDimensionsTransition(
          {
            width: this.currentWidth,
            depth: this.currentDepth,
            safety: this.currentSafety,
            bottomHeight: this.currentBottomHeight,
            topHeight: this.currentTopHeight,
            borderThickness: this.currentBorderThickness
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
    this.currentDepth = this.depth;
    this.currentSafety = this.safety;
    this.currentBottomHeight = this.bottomHeight;
    this.currentTopHeight = this.topHeight;
    this.currentBorderThickness = this.borderThickness;

    this.initScene();
    this.createInitialMesh();
  },
  methods: {
    generateSTL(width, depth, safety, bottomHeight, topHeight, borderThickness) {
      try {
        const geometryArray = createGeometry({ width, depth, safety, bottomHeight, topHeight, borderThickness });
        const stlDataArray = serialize({ binary: false }, geometryArray);
        return stlDataArray.join('\n');
      } catch (err) {
        console.error('Error generating geometry or STL:', err);
        return null;
      }
    },
    createInitialMesh() {
      const stlString = this.generateSTL(this.width, this.depth, this.safety, this.bottomHeight, this.topHeight, this.borderThickness);
      if (!stlString) return;
      this.stlData = stlString;
      const loader = new STLLoader();
      const geometry = loader.parse(stlString);
      // Use a pastel color for the material and adjust roughness/metalness for a softer look.
      const material = new THREE.MeshStandardMaterial({ color: 0xa8dadc, roughness: 0.6, metalness: 0.1 });
      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);
      // Add highlighted edges using EdgesGeometry.
      const edges = new THREE.EdgesGeometry(geometry);
      const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x333333 });
      const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
      this.scene.add(edgeLines);
      this.edgeLines = edgeLines;
    },
    animateDimensionsTransition(oldDims, newDims) {
      const startTime = performance.now();
      const duration = this.tweenDuration;
      const loader = new STLLoader();

      const animate = (now) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);

        const interpWidth = oldDims.width + (newDims.width - oldDims.width) * t;
        const interpDepth = oldDims.depth + (newDims.depth - oldDims.depth) * t;
        const interpSafety = oldDims.safety + (newDims.safety - oldDims.safety) * t;
        const interpBottomHeight = oldDims.bottomHeight + (newDims.bottomHeight - oldDims.bottomHeight) * t;
        const interpTopHeight = oldDims.topHeight + (newDims.topHeight - oldDims.topHeight) * t;
        const interpBorderThickness = oldDims.borderThickness + (newDims.borderThickness - oldDims.borderThickness) * t;

        const stlString = this.generateSTL(interpWidth, interpDepth, interpSafety, interpBottomHeight, interpTopHeight, interpBorderThickness);
        if (stlString) {
          const geometry = loader.parse(stlString);
          if (this.mesh) {
            this.mesh.geometry.dispose();
            this.mesh.geometry = geometry;
          }
          // Update the edge overlay for a highlighted effect.
          if (this.edgeLines) {
            this.scene.remove(this.edgeLines);
            this.edgeLines.geometry.dispose();
          }
          const newEdges = new THREE.EdgesGeometry(geometry);
          const newEdgeLines = new THREE.LineSegments(newEdges, new THREE.LineBasicMaterial({ color: 0x333333 }));
          this.scene.add(newEdgeLines);
          this.edgeLines = newEdgeLines;
          this.stlData = stlString;
        }

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          this.currentWidth = newDims.width;
          this.currentDepth = newDims.depth;
          this.currentSafety = newDims.safety;
          this.currentBottomHeight = newDims.bottomHeight;
          this.currentTopHeight = newDims.topHeight;
          this.currentBorderThickness = newDims.borderThickness;
        }
      };
      requestAnimationFrame(animate);
    },
    initScene() {
      const renderWidth = 600;
      const renderHeight = 500;
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 1000);
      this.camera.position.set(0, 150, 100);
      this.camera.lookAt(0, 0, 10);
      this.camera.up.set(0, 0, 1);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvas,
        antialias: true
      });
      this.renderer.setSize(renderWidth, renderHeight);
      // Use a soft pastel background color.
      this.renderer.setClearColor(0xf7f7f7);

      // Replace basic ambient/directional lights with a more realistic lighting setup.
      const ambientLight = new THREE.AmbientLight(0x707070, 0.5);
      this.scene.add(ambientLight);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      hemiLight.position.set(0, 200, 0);
      this.scene.add(hemiLight);

      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight1.position.set(1, 1, 1).normalize();
      this.scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
      directionalLight2.position.set(-1, -1, 1).normalize();
      this.scene.add(directionalLight2);

      this.controls = new TrackballControls(this.camera, this.renderer.domElement);
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed = 1.2;
      this.controls.panSpeed = 0.8;
      this.controls.noZoom = false;
      this.controls.noPan = false;
      this.controls.staticMoving = false;
      this.controls.dynamicDampingFactor = 0.05;
      this.controls.minPolarAngle = Math.PI / 4;
      this.controls.maxPolarAngle = Math.PI / 2;

      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate.bind(this));
      if (this.controls) this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
    downloadSTL() {
      if (!this.stlData) return;
      const blob = new Blob([this.stlData], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `SynthArmor_cover_${this.width}x${this.depth}_safetyOffset${this.safety}_bottomHeight${this.bottomHeight}_topHeight${this.topHeight}_borderThickness${this.borderThickness}.stl`;
      link.click();
    }
  }
};
</script>

