<template>
  <div class="mb-8 bg-white rounded-lg p-6 shadow">
    <h3 class="text-lg font-semibold mb-4">Logo Options</h3>
    
    <div class="space-y-4">
      <!-- Enable Logo -->
      <div>
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="localLogoEnabled"
            @change="updateValue"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <span>Add logo to top surface</span>
        </label>
      </div>

      <!-- SVG File Upload -->
      <div v-if="localLogoEnabled" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">Upload SVG Logo</label>
          <input
            type="file"
            accept=".svg"
            @change="handleFileUpload"
            class="block w-full text-sm text-gray-900
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              file:cursor-pointer"
          />
          <p v-if="fileName" class="mt-2 text-sm text-gray-600">
            Current file: {{ fileName }}
            <span class="block text-xs text-orange-600 mt-1">
              Note: SVG parsing is temporarily disabled. A rectangular placeholder will be used.
            </span>
          </p>
        </div>

        <!-- Logo Parameters -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="logoWidth" class="block text-sm font-medium mb-1">
              Logo Width (mm)
            </label>
            <input
              id="logoWidth"
              type="number"
              v-model.number="localLogoWidth"
              @input="updateValue"
              min="1"
              step="0.1"
              class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="logoHeight" class="block text-sm font-medium mb-1">
              Logo Height (mm)
            </label>
            <input
              id="logoHeight"
              type="number"
              v-model.number="localLogoHeight"
              @input="updateValue"
              min="1"
              step="0.1"
              class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="logoDepth" class="block text-sm font-medium mb-1">
              Logo Depth (mm)
            </label>
            <input
              id="logoDepth"
              type="number"
              v-model.number="localLogoDepth"
              @input="updateValue"
              min="-5"
              max="5"
              step="0.1"
              class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p class="text-xs text-gray-600 mt-1">
              Positive = raised, Negative = engraved
            </p>
          </div>

          <div>
            <label for="logoXOffset" class="block text-sm font-medium mb-1">
              X Offset (mm)
            </label>
            <input
              id="logoXOffset"
              type="number"
              v-model.number="localLogoXOffset"
              @input="updateValue"
              step="0.1"
              class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="logoYOffset" class="block text-sm font-medium mb-1">
              Y Offset (mm)
            </label>
            <input
              id="logoYOffset"
              type="number"
              v-model.number="localLogoYOffset"
              @input="updateValue"
              step="0.1"
              class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoUploadForm',
  props: {
    logoEnabled: {
      type: Boolean,
      default: false
    },
    logoSvgContent: {
      type: String,
      default: ''
    },
    logoWidth: {
      type: Number,
      default: 30
    },
    logoHeight: {
      type: Number,
      default: 30
    },
    logoDepth: {
      type: Number,
      default: 1
    },
    logoXOffset: {
      type: Number,
      default: 0
    },
    logoYOffset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      localLogoEnabled: this.logoEnabled,
      localLogoWidth: this.logoWidth,
      localLogoHeight: this.logoHeight,
      localLogoDepth: this.logoDepth,
      localLogoXOffset: this.logoXOffset,
      localLogoYOffset: this.logoYOffset,
      fileName: ''
    };
  },
  methods: {
    updateValue() {
      const data = {
        logoEnabled: this.localLogoEnabled,
        logoWidth: this.localLogoWidth,
        logoHeight: this.localLogoHeight,
        logoDepth: this.localLogoDepth,
        logoXOffset: this.localLogoXOffset,
        logoYOffset: this.localLogoYOffset
      };
      console.log('LogoUploadForm emitting update:', data);
      this.$emit('update', data);
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      console.log('File upload event, file:', file);
      if (file && file.type === 'image/svg+xml') {
        this.fileName = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log('SVG file read, emitting svg-uploaded event');
          this.$emit('svg-uploaded', e.target.result);
        };
        reader.readAsText(file);
      }
    }
  },
  watch: {
    logoEnabled(val) {
      this.localLogoEnabled = val;
    },
    logoWidth(val) {
      this.localLogoWidth = val;
    },
    logoHeight(val) {
      this.localLogoHeight = val;
    },
    logoDepth(val) {
      this.localLogoDepth = val;
    },
    logoXOffset(val) {
      this.localLogoXOffset = val;
    },
    logoYOffset(val) {
      this.localLogoYOffset = val;
    }
  }
};
</script>