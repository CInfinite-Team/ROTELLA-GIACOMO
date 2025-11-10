import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // 🧱 Minify JS and CSS for smaller bundles
    minify: 'esbuild',

    // ⚡ Generate source maps only if you need debugging in production
    sourcemap: false,

    // 🪶 Reduce warnings for large chunks
    chunkSizeWarningLimit: 1000,

    // 📦 Cache-busting filenames (default)
    assetsDir: 'assets',

    // 🧩 Better control of how code splits
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },

  server: {
    // 👇 Enables fast refresh and dev experience
    open: true,
    port: 5173,
  },
})
