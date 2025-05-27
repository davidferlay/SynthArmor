<template>
  <fieldset class="mb-6 p-4 border border-gray-300 rounded">
    <legend class="px-2 text-lg font-semibold">Hole Options</legend>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Back-side hole -->
      <div>
        <label class="inline-flex items-center">
          <input type="checkbox" v-model="local.enableBackHole" class="mr-2"/>
          Enable Back Hole
        </label>
        <div v-if="local.enableBackHole" class="mt-2 space-y-2">
          <div>
            <label class="block text-sm">Offset X (mm):</label>
            <input
              type="range"
              v-model.number="local.backHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="w-full"
            />
            <div class="mt-1">
              <input
                type="number"
                v-model.number="local.backHoleXOffset"
                class="w-20 p-1 border rounded"
              /> mm
            </div>
          </div>
          <div>
            <label class="block text-sm">Width (mm):</label>
            <input
              type="number"
              v-model.number="local.backHoleWidth"
              min="0"
              class="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label class="block text-sm">Height (mm):</label>
            <input
              type="number"
              v-model.number="local.backHoleHeight"
              min="0"
              class="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <!-- Front-side hole -->
      <div>
        <label class="inline-flex items-center">
          <input type="checkbox" v-model="local.enableFrontHole" class="mr-2"/>
          Enable Front Hole
        </label>
        <div v-if="local.enableFrontHole" class="mt-2 space-y-2">
          <div>
            <label class="block text-sm">Offset X (mm):</label>
            <input
              type="range"
              v-model.number="local.frontHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="w-full"
            />
            <div class="mt-1">
              <input
                type="number"
                v-model.number="local.frontHoleXOffset"
                class="w-20 p-1 border rounded"
              /> mm
            </div>
          </div>
          <div>
            <label class="block text-sm">Width (mm):</label>
            <input
              type="number"
              v-model.number="local.frontHoleWidth"
              min="0"
              class="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label class="block text-sm">Height (mm):</label>
            <input
              type="number"
              v-model.number="local.frontHoleHeight"
              min="0"
              class="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <!-- Right-side hole -->
      <div>
        <label class="inline-flex items-center">
          <input type="checkbox" v-model="local.enableRightHole" class="mr-2"/>
          Enable Right Hole
        </label>
        <div v-if="local.enableRightHole" class="mt-2 space-y-2">
          <div>
            <label class="block text-sm">Offset X (mm):</label>
            <input
              type="range"
              v-model.number="local.rightHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="w-full"
            />
            <div class="mt-1">
              <input
                type="number"
                v-model.number="local.rightHoleXOffset"
                class="w-20 p-1 border rounded"
              /> mm
            </div>
          </div>
          <div>
            <label class="block text-sm">Width (mm):</label>
            <input
              type="number"
              v-model.number="local.rightHoleWidth"
              min="0"
              class="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label class="block text-sm">Height (mm):</label>
            <input
              type="number"
              v-model.number="local.rightHoleHeight"
              min="0"
              class="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <!-- Left-side hole -->
      <div>
        <label class="inline-flex items-center">
          <input type="checkbox" v-model="local.enableLeftHole" class="mr-2"/>
          Enable Left Hole
        </label>
        <div v-if="local.enableLeftHole" class="mt-2 space-y-2">
          <div>
            <label class="block text-sm">Offset X (mm):</label>
            <input
              type="range"
              v-model.number="local.leftHoleXOffset"
              min="-100"
              max="100"
              step="1"
              class="w-full"
            />
            <div class="mt-1">
              <input
                type="number"
                v-model.number="local.leftHoleXOffset"
                class="w-20 p-1 border rounded"
              /> mm
            </div>
          </div>
          <div>
            <label class="block text-sm">Width (mm):</label>
            <input
              type="number"
              v-model.number="local.leftHoleWidth"
              min="0"
              class="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label class="block text-sm">Height (mm):</label>
            <input
              type="number"
              v-model.number="local.leftHoleHeight"
              min="0"
              class="w-full p-2 border rounded"
            />
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
    initialLeftHoleHeight:   { type: Number,  default: 10    }
  },
  data() {
    return {
      local: {
        enableBackHole:   this.initialEnableBackHole,
        backHoleXOffset:  this.initialBackHoleXOffset,
        backHoleWidth:    this.initialBackHoleWidth,
        backHoleHeight:   this.initialBackHoleHeight,

        enableFrontHole:  this.initialEnableFrontHole,
        frontHoleXOffset: this.initialFrontHoleXOffset,
        frontHoleWidth:   this.initialFrontHoleWidth,
        frontHoleHeight:  this.initialFrontHoleHeight,

        enableRightHole:  this.initialEnableRightHole,
        rightHoleXOffset: this.initialRightHoleXOffset,
        rightHoleWidth:   this.initialRightHoleWidth,
        rightHoleHeight:  this.initialRightHoleHeight,

        enableLeftHole:   this.initialEnableLeftHole,
        leftHoleXOffset:  this.initialLeftHoleXOffset,
        leftHoleWidth:    this.initialLeftHoleWidth,
        leftHoleHeight:   this.initialLeftHoleHeight
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

