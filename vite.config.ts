import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'element-plus': 'element-plus/dist/index.full.mjs', // Use full ES module version
    },
  },
  build: {
    target: 'esnext',
    minify: false,
  },
})
