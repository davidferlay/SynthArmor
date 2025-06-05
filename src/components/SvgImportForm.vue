<template>
  <fieldset class="mb-6 p-4 border border-gray-300 rounded">
    <legend class="px-2 text-lg font-semibold">Import SVG</legend>
    <input
      type="file"
      accept=".svg"
      @change="onFileChange"
      class="mt-2"
    />
  </fieldset>
</template>

<script>
export default {
  name: "SvgImportForm",
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        // emit the raw SVG text
        this.$emit("update-svg", reader.result);
      };
      reader.readAsText(file);
    },
  },
};
</script>

