import { defineConfig } from 'vite'

export default defineConfig({
  base: '/for_test_only/',   // pangalan ng GitHub repo mo
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
