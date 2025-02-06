<template>
  <div class="mt-6 flex flex-col items-center">
    <canvas ref="canvas" class="border border-gray-300 rounded-md"></canvas>
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
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  props: ['width', 'length'],
  mounted() {
    this.initScene();
  },
  watch: {
    width: 'updateModel',
    length: 'updateModel'
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();

      // Camera
      this.camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
      this.camera.position.z = 100;
      this.camera.position.y = 50;
      this.camera.lookAt(0, 0, 0);

      // Renderer
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvas,
        antialias: true
      });
      this.renderer.setSize(500, 500);
      this.renderer.setClearColor(0xf0f0f0);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1).normalize();
      this.scene.add(directionalLight);

      // Orbit Controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.screenSpacePanning = true;
      this.controls.minDistance = 50;
      this.controls.maxDistance = 500;

      // Load model
      this.loadModel();

      // Begin animation
      this.animate();
    },
    loadModel() {
      const loader = new STLLoader();
      loader.load('/model.stl', (geometry) => {
        this.mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({ color: 0x0077ff })
        );
        this.scene.add(this.mesh);
        this.updateModel(); // Scale on load
      });
    },
    updateModel() {
      if (this.mesh) {
        // scale based on props
        this.mesh.scale.set(this.width / 51, this.length / 68, 1);
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
    downloadSTL() {
      const exporter = new STLExporter();
      const stlString = exporter.parse(this.mesh);
      const blob = new Blob([stlString], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'modified_model.stl';
      link.click();
    }
  }
};
</script>

<style scoped>
/* Optional: any scoped CSS if you want to tweak further */
</style>

