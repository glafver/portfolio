import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // ffmpeg.wasm spawns a worker via `new Worker(new URL("./worker.js", import.meta.url))`.
    // If Vite pre-bundles the package, that URL breaks and ffmpeg.load() hangs forever.
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'],
  },
})
