// App.vue
<template>
  <div>
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
    return { width: 10, length: 10 };
  },
  methods: {
    updateDimensions(dimensions) {
      this.width = dimensions.width;
      this.length = dimensions.length;
    }
  }
};
</script>

