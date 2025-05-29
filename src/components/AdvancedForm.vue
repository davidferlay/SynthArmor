<template>
  <fieldset class="mb-6 p-4 border border-gray-300 rounded">
    <legend class="px-2 text-lg font-semibold">Advanced Settings</legend>
    <form
      @submit.prevent
      class="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end mt-4"
      style="width: 100%; max-width: 600px; margin: 0 auto; box-sizing: border-box;"
    >
      <!-- Bottom Height input with slider -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Bottom Height:</label>
        <div class="flex items-center space-x-2 mt-1">
          <input
            type="range"
            v-model.number="localBottomHeight"
            @input="emitValues"
            min="0"
            max="100"
            step="1"
            class="flex-1"
          />
          <input
            type="number"
            v-model.number="localBottomHeight"
            @blur="emitValues"
            @keyup.enter="emitValues"
            @change="emitValues"
            min="0"
            max="100"
            step="1"
            placeholder="15"
            class="p-2 border border-gray-300 rounded-md w-16"
          />
          <span class="text-sm text-gray-700">mm</span>
        </div>
      </div>

      <!-- Top Height input with slider -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Top Height:</label>
        <div class="flex items-center space-x-2 mt-1">
          <input
            type="range"
            v-model.number="localTopHeight"
            @input="emitValues"
            min="0"
            max="100"
            step="1"
            class="flex-1"
          />
          <input
            type="number"
            v-model.number="localTopHeight"
            @blur="emitValues"
            @keyup.enter="emitValues"
            @change="emitValues"
            min="0"
            max="100"
            step="1"
            placeholder="25"
            class="p-2 border border-gray-300 rounded-md w-16"
          />
          <span class="text-sm text-gray-700">mm</span>
        </div>
      </div>

      <!-- Border Thickness input -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Border Thickness:</label>
        <div class="mt-1 flex items-center space-x-1">
          <input
            v-model.number="localBorderThickness"
            @blur="emitValues"
            @keyup.enter="emitValues"
            @change="emitValues"
            type="number"
            min="0"
            step="0.1"
            placeholder="2.5"
            class="p-2 border border-gray-300 rounded-md w-16"
          />
          <span class="text-sm text-gray-700">mm</span>
        </div>
      </div>
    </form>
  </fieldset>
</template>

<script>
export default {
  name: 'AdvancedForm',
  props: {
    initialBottomHeight:   { type: Number, default: 15  },
    initialTopHeight:      { type: Number, default: 25  },
    initialBorderThickness:{ type: Number, default: 2.5 }
  },
  data() {
    return {
      localBottomHeight:    this.initialBottomHeight,
      localTopHeight:       this.initialTopHeight,
      localBorderThickness: this.initialBorderThickness
    };
  },
  methods: {
    emitValues() {
      this.$emit('update-advanced', {
        bottomHeight:    this.localBottomHeight,
        topHeight:       this.localTopHeight,
        borderThickness: this.localBorderThickness
      });
    }
  }
};
</script>
