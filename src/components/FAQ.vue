<template>
  <div class="w-full max-w-[600px] mt-8">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">FAQ</h2>
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"
    >
      <button
        @click="toggle(index)"
        class="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <span class="text-lg font-medium text-gray-700">{{ faq.question }}</span>
        <svg
          class="w-5 h-5 text-gray-500 transform transition-transform duration-300"
          :class="{ 'rotate-180': faq.open }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <transition name="faq-collapse">
        <div v-show="faq.open" class="px-6 py-4 bg-gray-50">
          <!-- Render answer as HTML to support lists and formatting -->
          <div v-html="faq.answer" class="text-gray-600"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      faqs: [
        {
          question: "What is this?",
          answer:
            "This web app lets you quickly generate a custom 3D model for gear cover protection. Simply enter your equipment’s dimensions, adjust a safety offset if needed, and download an STL file ready for 3D printing.",
          open: false
        },
        {
          question: "How does it work?",
          answer: `
            <ol class="list-decimal pl-6 mt-2">
              <li><strong>Enter Dimensions:</strong> Provide the exact width and depth of your machine.</li>
              <li><strong>Adjust for Fit:</strong> Use the "Safety Offset" to add a small buffer for a secure fit.</li>
              <li><strong>Automatic Preview:</strong> The model updates automatically as you modify the values.</li>
              <li><strong>Download STL:</strong> Click the download button to save your custom design for 3D printing.</li>
            </ol>
          `,
          open: false
        },
        {
          question: "A Word of Caution",
          answer: "Please note that you are solely responsible for ensuring that the generated model fits your machine. Always double-check the dimensions before printing.",
          open: false
        }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
};
</script>

<style scoped>
.faq-collapse-enter-active,
.faq-collapse-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
}
.faq-collapse-enter-from,
.faq-collapse-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.faq-collapse-enter-to,
.faq-collapse-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
