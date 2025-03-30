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
      <!-- Pass the safety, width, and depth down to InputForm -->
      <InputForm
        :initial-width="width"
        :initial-depth="depth"
        :initial-safety="safety"
        @update-dimensions="updateDimensions"
      />
      <!-- Also pass the safety prop to the ModelViewer -->
      <ModelViewer :width="width" :depth="depth" :safety="safety" />
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
      safety: 0  // Default safety offset = 0
    };
  },
  methods: {
    updateDimensions({ width, depth, safety }) {
      this.width = width;
      this.depth = depth;
      this.safety = safety;
    }
  }
};
</script>

