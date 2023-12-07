import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/laupersonaltrainer/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    },
  build: {
    chunkSizeWarningLimit: 1000, 
    minify: 'esbuild',
      },
    
})
