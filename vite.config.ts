/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // This setting fixes the preview port to the same
  // default as the dev server port.
  // Allows cypress e2e tests to run both on dev and
  // on preview.
  preview: {
    port: 5173,
    strictPort: true,
    host: true,
  },
  plugins: [react()],
});
