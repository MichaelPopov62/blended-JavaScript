import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/blended-JavaScript/', 

  publicDir: '../public',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
