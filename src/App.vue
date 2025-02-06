<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">STL Editor</h1>
    <InputForm @update-dimensions="updateDimensions" />
    <ModelViewer :width="width" :length="length" />
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue';
import ModelViewer from './components/ModelViewer.vue';

export default {
  components: { InputForm, ModelViewer },
  data() {
    return { width: 51, length: 68 };
  },
  methods: {
    updateDimensions(dimensions) {
      this.width = dimensions.width;
      this.length = dimensions.length;
    }
  }
};
</script>
