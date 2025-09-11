// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import copy from "rollup-plugin-copy";
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'opencv-document-scanner',
      fileName: 'opencv-document-scanner',
    },
  },
  plugins: [
    copy({
      targets: [
        {
          src: "node_modules/dynamsoft-document-viewer/dist",
          dest: "public/dynamsoft-document-viewer",
        },
      ],
      hook: "buildStart",
    }),
    dts()
  ],
});