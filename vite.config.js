import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    autoImport({
      imports: ["vue", "vue-router"],
      dts: false
    })
  ],
  server: {
    host: 'localhost',
    port: 8080,
    proxy: {
      "/api": {
        target: "http://122.112.180.184:8091/server-api",
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
