<template>
  <fieldset class="mb-6 p-4 border border-gray-300 rounded">
    <legend class="px-2 text-lg font-semibold">Dimensions</legend>
    <form
      @submit.prevent
      class="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end"
      style="width: 100%; max-width: 600px; margin: 0 auto; box-sizing: border-box;"
    >
      <!-- Width input with slider -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Width (mm):</label>
        <div class="flex items-center space-x-2 mt-1">
          <input
            type="range"
            v-model.number="localWidth"
            @input="emitValues"
            min="0"
            max="300"
            step="1"
            class="w-full"
          />
          <input
            type="number"
            v-model.number="localWidth"
            @blur="emitValues"
            @keyup.enter="emitValues"
            @change="emitValues"
            min="0"
            max="300"
            step="1"
            placeholder="155"
            class="p-2 border border-gray-300 rounded-md w-16"
          /> mm
        </div>
      </div>

      <!-- Depth input with slider -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Depth (mm):</label>
        <div class="flex items-center space-x-2 mt-1">
          <input
            type="range"
            v-model.number="localDepth"
            @input="emitValues"
            min="0"
            max="300"
            step="1"
            class="w-full"
          />
          <input
            type="number"
            v-model.number="localDepth"
            @blur="emitValues"
            @keyup.enter="emitValues"
            @change="emitValues"
            min="0"
            max="300"
            step="1"
            placeholder="105"
            class="p-2 border border-gray-300 rounded-md w-16"
          /> mm
        </div>
      </div>

      <!-- Safety Offset input (unchanged) -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Safety Offset (mm):</label>
        <div class="flex items-center space-x-2 mt-1">
          <input
            type="range"
            v-model.number="localSafety"
            @input="emitValues"
            min="-2"
            max="2"
            step="0.1"
            class="w-full"
          />
          <input
            type="number"
            v-model.number="localSafety"
            @blur="emitValues"
            @keyup.enter="emitValues"
            @change="emitValues"
            min="-2"
            max="2"
            step="0.1"
            placeholder="0"
            class="p-2 border border-gray-300 rounded-md w-16"
          /> mm
        </div>
      </div>
    </form>
  </fieldset>
</template>

<script>
export default {
  name: 'BasicForm',
  props: {
    initialWidth:  { type: Number, default: 155 },
    initialDepth:  { type: Number, default: 105 },
    initialSafety: { type: Number, default: 0   }
  },
  data() {
    return {
      localWidth:  this.initialWidth,
      localDepth:  this.initialDepth,
      localSafety: this.initialSafety
    };
  },
  methods: {
    emitValues() {
      this.$emit('update-dimensions', {
        width:  this.localWidth,
        depth:  this.localDepth,
        safety: this.localSafety
      });
    }
  }
};
</script>

