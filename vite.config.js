import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Forma_web/',
  server: {
    port: 5173,
    open: false
  }
});

