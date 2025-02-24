import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// Get the repository name from package.json or environment variable
const base = '/over-the-top/'; // Replace with your repository name

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: base,
  build: {
    outDir: 'dist',
  },
});
