import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const basePath = process.env.DEPLOY_ENV === 'production'
  ? '/SynthArmor/'     // release: root path
  : '/SynthArmor/dev/'; // dev: deployed to /dev/ subfolder

export default defineConfig({
  base: basePath,
  plugins: [vue()]
});
