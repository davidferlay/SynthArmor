<template>
  <!-- Main container -->
  <div class="max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6">
    <!-- Logo -->
    <img src="/SynthArmor_logo.png" alt="SynthArmor Logo" class="w-40 mb-4" />

    <div class="mb-8 text-center">
      <!-- <h1 class="text-4xl font-bold mb-2">SynthArmor</h1> -->
      <p class="text-gray-600">
        Modify the dimensions of a 3D model and download your custom design instantly.
      </p>
    </div>

    <div class="w-full max-w-[600px] bg-white rounded shadow p-6">
      <!-- Basic form fields above the 3D preview -->
      <BasicForm
        :initial-width="width"
        :initial-depth="depth"
        :initial-safety="safety"
        @update-dimensions="updateBasic"
      />
      <!-- 3D Preview with ref -->
      <ModelViewer
        ref="modelViewer"
        :width="width"
        :depth="depth"
        :safety="safety"
        :bottom-height="bottomHeight"
        :top-height="topHeight"
        :border-thickness="borderThickness"

        :enable-back-hole="enableBackHole"
        :back-hole-x-offset="backHoleXOffset"
        :back-hole-width="backHoleWidth"
        :back-hole-height="backHoleHeight"

        :enable-front-hole="enableFrontHole"
        :front-hole-x-offset="frontHoleXOffset"
        :front-hole-width="frontHoleWidth"
        :front-hole-height="frontHoleHeight"

        :enable-right-hole="enableRightHole"
        :right-hole-x-offset="rightHoleXOffset"
        :right-hole-width="rightHoleWidth"
        :right-hole-height="rightHoleHeight"

        :enable-left-hole="enableLeftHole"
        :left-hole-x-offset="leftHoleXOffset"
        :left-hole-width="leftHoleWidth"
        :left-hole-height="leftHoleHeight"
      />
      <!-- Advanced form fields below the 3D preview -->
      <AdvancedForm
        :initial-bottom-height="bottomHeight"
        :initial-top-height="topHeight"
        :initial-border-thickness="borderThickness"
        @update-advanced="updateAdvanced"
      />
      <!-- new hole-options fieldset -->
      <HoleOptionsForm
        :initial-enable-back-hole="enableBackHole"
        :initial-back-hole-x-offset="backHoleXOffset"
        :initial-back-hole-width="backHoleWidth"
        :initial-back-hole-height="backHoleHeight"

        :initial-enable-front-hole="enableFrontHole"
        :initial-front-hole-x-offset="frontHoleXOffset"
        :initial-front-hole-width="frontHoleWidth"
        :initial-front-hole-height="frontHoleHeight"

        :initial-enable-right-hole="enableRightHole"
        :initial-right-hole-x-offset="rightHoleXOffset"
        :initial-right-hole-width="rightHoleWidth"
        :initial-right-hole-height="rightHoleHeight"

        :initial-enable-left-hole="enableLeftHole"
        :initial-left-hole-x-offset="leftHoleXOffset"
        :initial-left-hole-width="leftHoleWidth"
        :initial-left-hole-height="leftHoleHeight"

        @update-hole-options="updateHoleOptions"
      />
      <!-- Download Button -->
      <button
        @click="downloadModel"
        class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 block mx-auto"
      >
        Download file
      </button>
    </div>

    <!-- FAQ Section -->
    <FAQ />
  </div>
</template>

<script>
import BasicForm from './components/BasicForm.vue';
import AdvancedForm from './components/AdvancedForm.vue';
import ModelViewer from './components/ModelViewer.vue';
import FAQ from './components/FAQ.vue';
import HoleOptionsForm from './components/HoleOptionsForm.vue';

export default {
  name: 'App',
  components: {
    BasicForm,
    AdvancedForm,
    ModelViewer,
    FAQ,
    HoleOptionsForm
  },
  data() {
    return {
      width: 155,
      depth: 105,
      safety: 0,
      bottomHeight: 15,
      topHeight: 25,
      borderThickness: 2.5,

      enableBackHole:   false,
      backHoleXOffset:  0,
      backHoleWidth:    55,
      backHoleHeight:   10,

      enableFrontHole:  false,
      frontHoleXOffset: 0,
      frontHoleWidth:   55,
      frontHoleHeight:  10,

      enableRightHole:  false,
      rightHoleXOffset: 0,
      rightHoleWidth:   55,
      rightHoleHeight:  10,

      enableLeftHole:   false,
      leftHoleXOffset:  0,
      leftHoleWidth:    55,
      leftHoleHeight:   10
    };
  },
  methods: {
    updateBasic({ width, depth, safety }) {
      this.width = width;
      this.depth = depth;
      this.safety = safety;
    },
    updateAdvanced({ bottomHeight, topHeight, borderThickness }) {
      this.bottomHeight = bottomHeight;
      this.topHeight = topHeight;
      this.borderThickness = borderThickness;
    },
    updateHoleOptions(opts) {
      Object.assign(this, opts);
    },
    downloadModel() {
      // Call the download function on the ModelViewer component via its ref
      this.$refs.modelViewer.downloadSTL();
    }
  }
};
</script>

