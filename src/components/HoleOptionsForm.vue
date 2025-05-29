<template>
  <fieldset class="mb-6 p-4 border border-gray-300 rounded">
    <legend class="px-2 text-lg font-semibold">Hole Options</legend>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Back‐side hole -->
      <div>
        <div class="inline-flex items-center mb-2">
          <input type="checkbox" v-model="local.enableBackHole" class="mr-2"/>
          <span class="text-sm font-medium text-gray-700">Enable Back Hole</span>
        </div>
        <div v-if="local.enableBackHole" class="space-y-2">
          <!-- Offset X -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Position:</label>
            <input
              type="range"
              v-model.number="local.backHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.backHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
          <!-- Width -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Width:</label>
            <input
              type="range"
              v-model.number="local.backHoleWidth"
              min="0"
              max="300"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.backHoleWidth"
              min="0"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
          <!-- Height -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Height:</label>
            <input
              type="range"
              v-model.number="local.backHoleHeight"
              min="0"
              :max="bottomHeight"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.backHoleHeight"
              min="0"
	      :max="bottomHeight"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
        </div>
      </div>

      <!-- Front‐side hole -->
      <div>
        <div class="inline-flex items-center mb-2">
          <input type="checkbox" v-model="local.enableFrontHole" class="mr-2"/>
          <span class="text-sm font-medium text-gray-700">Enable Front Hole</span>
        </div>
        <div v-if="local.enableFrontHole" class="space-y-2">
          <!-- Offset X -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Position:</label>
            <input
              type="range"
              v-model.number="local.frontHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.frontHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
          <!-- Width -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Width:</label>
            <input
              type="range"
              v-model.number="local.frontHoleWidth"
              min="0"
              max="300"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.frontHoleWidth"
              min="0"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
          <!-- Height -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Height:</label>
            <input
              type="range"
              v-model.number="local.frontHoleHeight"
              min="0"
              :max="bottomHeight"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.frontHoleHeight"
              min="0"
	      :max="bottomHeight"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
        </div>
      </div>

      <!-- Right‐side hole -->
      <div>
        <div class="inline-flex items-center mb-2">
          <input type="checkbox" v-model="local.enableRightHole" class="mr-2"/>
          <span class="text-sm font-medium text-gray-700">Enable Right Hole</span>
        </div>
        <div v-if="local.enableRightHole" class="space-y-2">
          <!-- Offset X -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Position:</label>
            <input
              type="range"
              v-model.number="local.rightHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.rightHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
          <!-- Width -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Width:</label>
            <input
              type="range"
              v-model.number="local.rightHoleWidth"
              min="0"
              max="300"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.rightHoleWidth"
              min="0"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
          <!-- Height -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Height:</label>
            <input
              type="range"
              v-model.number="local.rightHoleHeight"
              min="0"
              :max="bottomHeight"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.rightHoleHeight"
              min="0"
	      :max="bottomHeight"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
        </div>
      </div>

      <!-- Left‐side hole -->
      <div>
        <div class="inline-flex items-center mb-2">
          <input type="checkbox" v-model="local.enableLeftHole" class="mr-2"/>
          <span class="text-sm font-medium text-gray-700">Enable Left Hole</span>
        </div>
        <div v-if="local.enableLeftHole" class="space-y-2">
          <!-- Offset X -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Position:</label>
            <input
              type="range"
              v-model.number="local.leftHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.leftHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
          <!-- Width -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Width:</label>
            <input
              type="range"
              v-model.number="local.leftHoleWidth"
              min="0"
              max="300"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.leftHoleWidth"
              min="0"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
          <!-- Height -->
          <div class="flex items-center space-x-2">
            <label class="w-24 text-sm text-gray-700">Height:</label>
            <input
              type="range"
              v-model.number="local.leftHoleHeight"
              min="0"
              :max="bottomHeight"
              step="1"
              class="flex-1"
            />
            <input
              type="number"
              v-model.number="local.leftHoleHeight"
              min="0"
	      :max="bottomHeight"
              class="p-2 border border-gray-300 rounded-md w-16"
            />
            <span class="text-sm text-gray-700">mm</span>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'HoleOptionsForm',
  props: {
    initialEnableBackHole:   { type: Boolean, default: false },
    initialBackHoleXOffset:  { type: Number,  default: 0     },
    initialBackHoleWidth:    { type: Number,  default: 55    },
    initialBackHoleHeight:   { type: Number,  default: 10    },

    initialEnableFrontHole:  { type: Boolean, default: false },
    initialFrontHoleXOffset: { type: Number,  default: 0     },
    initialFrontHoleWidth:   { type: Number,  default: 55    },
    initialFrontHoleHeight:  { type: Number,  default: 10    },

    initialEnableRightHole:  { type: Boolean, default: false },
    initialRightHoleXOffset: { type: Number,  default: 0     },
    initialRightHoleWidth:   { type: Number,  default: 55    },
    initialRightHoleHeight:  { type: Number,  default: 10    },

    initialEnableLeftHole:   { type: Boolean, default: false },
    initialLeftHoleXOffset:  { type: Number,  default: 0     },
    initialLeftHoleWidth:    { type: Number,  default: 55    },
    initialLeftHoleHeight:   { type: Number,  default: 10    },

    bottomHeight:            { type: Number,  required: true }
  },
  data() {
    return {
      local: {
        enableBackHole:   this.initialEnableBackHole,
        backHoleXOffset:  this.initialBackHoleXOffset,
        backHoleWidth:    this.initialBackHoleWidth,
        backHoleHeight:   this.initialBackHoleHeight,

        enableFrontHole:   this.initialEnableFrontHole,
        frontHoleXOffset:  this.initialFrontHoleXOffset,
        frontHoleWidth:    this.initialFrontHoleWidth,
        frontHoleHeight:   this.initialFrontHoleHeight,

        enableRightHole:   this.initialEnableRightHole,
        rightHoleXOffset:  this.initialRightHoleXOffset,
        rightHoleWidth:    this.initialRightHoleWidth,
        rightHoleHeight:   this.initialRightHoleHeight,

        enableLeftHole:    this.initialEnableLeftHole,
        leftHoleXOffset:   this.initialLeftHoleXOffset,
        leftHoleWidth:     this.initialLeftHoleWidth,
        leftHoleHeight:    this.initialLeftHoleHeight
      }
    };
  },
  watch: {
    local: {
      deep: true,
      handler() {
        this.$emit('update-hole-options', { ...this.local });
      }
    }
  }
};
</script>
