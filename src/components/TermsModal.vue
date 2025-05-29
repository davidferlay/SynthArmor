<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="close"
  >
    <!-- the actual dialog: absolute within the overlay, clipped, flex column -->
    <div
      @click.stop
      class="bg-white rounded-lg shadow-lg relative"
      :style="containerStyle"
    >
      <!-- Close -->
      <button
        @click="close"
        class="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        &times;
      </button>

      <!-- Header -->
      <h2 class="px-6 pt-6 text-xl font-semibold">Terms</h2>

      <!-- Scrollable body -->
      <div :style="bodyStyle">
        <pre class="whitespace-pre-wrap break-words text-sm text-gray-800">{{ license }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsModal',
  props: {
    visible: { type: Boolean, required: true }
  },
  data() {
    return {
      license: ''
    };
  },
  computed: {
    // dialog sits 15vh from top & bottom, 5vw from left & right
    containerStyle() {
      return {
        position: 'absolute',
        top: '15vh',
        bottom: '15vh',
        left: '5vw',
        right: '5vw',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      };
    },
    // take up all remaining space and scroll
    bodyStyle() {
      return {
        flex: '1',
        overflowY: 'auto',
        padding: '1rem'
      };
    }
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    }
  },
  watch: {
    visible(val) {
      if (val && !this.license) {
        fetch(`${import.meta.env.BASE_URL}LICENSE`)
          .then(res => res.text())
          .then(text => (this.license = text))
          .catch(() => (this.license = 'Failed to load terms.'));
      }
    }
  }
};
</script>

