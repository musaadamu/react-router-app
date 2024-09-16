import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: process.env.NODE_ENV === 'production' ? ['miragejs'] : []
    }
  }
});