<template>
  <form
    @submit.prevent
    class="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end"
    style="width: 100%; max-width: 600px; margin: 0 auto; box-sizing: border-box;"
  >
    <!-- Width input -->
    <div class="flex-1 mb-4 sm:mb-0">
      <label class="block text-sm font-medium text-gray-700">Width (mm):</label>
      <input
        v-model.number="localWidth"
        @blur="emitValues"
        @keyup.enter="emitValues"
        @change="emitValues"
        type="number"
        placeholder="Enter width"
        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>

    <!-- Depth input -->
    <div class="flex-1 mb-4 sm:mb-0">
      <label class="block text-sm font-medium text-gray-700">Depth (mm):</label>
      <input
        v-model.number="localDepth"
        @blur="emitValues"
        @keyup.enter="emitValues"
        @change="emitValues"
        type="number"
        placeholder="Enter depth"
        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>

    <!-- Safety offset slider and numeric readout -->
    <div class="flex-1 mb-4 sm:mb-0">
      <label class="block text-sm font-medium text-gray-700">
        Safety Offset (mm):
      </label>
      <div class="flex items-center space-x-2 mt-1">
        <!-- Slider -->
        <input
          type="range"
          v-model.number="localSafety"
          @blur="emitValues"
          @keyup.enter="emitValues"
          @change="emitValues"
          min="-2"
          max="2"
          step="0.1"
          class="w-full"
        />
        <!-- Numeric readout -->
        <input
          type="number"
          v-model.number="localSafety"
          @blur="emitValues"
          @keyup.enter="emitValues"
          @change="emitValues"
          min="-2"
          max="2"
          step="0.1"
          class="p-2 border border-gray-300 rounded-md w-16"
        />
      </div>
    </div>

    <!-- Bottom Height input -->
    <div class="flex-1 mb-4 sm:mb-0">
      <label class="block text-sm font-medium text-gray-700">Bottom Height (mm):</label>
      <input
        v-model.number="localBottomHeight"
        @blur="emitValues"
        @keyup.enter="emitValues"
        @change="emitValues"
        type="number"
        placeholder="Enter bottom height"
        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>

    <!-- Top Height input -->
    <div class="flex-1 mb-4 sm:mb-0">
      <label class="block text-sm font-medium text-gray-700">Top Height (mm):</label>
      <input
        v-model.number="localTopHeight"
        @blur="emitValues"
        @keyup.enter="emitValues"
        @change="emitValues"
        type="number"
        placeholder="Enter top height"
        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
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
    initialDepth: {
      type: Number,
      default: 105
    },
    initialSafety: {
      type: Number,
      default: 0
    },
    initialBottomHeight: {
      type: Number,
      default: 15
    },
    initialTopHeight: {
      type: Number,
      default: 25
    }
  },
  data() {
    return {
      localWidth: this.initialWidth,
      localDepth: this.initialDepth,
      localSafety: this.initialSafety,
      localBottomHeight: this.initialBottomHeight,
      localTopHeight: this.initialTopHeight
    };
  },
  methods: {
    emitValues() {
      this.$emit('update-dimensions', {
        width: this.localWidth,
        depth: this.localDepth,
        safety: this.localSafety,
        bottomHeight: this.localBottomHeight,
        topHeight: this.localTopHeight
      });
    }
  }
};
</script>

