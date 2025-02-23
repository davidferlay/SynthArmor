<template>
  <form
    @submit.prevent="emitValues"
    class="flex flex-col sm:flex-row sm:space-x-4 items-end"
    style="width: 100%; max-width: 600px; margin: 0 auto; box-sizing: border-box;"
  >
    <!-- Width input -->
    <div class="flex-1 mb-4 sm:mb-0">
      <label class="block text-sm font-medium text-gray-700">Width (mm):</label>
      <input
        v-model.number="localWidth"
        type="number"
        placeholder="Enter width"
        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>

    <!-- Length input -->
    <div class="flex-1 mb-4 sm:mb-0">
      <label class="block text-sm font-medium text-gray-700">Length (mm):</label>
      <input
        v-model.number="localLength"
        type="number"
        placeholder="Enter length"
        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>

    <!-- Safety offset slider -->
    <div class="flex-1 mb-4 sm:mb-0">
      <label class="block text-sm font-medium text-gray-700">
        Safety Offset (mm):
      </label>
      <div class="flex items-center space-x-2 mt-1">
        <!-- Slider -->
        <input
          type="range"
          v-model.number="localSafety"
          min="-2"
          max="2"
          step="0.1"
          class="w-full"
        />
        <!-- Numeric readout -->
        <input
          type="number"
          v-model.number="localSafety"
          min="-2"
          max="2"
          step="0.1"
          class="p-2 border border-gray-300 rounded-md w-16"
        />
      </div>
    </div>

    <!-- Submit button -->
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
  name: 'InputForm',
  props: {
    initialWidth: {
      type: Number,
      default: 155
    },
    initialLength: {
      type: Number,
      default: 105
    },
    initialSafety: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      localWidth: this.initialWidth,
      localLength: this.initialLength,
      localSafety: this.initialSafety
    };
  },
  methods: {
    emitValues() {
      this.$emit('update-dimensions', {
        width: this.localWidth,
        length: this.localLength,
        safety: this.localSafety
      });
    }
  }
};
</script>

