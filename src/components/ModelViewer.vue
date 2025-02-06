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
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls

export default {
  props: ['width', 'length'],
  mounted() {
    this.initScene();
  },
  watch: { width: 'updateModel', length: 'updateModel' },
  methods: {
    initScene() {
      // Scene setup
      this.scene = new THREE.Scene();

      // Camera setup
      this.camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
      this.camera.position.z = 100;
      this.camera.position.y = 50; // Adjust camera position to view the model better
      this.camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene

      // Renderer setup
      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas, antialias: true });
      this.renderer.setSize(500, 500);
      this.renderer.setClearColor(0xf0f0f0); // Set a light background color

      // Add lighting to the scene
      const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White directional light
      directionalLight.position.set(1, 1, 1).normalize();
      this.scene.add(directionalLight);

      // Add OrbitControls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true; // Add smooth damping for a more natural feel
      this.controls.dampingFactor = 0.05; // Adjust damping strength
      this.controls.screenSpacePanning = true; // Allow panning with the mouse
      this.controls.minDistance = 50; // Minimum zoom distance
      this.controls.maxDistance = 500; // Maximum zoom distance

      // Load the 3D model
      this.loadModel();

      // Start the render loop
      this.animate();
    },
    loadModel() {
      const loader = new STLLoader();
      loader.load('/model.stl', (geometry) => {
        this.mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x0077ff }));
        this.scene.add(this.mesh);
        this.updateModel(); // Ensure the model is scaled correctly on load
      });
    },
    updateModel() {
      if (this.mesh) {
        this.mesh.scale.set(this.width / 51, this.length / 68, 1);
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update(); // Update controls in the animation loop
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

