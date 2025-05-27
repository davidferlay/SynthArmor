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
  props: [
    'width','depth','safety','bottomHeight','topHeight','borderThickness',
    'enableBackHole','backHoleXOffset','backHoleWidth','backHoleHeight',
    'enableFrontHole','frontHoleXOffset','frontHoleWidth','frontHoleHeight',
    'enableRightHole','rightHoleXOffset','rightHoleWidth','rightHoleHeight',
    'enableLeftHole','leftHoleXOffset','leftHoleWidth','leftHoleHeight'
  ],

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
    // bundle all inputs into one reactive object
    allOptions() {
      return {
        width:           this.width,
        depth:           this.depth,
        safety:          this.safety,
        bottomHeight:    this.bottomHeight,
        topHeight:       this.topHeight,
        borderThickness: this.borderThickness,

        enableBackHole:   this.enableBackHole,
        backHoleXOffset:  this.backHoleXOffset,
        backHoleWidth:    this.backHoleWidth,
        backHoleHeight:   this.backHoleHeight,

        enableFrontHole:   this.enableFrontHole,
        frontHoleXOffset:  this.frontHoleXOffset,
        frontHoleWidth:    this.frontHoleWidth,
        frontHoleHeight:   this.frontHoleHeight,

        enableRightHole:   this.enableRightHole,
        rightHoleXOffset:  this.rightHoleXOffset,
        rightHoleWidth:    this.rightHoleWidth,
        rightHoleHeight:   this.rightHoleHeight,

        enableLeftHole:    this.enableLeftHole,
        leftHoleXOffset:   this.leftHoleXOffset,
        leftHoleWidth:     this.leftHoleWidth,
        leftHoleHeight:    this.leftHoleHeight
      };
    }
  },

  watch: {
    // single deep watcher for both dims and hole-options
    allOptions: {
      deep: true,
      handler(newOpts, oldOpts) {
        if (!oldOpts) return;  // skip on initial mount

        // detect changes in the six dimension fields
        const dims = ['width','depth','safety','bottomHeight','topHeight','borderThickness'];
        const dimsChanged = dims.some(key => newOpts[key] !== oldOpts[key]);

        if (dimsChanged) {
          // animate between old and new dimensions
          const oldDims = dims.reduce((o, k) => (o[k] = oldOpts[k], o), {});
          const newDims = dims.reduce((o, k) => (o[k] = newOpts[k], o), {});
          this.animateDimensionsTransition(oldDims, newDims);
        } else {
          // any hole-option changed → immediate rebuild
          this.rebuildMesh();
        }
      }
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
    // initialize trackers
    this.currentWidth          = this.width;
    this.currentDepth          = this.depth;
    this.currentSafety         = this.safety;
    this.currentBottomHeight   = this.bottomHeight;
    this.currentTopHeight      = this.topHeight;
    this.currentBorderThickness = this.borderThickness;

    this.initScene();
    this.createInitialMesh();
  },

  methods: {
    generateSTL(width, depth, safety, bottomHeight, topHeight, borderThickness) {
      try {
        const geometryArray = createGeometry({
          width, depth, safety, bottomHeight, topHeight, borderThickness,

          enableBackHole:   this.enableBackHole,
          backHoleXOffset:  this.backHoleXOffset,
          backHoleWidth:    this.backHoleWidth,
          backHoleHeight:   this.backHoleHeight,

          enableFrontHole:   this.enableFrontHole,
          frontHoleXOffset:  this.frontHoleXOffset,
          frontHoleWidth:    this.frontHoleWidth,
          frontHoleHeight:   this.frontHoleHeight,

          enableRightHole:   this.enableRightHole,
          rightHoleXOffset:  this.rightHoleXOffset,
          rightHoleWidth:    this.rightHoleWidth,
          rightHoleHeight:   this.rightHoleHeight,

          enableLeftHole:    this.enableLeftHole,
          leftHoleXOffset:   this.leftHoleXOffset,
          leftHoleWidth:     this.leftHoleWidth,
          leftHoleHeight:    this.leftHoleHeight
        });
        const stlDataArray = serialize({ binary: false }, geometryArray);
        return stlDataArray.join('\n');
      } catch (err) {
        console.error('Error generating geometry or STL:', err);
        return null;
      }
    },

    createInitialMesh() {
      const stlString = this.generateSTL(
        this.width, this.depth, this.safety,
        this.bottomHeight, this.topHeight, this.borderThickness
      );
      if (!stlString) return;
      this.stlData = stlString;

      const loader   = new STLLoader();
      const geometry = loader.parse(stlString);
      const material = new THREE.MeshStandardMaterial({ color: 0xa8dadc, roughness: 0.6, metalness: 0.1 });

      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);

      const edges       = new THREE.EdgesGeometry(geometry);
      const edgeMat     = new THREE.LineBasicMaterial({ color: 0x333333 });
      this.edgeLines = new THREE.LineSegments(edges, edgeMat);
      this.scene.add(this.edgeLines);
    },

    rebuildMesh() {
      // remove existing
      if (this.mesh) {
        this.scene.remove(this.mesh);
        this.mesh.geometry.dispose();
      }
      if (this.edgeLines) {
        this.scene.remove(this.edgeLines);
        this.edgeLines.geometry.dispose();
      }
      // build fresh
      this.createInitialMesh();
    },

    animateDimensionsTransition(oldDims, newDims) {
      const startTime = performance.now();
      const duration  = this.tweenDuration;
      const loader    = new STLLoader();

      const step = now => {
        const t = Math.min((now - startTime) / duration, 1);
        const interp = {};
        for (const key of Object.keys(oldDims)) {
          interp[key] = oldDims[key] + (newDims[key] - oldDims[key]) * t;
        }

        const stlString = this.generateSTL(
          interp.width, interp.depth, interp.safety,
          interp.bottomHeight, interp.topHeight, interp.borderThickness
        );
        if (stlString) {
          const geometry = loader.parse(stlString);

          // swap mesh geometry
          if (this.mesh) {
            this.mesh.geometry.dispose();
            this.mesh.geometry = geometry;
          }

          // refresh edges
          if (this.edgeLines) {
            this.scene.remove(this.edgeLines);
            this.edgeLines.geometry.dispose();
          }
          const newEdges = new THREE.EdgesGeometry(geometry);
          this.edgeLines = new THREE.LineSegments(newEdges, new THREE.LineBasicMaterial({ color: 0x333333 }));
          this.scene.add(this.edgeLines);

          this.stlData = stlString;
        }

        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          // commit trackers
          this.currentWidth = newDims.width;
          this.currentDepth = newDims.depth;
          this.currentSafety = newDims.safety;
          this.currentBottomHeight = newDims.bottomHeight;
          this.currentTopHeight = newDims.topHeight;
          this.currentBorderThickness = newDims.borderThickness;
        }
      };

      requestAnimationFrame(step);
    },

    initScene() {
      const w = 600, h = 500;
      this.scene    = new THREE.Scene();
      this.camera   = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
      this.camera.position.set(0, 150, 100);
      this.camera.up.set(0,0,1);
      this.camera.lookAt(0,0,10);

      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas, antialias: true });
      this.renderer.setSize(w, h);
      this.renderer.setClearColor(0xf7f7f7);

      this.scene.add(new THREE.AmbientLight(0x707070, 0.5));

      const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      hemi.position.set(0,200,0);
      this.scene.add(hemi);

      const d1 = new THREE.DirectionalLight(0xffffff, 0.8);
      d1.position.set(1,1,1).normalize();
      this.scene.add(d1);

      const d2 = new THREE.DirectionalLight(0xffffff, 0.4);
      d2.position.set(-1,-1,1).normalize();
      this.scene.add(d2);

      this.controls = new TrackballControls(this.camera, this.renderer.domElement);
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed   = 1.2;
      this.controls.panSpeed    = 0.8;
      this.controls.dynamicDampingFactor = 0.05;
      this.controls.minPolarAngle = Math.PI/4;
      this.controls.maxPolarAngle = Math.PI/2;

      this.animate();
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

