<template>
  <div>
    <div class="flex flex-col sm:flex-row sm:space-x-4">
      <div class="mb-4 sm:mb-0">
        <label class="block text-sm font-medium text-gray-700">Width (mm):</label>
        <input
          v-model.number="width"
          type="number"
          placeholder="Enter width"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Length (mm):</label>
        <input
          v-model.number="length"
          type="number"
          placeholder="Enter length"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
    </div>
    <button
      @click="emitValues"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Update
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 51,
      length: 68
    };
  },
  methods: {
    emitValues() {
      // Emit the values to the parent App.vue
      this.$emit('update-dimensions', {
        width: this.width,
        length: this.length
      });
    }
  }
};
</script>

<style scoped>
/* Optional: any scoped CSS if you want to tweak further */
</style>

