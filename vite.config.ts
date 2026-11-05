import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a repo named "<user>.github.io" the site lives at the root ("/").
// For any other repo name, set BASE_PATH="/<repo>/" (the deploy workflow does this automatically).
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? '/',
});
