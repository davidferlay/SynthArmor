<template>
  <div>
    <label>Width: <input v-model.number="width" type="number" /></label>
    <label>Length: <input v-model.number="length" type="number" /></label>
    <button @click="emitValues">Update</button>
  </div>
</template>
<script>
export default {
  data() {
    return { width: 10, length: 10 };
  },
  methods: {
    emitValues() {
      this.$emit('update-dimensions', { width: this.width, length: this.length });
    }
  }
};
</script>

