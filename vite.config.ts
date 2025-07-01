import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      //"@": new URL('./src', import.meta.url).pathname,
      "@": path.resolve(__dirname, 'src'), 
      /*
        path.resolve is more compatible, not as modern, but preferred in real world apps.
      */
    }
  }
})
