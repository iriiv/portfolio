import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' — чтобы сайт работал на GitHub Pages (https://iriiv.github.io/portfolio/)
export default defineConfig({
  base: './',
  plugins: [react()],
})
