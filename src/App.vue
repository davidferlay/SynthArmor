<template>
  <!-- Main container -->
  <div class="max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6">
    <div class="mb-8 text-center">
      <h1 class="text-4xl font-bold mb-2">SynthArmor</h1>
      <p class="text-gray-600">
        Modify the dimensions of a 3D model and download your custom design instantly.
      </p>
    </div>

    <div class="w-full max-w-[600px] bg-white rounded shadow p-6">
      <!-- Pass dimensions, safety, height, and border thickness to InputForm -->
      <InputForm
        :initial-width="width"
        :initial-depth="depth"
        :initial-safety="safety"
        :initial-bottom-height="bottomHeight"
        :initial-top-height="topHeight"
        :initial-border-thickness="borderThickness"
        @update-dimensions="updateDimensions"
      />
      <!-- Also pass these props to the ModelViewer -->
      <ModelViewer
        :width="width"
        :depth="depth"
        :safety="safety"
        :bottom-height="bottomHeight"
        :top-height="topHeight"
        :border-thickness="borderThickness"
      />
    </div>

    <!-- FAQ Section -->
    <FAQ />
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue';
import ModelViewer from './components/ModelViewer.vue';
import FAQ from './components/FAQ.vue';

export default {
  name: 'App',
  components: {
    InputForm,
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
    updateDimensions({ width, depth, safety, bottomHeight, topHeight, borderThickness }) {
      this.width = width;
      this.depth = depth;
      this.safety = safety;
      this.bottomHeight = bottomHeight;
      this.topHeight = topHeight;
      this.borderThickness = borderThickness;
    }
  }
};
</script>

