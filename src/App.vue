<template>
  <!-- Main container -->
  <div class="max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6">
    <!-- Logo -->
    <img src="/SynthArmor logo.png" alt="SynthArmor Logo" class="w-32 mb-4" />

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
      <!-- 3D Preview -->
      <ModelViewer
        :width="width"
        :depth="depth"
        :safety="safety"
        :bottom-height="bottomHeight"
        :top-height="topHeight"
        :border-thickness="borderThickness"
      />
      <!-- Advanced form fields below the 3D preview -->
      <AdvancedForm
        :initial-bottom-height="bottomHeight"
        :initial-top-height="topHeight"
        :initial-border-thickness="borderThickness"
        @update-advanced="updateAdvanced"
      />
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

export default {
  name: 'App',
  components: {
    BasicForm,
    AdvancedForm,
    ModelViewer,
    FAQ
  },
  data() {
    return {
      width: 155,
      depth: 105,
      safety: 0,
      bottomHeight: 15,
      topHeight: 25,
      borderThickness: 2.5
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
    }
  }
};
</script>


