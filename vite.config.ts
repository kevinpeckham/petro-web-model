import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export const config = defineConfig({
	plugins: [UnoCSS(), sveltekit()],
	assetsInclude: ['**/*.svg'],
});

export default config;
