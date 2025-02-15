<template>
  <!-- The form is now forced to be at most 600px wide and centered -->
  <form
    @submit.prevent="emitValues"
    style="width: 100%; max-width: 600px; margin: 0 auto; box-sizing: border-box;"
    class="flex flex-col sm:flex-row sm:space-x-4 items-end"
  >
    <div class="flex-1">
      <label class="block text-sm font-medium text-gray-700">Width (mm):</label>
      <input
        v-model.number="width"
        type="number"
        placeholder="Enter width"
        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>
    <div class="flex-1">
      <label class="block text-sm font-medium text-gray-700">Length (mm):</label>
      <input
        v-model.number="length"
        type="number"
        placeholder="Enter length"
        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>
    <div>
      <button
        type="submit"
        class="mt-4 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Update
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      width: 155,
      length: 105
    };
  },
  methods: {
    emitValues() {
      // Emit the values to the parent (App.vue)
      this.$emit('update-dimensions', {
        width: this.width,
        length: this.length
      });
    }
  }
};
</script>

