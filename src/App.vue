<template>
  <!-- Main container centers everything and adds vertical spacing -->
  <div class="max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6">
    <!-- Title and description -->
    <div class="mb-8 text-center">
      <h1 class="text-4xl font-bold mb-2">SynthArmor</h1>
      <p class="text-gray-600">
        Modify the dimensions of a 3D model and download your custom design instantly.
      </p>
    </div>

    <!-- White container with fixed max width so that the form and 3D render match in width -->
    <div class="w-full max-w-[600px] bg-white rounded shadow p-6">
      <InputForm @update-dimensions="updateDimensions" />
      <ModelViewer :width="width" :length="length" />
    </div>
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue';
import ModelViewer from './components/ModelViewer.vue';

export default {
  name: 'App',
  components: {
    InputForm,
    ModelViewer
  },
  data() {
    return {
      width: 155,
      length: 105
    };
  },
  methods: {
    updateDimensions(dimensions) {
      this.width = dimensions.width;
      this.length = dimensions.length;
    }
  }
};
</script>

<style scoped>
/* Optional: any scoped CSS if you want to tweak further */
</style>

