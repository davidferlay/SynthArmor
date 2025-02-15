<template>
  <div class="mt-6 flex flex-col items-center">
    <!-- Update the canvas class to cap its width at 600px -->
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
      stlData: null
    };
  },

  created() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.mesh = null;
  },

  mounted() {
    this.initScene();
    this.regenerateAndLoad();
  },

  watch: {
    width() {
      this.regenerateAndLoad();
    },
    length() {
      this.regenerateAndLoad();
    }
  },

  methods: {
    generateSTL(width, length) {
      try {
        const geometryArray = createGeometry({ width, length });
        const stlDataArray = serialize({ binary: false }, geometryArray);
        const stlString = stlDataArray.join('\n');
        return stlString;
      } catch (err) {
        console.error('Error generating JSCAD geometry or STL:', err);
        return null;
      }
    },

    regenerateAndLoad() {
      if (this.mesh) {
        this.scene.remove(this.mesh);
        this.mesh.geometry.dispose();
        this.mesh = null;
      }

      const stlString = this.generateSTL(this.width, this.length);
      if (!stlString) return;

      this.stlData = stlString;
      const blob = new Blob([stlString], { type: 'text/plain' });
      const blobURL = URL.createObjectURL(blob);

      const loader = new STLLoader();
      loader.load(
        blobURL,
        (geometry) => {
          this.mesh = new THREE.Mesh(
            geometry,
            new THREE.MeshStandardMaterial({ color: 0x0077ff })
          );
          this.scene.add(this.mesh);
        },
        undefined,
        (err) => {
          console.error('STLLoader error:', err);
        }
      );
    },

    initScene() {
      // Update render dimensions to 600x500 for a canvas that fits nicely in the white bg.
      const renderWidth = 600;
      const renderHeight = 500;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        renderWidth / renderHeight,
        0.1,
        1000
      );
      this.camera.position.set(0, 70, 150);
      this.camera.lookAt(0, 0, 0);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvas,
        antialias: true
      });
      this.renderer.setSize(renderWidth, renderHeight);
      this.renderer.setClearColor(0xf0f0f0);

      const ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1).normalize();
      this.scene.add(directionalLight);

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

<style scoped>
/* Optional: any custom CSS */
</style>

