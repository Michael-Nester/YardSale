import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ plugins: [tailwindcss(), sveltekit()], ssr: {
    // Force Vite to process Threlte instead of letting Node load it directly
    noExternal: ['threlte', '@threlte/core', '@threlte/extras', 'three']
  } });
