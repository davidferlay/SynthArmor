<template>
  <div>
    <canvas ref="canvas" class="border border-gray-300 rounded-md"></canvas>
    <button @click="downloadSTL" class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Download STL</button>
  </div>
</template>

<script>
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';

export default {
  props: ['width', 'length'],
  mounted() {
    this.initScene();
  },
  watch: { width: 'updateModel', length: 'updateModel' },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas, antialias: true });
      this.renderer.setSize(500, 500);
      this.camera.position.z = 100;
      this.loadModel();
    },
    loadModel() {
      const loader = new STLLoader();
      loader.load('/model.stl', (geometry) => {
        this.mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x0077ff }));
        this.scene.add(this.mesh);
        this.renderScene();
      });
    },
    updateModel() {
      if (this.mesh) {
        this.mesh.scale.set(this.width / 51, this.length / 68, 1);
        this.renderScene();
      }
    },
    renderScene() {
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

