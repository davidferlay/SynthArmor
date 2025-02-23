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
          <!-- Render answer as HTML to support bullet lists -->
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
          question: "What is this ?",
          answer:
            "This app is designed to help you generate 3D model of a generic cover protection for all your musical (and otherwise) gear. The resulting STL file can be downloaded and 3D printed.",
          open: false
        },
        {
          question: "How does it work ?",
          answer:
            `Tweak the dimensions of the generic cover model to your needs:
            <ul class="list-disc pl-6 mt-2">
              <li>Input the precise dimensions of the machine you want the cover to be for</li>
              <li>Optionaly - Fine adjust dimensions using the slider.</li>
            </ul>`,
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

