import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',        // project root
  base: '/for_test_only',       // important if deploying to subfolder or static hosting
  build: {
    outDir: 'dist', // default output folder
    emptyOutDir: true
  }
})
