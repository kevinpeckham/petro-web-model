import extractorSvelte from "@unocss/extractor-svelte";
import { presetUno, transformerVariantGroup, transformerDirectives } from "unocss";

import { defineConfig } from "unocss";

// settings
const sansStack = `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
			"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
			"Noto Color Emoji"`;

export default defineConfig({
	extractors: [extractorSvelte()],
	content: {
		filesystem: [
			"./src/**/*.{html,js,ts,tsx,svelte,svx,md,json,jsonc.mdx}", // Add this line to scan app.html
			"./src/app.html",
		],
	},
	shortcuts: [],
	preflights: [],
	presets: [presetUno()],
	theme: {
		colors: {
			// "purple-dark": "1D011D", // dark purple
		},
		fontFamily: {
			// chillax: `"Chillax", ${sansStack}`,
			// synonym: `"Synonym", ${sansStack}`,
		},
	},

	rules: [
		[
			/^page-x-padding$/,
			([, d], { symbols }) => [
					{ "padding-inline": "1rem" },
					{
						[symbols.parent]: "@media (min-width: 640px)",
						"padding-inline": "1.5rem",
					},
					{
						[symbols.parent]: "@media (min-width: 768px)",
						"padding-inline": "1.75rem",
					},
					{
						[symbols.parent]: "@media (min-width: 1024px)",
						"padding-inline": "2rem",
					},
					{
						[symbols.parent]: "@media (min-width: 1280px)",
						"padding-inline": "4rem",
					},
					{
						[symbols.parent]: "@media (min-width: 1700px)",
						"padding-inline": "calc((100vw - 1600px) / 2)",
					},
				],
		],
		//-- font-weight classes e.g. font-400
		[
			/^font-(\d+)$/,
			([, d]) => ({ "font-weight": `${d}` }),
			{ layer: "utilities" },
		],
		//-- font-size classes e.g. text-12 (12px)
		[
			/^text-(\d+)$/,
			([, d]) => ({ "font-size": `${d}px` }),
			{ layer: "utilities" },
		],
		//-- content visibility
		[
			/^content-(hidden|visible|auto)$/,
			([, d]) => ({ "content-visibility": d }),
			{ layer: "utilities" },
		],
	],
	safelist: [],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
