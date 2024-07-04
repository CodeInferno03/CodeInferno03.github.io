import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/CodeInferno03.github.io/', // Ensure the base path is correct
  // build: {
  //   outDir: '../dist' // adjust the output directory as needed
  // }
});
