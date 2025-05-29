<template>
  <fieldset class="mb-6 p-4 border border-gray-300 rounded">
    <legend class="px-2 text-lg font-semibold">Advanced Settings</legend>
    <form
      @submit.prevent
      class="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end mt-4"
      style="width: 100%; max-width: 600px; margin: 0 auto; box-sizing: border-box;"
    >
      <!-- Bottom Height input -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Bottom Height (mm):</label>
        <input
          v-model.number="localBottomHeight"
          @blur="emitValues"
          @keyup.enter="emitValues"
          @change="emitValues"
          type="number"
          placeholder="15"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <!-- Top Height input -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Top Height (mm):</label>
        <input
          v-model.number="localTopHeight"
          @blur="emitValues"
          @keyup.enter="emitValues"
          @change="emitValues"
          type="number"
          placeholder="25"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <!-- Border Thickness input -->
      <div class="flex-1 mb-4">
        <label class="block text-sm font-medium text-gray-700">Border Thickness (mm):</label>
        <input
          v-model.number="localBorderThickness"
          @blur="emitValues"
          @keyup.enter="emitValues"
          @change="emitValues"
          type="number"
          placeholder="2.5"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
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
      localBottomHeight:   this.initialBottomHeight,
      localTopHeight:      this.initialTopHeight,
      localBorderThickness:this.initialBorderThickness
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

