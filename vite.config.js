import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
  resolve: {
    alias: {
      '$src': path.resolve(__dirname, './src'),
      '$components': path.resolve(__dirname, './src/components'),
      '$styles': path.resolve(__dirname, './src/styles'),
      '$interfaces': path.resolve(__dirname, './src/interfaces')
    }
  },
  vite: {
  },
  ssr: {
    noExternal: ['style-value-types', 'popmotion', 'framesync']
  }
};

export default config;
