import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  plugins: [vue({
    template: {
      preprocessOptions: {
        pug: {
          doctype: 'html'
        }
      }
    }
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure .htaccess and other dot files are copied
    copyPublicDir: true,
    rollupOptions: {
      output: {
        // Ensure consistent file naming for better caching
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },
  // Ensure public directory files are copied (including .htaccess)
  publicDir: 'public'
})