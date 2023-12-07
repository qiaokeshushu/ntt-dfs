import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: ["vue", "vue-router"],
      dts: false
  })],
  server: {
    host: 'localhost',
    port: 8080,
    proxy: {
      "/v1": {
        target: "http://122.112.180.184:8091/server-api",
        rewrite: (p) => p.replace(/^\/v1/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
