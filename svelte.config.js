// vite preprocessor
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// vercel adapter
import { default as adapter } from "@sveltejs/adapter-vercel";


const aliasList = {
	$assets: "./src/lib/assets",
	$components: "./src/lib/components",
	$data: "./src/lib/data",
	$handlers: "./src/handlers",
	$types: "./src/lib/types",
	$utils: "./src/lib/utils",
};

// define csp
const csp = {
	directives: {
		"default-src": ["self"],
		// connect
		"connect-src": ["self"],
		// fonts
		"font-src": ["self", "https://cdn.fontshare.com/"],
		// frames
		"frame-src": ["self"],
		// images
		"img-src": [
			"self",
			"https://res.cloudinary.com/",
			"https://thrivesa.nyc3.digitaloceanspaces.com",
		],
		// media
		"media-src": [
			"self",
			"https://res.cloudinary.com/",
			"https://thrivesa.nyc3.digitaloceanspaces.com",
		],
		// styles
		"style-src": ["self", "https://cdn.lj.dev/", "https://api.fontshare.com/"],
		// scripts
		"script-src": ["self", "strict-dynamic"],
	},
	mode: "auto",
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: aliasList,
		// csp: csp,
	},
	compilerOptions: {
		discloseVersion: false,
		runes: true
	},
	extensions: [".svelte"],
};

export default config;
