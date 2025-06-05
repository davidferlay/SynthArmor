<template>
  <div class="mt-2 mb-2 flex flex-col items-center">
    <div class="w-full max-w-[600px] flex flex-col items-center">
      <div class="bg-gray-300 h-[1px] w-[95%]"></div>
      <canvas ref="canvas" class="rounded-md w-full max-w-[600px] border border-gray-300 border-t-0 border-b-0"></canvas>
      <div class="bg-gray-300 h-[1px] w-[95%]"></div>
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { createGeometry } from "../jscad/geometry.js";
import { serialize } from "@jscad/stl-serializer";

export default {
  props: {
    width: Number,
    depth: Number,
    safety: Number,
    bottomHeight: Number,
    topHeight: Number,
    borderThickness: Number,
    enableBackHole: Boolean,
    backHoleXOffset: Number,
    backHoleWidth: Number,
    backHoleHeight: Number,
    enableFrontHole: Boolean,
    frontHoleXOffset: Number,
    frontHoleWidth: Number,
    frontHoleHeight: Number,
    enableRightHole: Boolean,
    rightHoleXOffset: Number,
    rightHoleWidth: Number,
    rightHoleHeight: Number,
    enableLeftHole: Boolean,
    leftHoleXOffset: Number,
    leftHoleWidth: Number,
    leftHoleHeight: Number,
    svgContent: String
  },
  data() {
    return {
      stlData: null,
      mesh: null,
      edgeLines: null
    };
  },
  watch: {
    // rebuild on any prop change
    width: 'rebuildMesh',
    depth: 'rebuildMesh',
    safety: 'rebuildMesh',
    bottomHeight: 'rebuildMesh',
    topHeight: 'rebuildMesh',
    borderThickness: 'rebuildMesh',
    enableBackHole: 'rebuildMesh',
    backHoleXOffset: 'rebuildMesh',
    backHoleWidth: 'rebuildMesh',
    backHoleHeight: 'rebuildMesh',
    enableFrontHole: 'rebuildMesh',
    frontHoleXOffset: 'rebuildMesh',
    frontHoleWidth: 'rebuildMesh',
    frontHoleHeight: 'rebuildMesh',
    enableRightHole: 'rebuildMesh',
    rightHoleXOffset: 'rebuildMesh',
    rightHoleWidth: 'rebuildMesh',
    rightHoleHeight: 'rebuildMesh',
    enableLeftHole: 'rebuildMesh',
    leftHoleXOffset: 'rebuildMesh',
    leftHoleWidth: 'rebuildMesh',
    leftHoleHeight: 'rebuildMesh',
    svgContent: 'rebuildMesh'
  },
  mounted() {
    this.initScene();
    this.rebuildMesh();
  },
  methods: {
    initScene() {
      const w = 600, h = 500;
      this.scene = markRaw(new THREE.Scene());
      this.camera = markRaw(new THREE.PerspectiveCamera(75, w / h, 0.1, 1000));
      this.camera.position.set(0, 150, 100);
      this.camera.up.set(0, 0, 1);
      this.camera.lookAt(0, 0, 10);

      this.renderer = markRaw(new THREE.WebGLRenderer({ canvas: this.$refs.canvas, antialias: true }));
      this.renderer.setSize(w, h);
      this.renderer.setClearColor(0xf7f7f7);

      this.scene.add(new THREE.AmbientLight(0x707070, 0.5));
      const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      hemi.position.set(0, 200, 0);
      this.scene.add(hemi);
      const d1 = new THREE.DirectionalLight(0xffffff, 0.8);
      d1.position.set(1, 1, 1).normalize();
      this.scene.add(d1);
      const d2 = new THREE.DirectionalLight(0xffffff, 0.4);
      d2.position.set(-1, -1, 1).normalize();
      this.scene.add(d2);

      const controls = new TrackballControls(this.camera, this.renderer.domElement);
      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.2;
      controls.dynamicDampingFactor = 0.05;
      controls.minPolarAngle = Math.PI / 4;
      controls.maxPolarAngle = Math.PI / 2;
      this.controls = markRaw(controls);

      this.animate();
    },
    rebuildMesh() {
      if (this.mesh) {
        this.scene.remove(this.mesh);
        this.mesh.geometry.dispose();
      }
      if (this.edgeLines) {
        this.scene.remove(this.edgeLines);
        this.edgeLines.geometry.dispose();
      }

      const stlString = this.generateSTL();
      if (!stlString) return;
      this.stlData = stlString;

      const loader = new STLLoader();
      const geom = loader.parse(stlString);
      this.mesh = markRaw(new THREE.Mesh(
        geom,
        new THREE.MeshStandardMaterial({ color: 0xa8dadc, roughness: 0.6, metalness: 0.1 })
      ));
      this.scene.add(this.mesh);

      const edgesGeo = new THREE.EdgesGeometry(geom);
      this.edgeLines = markRaw(new THREE.LineSegments(edgesGeo, new THREE.LineBasicMaterial({ color: 0x333333 })));
      this.scene.add(this.edgeLines);

      this.$emit('update-stl', stlString);
    },
    generateSTL() {
      const arr = createGeometry({
        width: this.width,
        depth: this.depth,
        safety: this.safety,
        bottomHeight: this.bottomHeight,
        topHeight: this.topHeight,
        borderThickness: this.borderThickness,
        enableBackHole: this.enableBackHole,
        backHoleXOffset: this.backHoleXOffset,
        backHoleWidth: this.backHoleWidth,
        backHoleHeight: this.backHoleHeight,
        enableFrontHole: this.enableFrontHole,
        frontHoleXOffset: this.frontHoleXOffset,
        frontHoleWidth: this.frontHoleWidth,
        frontHoleHeight: this.frontHoleHeight,
        enableRightHole: this.enableRightHole,
        rightHoleXOffset: this.rightHoleXOffset,
        rightHoleWidth: this.rightHoleWidth,
        rightHoleHeight: this.rightHoleHeight,
        enableLeftHole: this.enableLeftHole,
        leftHoleXOffset: this.leftHoleXOffset,
        leftHoleWidth: this.leftHoleWidth,
        leftHoleHeight: this.leftHoleHeight,
        svgContent: this.svgContent
      });
      // serialize returns array of STL parts
      return serialize({ binary: false }, arr).join('\n');
    },
    animate() {
      requestAnimationFrame(this.animate.bind(this));
      this.controls.update();
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

