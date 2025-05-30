<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div
      @click.stop
      class="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl mx-4"
      :style="containerStyle"
    >
      <!-- Close -->
      <button
        @click="close"
        class="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >&times;</button>

      <!-- Modal Title -->
      <h2 class="px-6 pt-6 text-2xl font-semibold text-gray-800">Terms &amp; License</h2>

      <!-- Scrollable Body -->
      <div :style="bodyStyle" class="p-6 text-gray-800">
        <div
          v-html="renderedLicense"
          class="prose prose-sm sm:prose lg:prose-lg"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'TermsModal',
  props: { visible: Boolean },
  data() {
    return { license: '' };
  },
  computed: {
    // Inject headings and strip existing hashes from the first line
    formattedLicense() {
      if (!this.license) return '';
      const lines = this.license.split('\n');
      let sawFirst = false;

      return lines.map((raw, i) => {
        const trimmed = raw.trim();
        // Preserve blockquotes
        if (trimmed.startsWith('>')) {
          return raw;
        }
        // First non-empty line: strip leading hashes then make H1
        if (!sawFirst && trimmed) {
          sawFirst = true;
          const text = trimmed.replace(/^#+\s*/, '');
          return `# ${text}`;
        }
        // Subsequent candidate H2 headings
        const next = (lines[i + 1] || '').trim();
        const isUrl = /^https?:\/\//.test(trimmed);
        const noPunctEnd = /[A-Za-z0-9]$/.test(trimmed);
        const isPlainWords = /^[A-Za-z0-9 ]+$/.test(trimmed);

        if (
          sawFirst &&
          trimmed &&
          !isUrl &&
          noPunctEnd &&
          isPlainWords &&
          next
        ) {
          return `## ${trimmed}`;
        }
        return raw;
      }).join('\n');
    },
    renderedLicense() {
      return marked.parse(this.formattedLicense, {
        headerIds: false,
        mangle: false,
        gfm: true
      });
    },
    containerStyle() {
      return { position: 'relative', maxHeight: '80vh' };
    },
    bodyStyle() {
      return { maxHeight: 'calc(80vh - 4rem)', overflowY: 'auto' };
    }
  },
  watch: {
    visible(val) {
      if (val && !this.license) {
        fetch(`${import.meta.env.BASE_URL}LICENSE`)
          .then(r => r.text())
          .then(text => { this.license = text; })
          .catch(() => { this.license = 'Failed to load terms.'; });
      }
    }
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    }
  }
};
</script>

<style>
/* Headings */
.prose h1 {
  font-size: 2.25rem;
  color: #1f2937;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
}
.prose h2 {
  font-size: 1.875rem;
  color: #374151;
  margin-top: 1.75rem;
  margin-bottom: 0.875rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.4rem;
}
.prose h3 { font-size: 1.5rem; color: #4b5563; margin: 1.5rem 0 0.75rem; }

/* Blockquotes with real quotes */
.prose blockquote {
  position: relative;
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  border-left: 4px solid #d1d5db;
  background-color: #f9fafb;
  font-style: italic;
  quotes: "“" "”" "‘" "’";
}
.prose blockquote p::before {
  content: open-quote;
  font-size: 2rem;
  line-height: 0;
  position: absolute;
  left: 0.5rem;
  top: -0.25rem;
  color: #d1d5db;
}
.prose blockquote p::after {
  content: close-quote;
  font-size: 2rem;
  line-height: 0;
  position: absolute;
  right: 0.5rem;
  bottom: -0.25rem;
  color: #d1d5db;
}

/* Other custom tweaks… */
.prose hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 2rem 0;
}
.prose code {
  background-color: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
}
.prose pre {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.375rem;
  overflow-x: auto;
}
</style>

