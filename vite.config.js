import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import posthtml from 'posthtml';
import include from 'posthtml-include';

export default defineConfig({
  root: 'src',  
    server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
  plugins: [
    {
      name: 'html-load',
      enforce: 'pre',
      transformIndexHtml(html) {
        return posthtml([include()]).process(html).then(res => res.html);
      },
    },
    createHtmlPlugin(),
  ],
});
