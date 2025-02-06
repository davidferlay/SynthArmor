<template>
  <div class="mb-8">
    <div class="flex space-x-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Width (mm):</label>
        <input v-model.number="width" type="number" class="mt-1 p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Length (mm):</label>
        <input v-model.number="length" type="number" class="mt-1 p-2 border border-gray-300 rounded-md" />
      </div>
    </div>
    <button @click="emitValues" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return { width: 51, length: 68 };
  },
  methods: {
    emitValues() {
      this.$emit('update-dimensions', { width: this.width, length: this.length });
    }
  }
};
</script>

