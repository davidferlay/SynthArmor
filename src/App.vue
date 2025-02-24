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
      <!-- Pass the parameters to InputForm -->
      <InputForm
        :initial-width="width"
        :initial-length="length"
        :initial-safety="safety"
        :initial-top-depth="topDepth"
        @update-dimensions="updateDimensions"
      />
      <!-- Pass all parameters to ModelViewer -->
      <ModelViewer :width="width" :length="length" :safety="safety" :top-depth="topDepth" />
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
      length: 105,
      safety: 0,       // Default safety offset = 0
      topDepth: 25     // Default top depth = 25mm
    };
  },
  methods: {
    updateDimensions({ width, length, safety, topDepth }) {
      this.width = width;
      this.length = length;
      this.safety = safety;
      this.topDepth = topDepth;
    }
  }
};
</script>
