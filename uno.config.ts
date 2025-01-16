import extractorSvelte from "@unocss/extractor-svelte";
import { presetUno, transformerVariantGroup, transformerDirectives } from "unocss";

import { defineConfig } from "unocss";

// settings

export default defineConfig({
	content: {
		filesystem: [
			"./src/**/*.{html,ts,tsx,svelte,svx,md,json,jsonc}", // Add this line to scan app.html
			"./src/app.html",
			"./src/error.html"
		],
	},
	extractors: [extractorSvelte()],
	layers: {
		"legacy-reset": 1,
		"legacy-theme": 2,
		"legacy-print": 3,
		"legacy-vendor": 4,
		"legacy-inline": 5,
		reset: 6,
		preflights: 7,
		variables: 8,
		fonts: 9,
		base: 10,
		components: 11,
		default: 12,
		utilities: 13,
		shortcuts: 14,
	},
	outputToCssLayers: {
		cssLayerName: (layer) => {
			// The default layer will be output to the "utilities" CSS layer.
			if (layer === "default") return "utilities";

		},
	},
	preflights: [
		{
			layer: "reset",
			getCSS: () =>
`[class*="un-"],
[class*="un-"]::after,
[class*="un-"]::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--un-default-border-color, #e5e7eb);
	font-size:16px;
}

[class*="un-"]::after,
[class*="un-"]::before {
  --un-content: "";
}

/* Host and html elements still need global styling for proper UnoCSS functionality */
:host,
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}

[class*="un-"] hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

[class*="un-"] abbr:where([title]) {
  text-decoration: underline dotted;
}

[class*="un-"] h1,
[class*="un-"] h2,
[class*="un-"] h3,
[class*="un-"] h4,
[class*="un-"] h5,
[class*="un-"] h6 {
  font-size: inherit;
  font-weight: inherit;
}

[class*="un-"] a {
  color: inherit;
  text-decoration: inherit;
}

[class*="un-"] b,
[class*="un-"] strong {
  font-weight: bolder;
}

[class*="un-"] code,
[class*="un-"] kbd,
[class*="un-"] pre,
[class*="un-"] samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

[class*="un-"] small {
  font-size: 80%;
}

[class*="un-"] sub,
[class*="un-"] sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

[class*="un-"] sub {
  bottom: -0.25em;
}

[class*="un-"] sup {
  top: -0.5em;
}

[class*="un-"] table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

[class*="un-"] button,
[class*="un-"] input,
[class*="un-"] optgroup,
[class*="un-"] select,
[class*="un-"] textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

[class*="un-"] button,
[class*="un-"] select {
  text-transform: none;
}

[class*="un-"] [type="button"],
[class*="un-"] [type="reset"],
[class*="un-"] [type="submit"],
[class*="un-"] button {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

[class*="un-"] :-moz-focusring {
  outline: auto;
}

[class*="un-"] :-moz-ui-invalid {
  box-shadow: none;
}

[class*="un-"] progress {
  vertical-align: baseline;
}

[class*="un-"] ::-webkit-inner-spin-button,
[class*="un-"] ::-webkit-outer-spin-button {
  height: auto;
}

[class*="un-"] [type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[class*="un-"] ::-webkit-search-decoration {
  -webkit-appearance: none;
}

[class*="un-"] ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

[class*="un-"] summary {
  display: list-item;
}

[class*="un-"] blockquote,
[class*="un-"] dd,
[class*="un-"] dl,
[class*="un-"] figure,
[class*="un-"] h1,
[class*="un-"] h2,
[class*="un-"] h3,
[class*="un-"] h4,
[class*="un-"] h5,
[class*="un-"] h6,
[class*="un-"] hr,
[class*="un-"] p,
[class*="un-"] pre {
  margin: 0;
}

[class*="un-"] fieldset {
  margin: 0;
  padding: 0;
}

[class*="un-"] legend {
  padding: 0;
}

[class*="un-"] menu,
[class*="un-"] ol,
[class*="un-"] ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

[class*="un-"] dialog {
  padding: 0;
}

[class*="un-"] textarea {
  resize: vertical;
}

[class*="un-"] input::placeholder,
[class*="un-"] textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

[class*="un-"] [role="button"],
[class*="un-"] button {
  cursor: pointer;
}

[class*="un-"] :disabled {
  cursor: default;
}

[class*="un-"] audio,
[class*="un-"] canvas,
[class*="un-"] embed,
[class*="un-"] iframe,
[class*="un-"] img,
[class*="un-"] object,
[class*="un-"] svg,
[class*="un-"] video {
  display: block;
  vertical-align: middle;
}

[class*="un-"] img,
[class*="un-"] video {
  max-width: 100%;
  height: auto;
}

[class*="un-"] [hidden]:where(:not([hidden="until-found"])) {
  display: none;
}`,
		},
		{
			layer: "variables",
			getCSS: () =>
				`html {
					--accent: #FBE44A;
					--primary: #013663;
				}`,
		},
		{
			layer: "legacy-vendor",
			getCSS: () =>
				`
			/* simple bar */
			[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none},

			/* tiny slider */
			.tns-outer{padding:0 !important}.tns-outer [hidden]{display:none !important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.tns-slider{-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.tns-slider>.tns-item{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>.tns-item{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:'';display:table;clear:both}.tns-horizontal.tns-no-subpixel>.tns-item{float:left}.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>.tns-item{position:absolute;left:-100%;-webkit-transition:transform 0s, opacity 0s;-moz-transition:transform 0s, opacity 0s;transition:transform 0s, opacity 0s}.tns-gallery>.tns-slide-active{position:relative;left:auto !important}.tns-gallery>.tns-moving{-webkit-transition:all 0.25s;-moz-transition:all 0.25s;transition:all 0.25s}.tns-autowidth{display:inline-block}.tns-lazy-img{-webkit-transition:opacity 0.6s;-moz-transition:opacity 0.6s;transition:opacity 0.6s;opacity:0.6}.tns-lazy-img.tns-complete{opacity:1}.tns-ah{-webkit-transition:height 0s;-moz-transition:height 0s;transition:height 0s}.tns-ovh{overflow:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;filter:alpha(opacity=100);z-index:0}.tns-normal,.tns-fadeOut{opacity:0;filter:alpha(opacity=0);z-index:-1}.tns-vpfix{white-space:nowrap}.tns-vpfix>div,.tns-vpfix>li{display:inline-block}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333%;width:-webkit-calc(100% * 70 / 3);width:-moz-calc(100% * 70 / 3);width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:'';display:table;clear:both}.tns-t-ct>div{width:1.4285714%;width:-webkit-calc(100% / 70);width:-moz-calc(100% / 70);width:calc(100% / 70);height:10px;float:left}

			/* drift basic */
			@keyframes a{0%{transform:scale(1.5);opacity:0}to{transform:scale(1);opacity:1}}@keyframes b{0%{transform:scale(1);opacity:1}15%{transform:scale(1.1);opacity:1}to{transform:scale(.5);opacity:0}}@keyframes c{0%{transform:translate(-50%,-50%) rotate(0)}50%{transform:translate(-50%,-50%) rotate(-180deg)}to{transform:translate(-50%,-50%) rotate(-1turn)}}@keyframes d{0%{transform:scale(1)}10%{transform:scale(1.2) translateX(6px)}25%{transform:scale(1.3) translateX(8px)}40%{transform:scale(1.2) translateX(6px)}50%{transform:scale(1)}60%{transform:scale(.8) translateX(6px)}75%{transform:scale(.7) translateX(8px)}90%{transform:scale(.8) translateX(6px)}to{transform:scale(1)}}@keyframes e{0%{transform:scale(1)}10%{transform:scale(1.2) translateX(-6px)}25%{transform:scale(1.3) translateX(-8px)}40%{transform:scale(1.2) translateX(-6px)}50%{transform:scale(1)}60%{transform:scale(.8) translateX(-6px)}75%{transform:scale(.7) translateX(-8px)}90%{transform:scale(.8) translateX(-6px)}to{transform:scale(1)}}@-webkit-keyframes a{0%{-webkit-transform:scale(1.5);opacity:0}to{-webkit-transform:scale(1);opacity:1}}@-webkit-keyframes b{0%{-webkit-transform:scale(1);opacity:1}15%{-webkit-transform:scale(1.1);opacity:1}to{-webkit-transform:scale(.5);opacity:0}}@-webkit-keyframes c{0%{-webkit-transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(-180deg)}to{-webkit-transform:translate(-50%,-50%) rotate(-1turn)}}@-webkit-keyframes d{0%{-webkit-transform:scale(1)}10%{-webkit-transform:scale(1.2) translateX(6px)}25%{-webkit-transform:scale(1.3) translateX(8px)}40%{-webkit-transform:scale(1.2) translateX(6px)}50%{-webkit-transform:scale(1)}60%{-webkit-transform:scale(.8) translateX(6px)}75%{-webkit-transform:scale(.7) translateX(8px)}90%{-webkit-transform:scale(.8) translateX(6px)}to{-webkit-transform:scale(1)}}@-webkit-keyframes e{0%{-webkit-transform:scale(1)}10%{-webkit-transform:scale(1.2) translateX(-6px)}25%{-webkit-transform:scale(1.3) translateX(-8px)}40%{-webkit-transform:scale(1.2) translateX(-6px)}50%{-webkit-transform:scale(1)}60%{-webkit-transform:scale(.8) translateX(-6px)}75%{-webkit-transform:scale(.7) translateX(-8px)}90%{-webkit-transform:scale(.8) translateX(-6px)}to{-webkit-transform:scale(1)}}.drift-zoom-pane{background:rgba(0,0,0,.5);transform:translateZ(0);-webkit-transform:translateZ(0)}.drift-zoom-pane.drift-opening{animation:a .18s ease-out;-webkit-animation:a .18s ease-out}.drift-zoom-pane.drift-closing{animation:b .21s ease-in;-webkit-animation:b .21s ease-in}.drift-zoom-pane.drift-inline{position:absolute;width:150px;height:150px;border-radius:75px;box-shadow:0 6px 18px rgba(0,0,0,.3)}.drift-loading .drift-zoom-pane-loader{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);width:66px;height:20px;animation:c 1.8s linear infinite;-webkit-animation:c 1.8s linear infinite}.drift-zoom-pane-loader:after,.drift-zoom-pane-loader:before{content:"";display:block;width:20px;height:20px;position:absolute;top:50%;margin-top:-10px;border-radius:20px;background:hsla(0,0%,100%,.9)}.drift-zoom-pane-loader:before{left:0;animation:d 1.8s linear infinite;-webkit-animation:d 1.8s linear infinite}.drift-zoom-pane-loader:after{right:0;animation:e 1.8s linear infinite;-webkit-animation:e 1.8s linear infinite;animation-delay:-.9s;-webkit-animation-delay:-.9s}.drift-bounding-box{background-color:rgba(0,0,0,.4)}

			/* light gallery */
			@font-face{font-family:lg;src:url(../fonts/lg.ttf?22t19m) format("truetype"),url(../fonts/lg.woff?22t19m) format("woff"),url(../fonts/lg.svg?22t19m#lg) format("svg");font-weight:400;font-style:normal;font-display:block}.lg-icon{font-family:lg!important;speak:never;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.lg-actions .lg-next,.lg-actions .lg-prev{border-radius:2px;color:#999;cursor:pointer;display:block;font-size:22px;margin-top:-10px;padding:8px 10px 9px;position:absolute;top:50%;z-index:1080;outline:0;border:none;background-color:transparent}.lg-actions .lg-next.disabled,.lg-actions .lg-prev.disabled{pointer-events:none;opacity:.5}.lg-actions .lg-next:hover,.lg-actions .lg-prev:hover{color:#FFF}.lg-actions .lg-next{right:20px}.lg-actions .lg-next:before{content:"\e095"}.lg-actions .lg-prev{left:20px}.lg-actions .lg-prev:after{content:"\e094"}@-webkit-keyframes lg-right-end{0%,100%{left:0}50%{left:-30px}}@-moz-keyframes lg-right-end{0%,100%{left:0}50%{left:-30px}}@-ms-keyframes lg-right-end{0%,100%{left:0}50%{left:-30px}}@keyframes lg-right-end{0%,100%{left:0}50%{left:-30px}}@-webkit-keyframes lg-left-end{0%,100%{left:0}50%{left:30px}}@-moz-keyframes lg-left-end{0%,100%{left:0}50%{left:30px}}@-ms-keyframes lg-left-end{0%,100%{left:0}50%{left:30px}}@keyframes lg-left-end{0%,100%{left:0}50%{left:30px}}.lg-outer.lg-right-end .lg-object{-webkit-animation:lg-right-end .3s;-o-animation:lg-right-end .3s;animation:lg-right-end .3s;position:relative}.lg-outer.lg-left-end .lg-object{-webkit-animation:lg-left-end .3s;-o-animation:lg-left-end .3s;animation:lg-left-end .3s;position:relative}.lg-toolbar{z-index:1082;left:0;position:absolute;top:0;width:100%;background-color:rgba(0,0,0,.45)}.lg-toolbar .lg-icon{color:#999;cursor:pointer;float:right;font-size:24px;height:47px;line-height:27px;padding:10px 0;text-align:center;width:50px;text-decoration:none!important;outline:0;background:0 0;border:none;box-shadow:none;-webkit-transition:color .2s linear;-o-transition:color .2s linear;transition:color .2s linear}.lg-toolbar .lg-icon:hover{color:#FFF}.lg-toolbar .lg-close:after{content:"\e070"}.lg-toolbar .lg-download:after{content:"\e0f2"}.lg-sub-html{background-color:rgba(0,0,0,.45);bottom:0;color:#EEE;font-size:16px;left:0;padding:10px 40px;position:fixed;right:0;text-align:center;z-index:1080}.lg-sub-html h4{margin:0;font-size:13px;font-weight:700}.lg-sub-html p{font-size:12px;margin:5px 0 0}#lg-counter{color:#999;display:inline-block;font-size:16px;padding-left:20px;padding-top:12px;vertical-align:middle}.lg-next,.lg-prev,.lg-toolbar{opacity:1;-webkit-transition:-webkit-transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;-moz-transition:-moz-transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;-o-transition:-o-transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;transition:transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear}.lg-hide-items .lg-prev{opacity:0;-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}.lg-hide-items .lg-next{opacity:0;-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}.lg-hide-items .lg-toolbar{opacity:0;-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-object{-webkit-transform:scale3d(.5,.5,.5);transform:scale3d(.5,.5,.5);opacity:0;-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;-moz-transition:-moz-transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;-o-transition:-o-transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;transition:transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%}body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-item.lg-complete .lg-object{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-outer .lg-thumb-outer{background-color:#0D0A0A;bottom:0;position:absolute;width:100%;z-index:1080;max-height:350px;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1) 0s;-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1) 0s;-o-transition:-o-transform .25s cubic-bezier(0,0,.25,1) 0s;transition:transform .25s cubic-bezier(0,0,.25,1) 0s}.lg-outer .lg-thumb-outer.lg-grab .lg-thumb-item{cursor:-webkit-grab;cursor:-moz-grab;cursor:-o-grab;cursor:-ms-grab;cursor:grab}.lg-outer .lg-thumb-outer.lg-grabbing .lg-thumb-item{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:-o-grabbing;cursor:-ms-grabbing;cursor:grabbing}.lg-outer .lg-thumb-outer.lg-dragging .lg-thumb{-webkit-transition-duration:0s!important;transition-duration:0s!important}.lg-outer.lg-thumb-open .lg-thumb-outer{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.lg-outer .lg-thumb{padding:10px 0;height:100%;margin-bottom:-5px}.lg-outer .lg-thumb-item{cursor:pointer;float:left;overflow:hidden;height:100%;border:2px solid #FFF;border-radius:4px;margin-bottom:5px}@media (min-width:1025px){.lg-outer .lg-thumb-item{-webkit-transition:border-color .25s ease;-o-transition:border-color .25s ease;transition:border-color .25s ease}}.lg-outer .lg-thumb-item.active,.lg-outer .lg-thumb-item:hover{border-color:#a90707}.lg-outer .lg-thumb-item img{width:100%;height:100%;object-fit:cover}.lg-outer.lg-has-thumb .lg-item{padding-bottom:120px}.lg-outer.lg-can-toggle .lg-item{padding-bottom:0}.lg-outer.lg-pull-caption-up .lg-sub-html{-webkit-transition:bottom .25s ease;-o-transition:bottom .25s ease;transition:bottom .25s ease}.lg-outer.lg-pull-caption-up.lg-thumb-open .lg-sub-html{bottom:100px}.lg-outer .lg-toggle-thumb{background-color:#0D0A0A;border-radius:2px 2px 0 0;color:#999;cursor:pointer;font-size:24px;height:39px;line-height:27px;padding:5px 0;position:absolute;right:20px;text-align:center;top:-39px;width:50px;outline:0;border:none}.lg-outer .lg-toggle-thumb:after{content:"\e1ff"}.lg-outer .lg-toggle-thumb:hover{color:#FFF}.lg-outer .lg-video-cont{display:inline-block;vertical-align:middle;max-width:1140px;max-height:100%;width:100%;padding:0 5px}.lg-outer .lg-video{width:100%;height:0;padding-bottom:56.25%;overflow:hidden;position:relative}.lg-outer .lg-video .lg-object{display:inline-block;position:absolute;top:0;left:0;width:100%!important;height:100%!important}.lg-outer .lg-video .lg-video-play{width:84px;height:59px;position:absolute;left:50%;top:50%;margin-left:-42px;margin-top:-30px;z-index:1080;cursor:pointer}.lg-outer .lg-has-vimeo .lg-video-play{background:url(../img/vimeo-play.png) no-repeat}.lg-outer .lg-has-vimeo:hover .lg-video-play{background:url(../img/vimeo-play.png) 0 -58px no-repeat}.lg-outer .lg-has-html5 .lg-video-play{background:url(../img/video-play.png) no-repeat;height:64px;margin-left:-32px;margin-top:-32px;width:64px;opacity:.8}.lg-outer .lg-has-html5:hover .lg-video-play{opacity:1}.lg-outer .lg-has-youtube .lg-video-play{background:url(../img/youtube-play.png) no-repeat}.lg-outer .lg-has-youtube:hover .lg-video-play{background:url(../img/youtube-play.png) 0 -60px no-repeat}.lg-outer .lg-video-object{width:100%!important;height:100%!important;position:absolute;top:0;left:0}.lg-outer .lg-has-video .lg-video-object{visibility:hidden}.lg-outer .lg-has-video.lg-video-playing .lg-object,.lg-outer .lg-has-video.lg-video-playing .lg-video-play{display:none}.lg-outer .lg-has-video.lg-video-playing .lg-video-object{visibility:visible}.lg-progress-bar{background-color:#333;height:5px;left:0;position:absolute;top:0;width:100%;z-index:1083;opacity:0;-webkit-transition:opacity 80ms ease 0s;-moz-transition:opacity 80ms ease 0s;-o-transition:opacity 80ms ease 0s;transition:opacity 80ms ease 0s}.lg-progress-bar .lg-progress{background-color:#a90707;height:5px;width:0}.lg-progress-bar.lg-start .lg-progress{width:100%}.lg-show-autoplay .lg-progress-bar{opacity:1}.lg-autoplay-button:after{content:"\e01d"}.lg-show-autoplay .lg-autoplay-button:after{content:"\e01a"}.lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-image,.lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-img-wrap{-webkit-transition-duration:0s;transition-duration:0s}.lg-outer.lg-use-transition-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap{-webkit-transition:-webkit-transform .3s cubic-bezier(0,0,.25,1) 0s;-moz-transition:-moz-transform .3s cubic-bezier(0,0,.25,1) 0s;-o-transition:-o-transform .3s cubic-bezier(0,0,.25,1) 0s;transition:transform .3s cubic-bezier(0,0,.25,1) 0s}.lg-outer.lg-use-left-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap{-webkit-transition:left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s;-moz-transition:left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s;-o-transition:left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s;transition:left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s}.lg-outer .lg-item.lg-complete.lg-zoomable .lg-img-wrap{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.lg-outer .lg-item.lg-complete.lg-zoomable .lg-image{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:-webkit-transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;-moz-transition:-moz-transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;-o-transition:-o-transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;transition:transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}#lg-zoom-in:after{content:"\e311"}#lg-actual-size{font-size:20px}#lg-actual-size:after{content:"\e033"}#lg-zoom-out{opacity:.5;pointer-events:none}#lg-zoom-out:after{content:"\e312"}.lg-zoomed #lg-zoom-out{opacity:1;pointer-events:auto}.lg-outer .lg-pager-outer{bottom:60px;left:0;position:absolute;right:0;text-align:center;z-index:1080;height:10px}.lg-outer .lg-pager-outer.lg-pager-hover .lg-pager-cont{overflow:visible}.lg-outer .lg-pager-cont{cursor:pointer;display:inline-block;overflow:hidden;position:relative;vertical-align:top;margin:0 5px}.lg-outer .lg-pager-cont:hover .lg-pager-thumb-cont{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.lg-outer .lg-pager-cont.lg-pager-active .lg-pager{box-shadow:0 0 0 2px #fff inset}.lg-outer .lg-pager-thumb-cont{background-color:#fff;color:#FFF;bottom:100%;height:83px;left:0;margin-bottom:20px;margin-left:-60px;opacity:0;padding:5px;position:absolute;width:120px;border-radius:3px;-webkit-transition:opacity .15s ease 0s,-webkit-transform .15s ease 0s;-moz-transition:opacity .15s ease 0s,-moz-transform .15s ease 0s;-o-transition:opacity .15s ease 0s,-o-transform .15s ease 0s;transition:opacity .15s ease 0s,transform .15s ease 0s;-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}.lg-outer .lg-pager-thumb-cont img{width:100%;height:100%}.lg-outer .lg-pager{background-color:rgba(255,255,255,.5);border-radius:50%;box-shadow:0 0 0 8px rgba(255,255,255,.7) inset;display:block;height:12px;-webkit-transition:box-shadow .3s ease 0s;-o-transition:box-shadow .3s ease 0s;transition:box-shadow .3s ease 0s;width:12px}.lg-outer .lg-pager:focus,.lg-outer .lg-pager:hover{box-shadow:0 0 0 8px #fff inset}.lg-outer .lg-caret{border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px dashed;bottom:-10px;display:inline-block;height:0;left:50%;margin-left:-5px;position:absolute;vertical-align:middle;width:0}.lg-fullscreen:after{content:"\e20c"}.lg-fullscreen-on .lg-fullscreen:after{content:"\e20d"}.lg-outer #lg-dropdown-overlay{background-color:rgba(0,0,0,.25);bottom:0;cursor:default;left:0;position:fixed;right:0;top:0;z-index:1081;opacity:0;visibility:hidden;-webkit-transition:visibility 0s linear .18s,opacity .18s linear 0s;-o-transition:visibility 0s linear .18s,opacity .18s linear 0s;transition:visibility 0s linear .18s,opacity .18s linear 0s}.lg-outer.lg-dropdown-active #lg-dropdown-overlay,.lg-outer.lg-dropdown-active .lg-dropdown{-webkit-transition-delay:0s;transition-delay:0s;-moz-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1;visibility:visible}.lg-outer.lg-dropdown-active #lg-share{color:#FFF}.lg-outer .lg-dropdown{background-color:#fff;border-radius:2px;font-size:14px;list-style-type:none;margin:0;padding:10px 0;position:absolute;right:0;text-align:left;top:50px;opacity:0;visibility:hidden;-moz-transform:translate3d(0,5px,0);-o-transform:translate3d(0,5px,0);-ms-transform:translate3d(0,5px,0);-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0);-webkit-transition:-webkit-transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;-moz-transition:-moz-transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;-o-transition:-o-transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;transition:transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s}.lg-outer .lg-dropdown:after{content:"";display:block;height:0;width:0;position:absolute;border:8px solid transparent;border-bottom-color:#FFF;right:16px;top:-16px}.lg-outer .lg-dropdown>li:last-child{margin-bottom:0}.lg-outer .lg-dropdown>li:hover .lg-icon,.lg-outer .lg-dropdown>li:hover a{color:#333}.lg-outer .lg-dropdown a{color:#333;display:block;white-space:pre;padding:4px 12px;font-family:"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px}.lg-outer .lg-dropdown a:hover{background-color:rgba(0,0,0,.07)}.lg-outer .lg-dropdown .lg-dropdown-text{display:inline-block;line-height:1;margin-top:-3px;vertical-align:middle}.lg-outer .lg-dropdown .lg-icon{color:#333;display:inline-block;float:none;font-size:20px;height:auto;line-height:1;margin-right:8px;padding:0;vertical-align:middle;width:auto}.lg-outer,.lg-outer .lg,.lg-outer .lg-inner{height:100%;width:100%}.lg-outer #lg-share{position:relative}.lg-outer #lg-share:after{content:"\e80d"}.lg-outer #lg-share-facebook .lg-icon{color:#3b5998}.lg-outer #lg-share-facebook .lg-icon:after{content:"\e904"}.lg-outer #lg-share-twitter .lg-icon{color:#00aced}.lg-outer #lg-share-twitter .lg-icon:after{content:"\e907"}.lg-outer #lg-share-googleplus .lg-icon{color:#dd4b39}.lg-outer #lg-share-googleplus .lg-icon:after{content:"\e905"}.lg-outer #lg-share-pinterest .lg-icon{color:#cb2027}.lg-outer #lg-share-pinterest .lg-icon:after{content:"\e906"}.lg-outer .lg-img-rotate{position:absolute;padding:0 5px;left:0;right:0;top:0;bottom:0;-webkit-transition:-webkit-transform .3s cubic-bezier(.32,0,.67,0) 0s;-moz-transition:-moz-transform .3s cubic-bezier(.32,0,.67,0) 0s;-o-transition:-o-transform .3s cubic-bezier(.32,0,.67,0) 0s;transition:transform .3s cubic-bezier(.32,0,.67,0) 0s}.lg-rotate-left:after{content:"\e900"}.lg-rotate-right:after{content:"\e901"}.lg-icon.lg-flip-hor,.lg-icon.lg-flip-ver{font-size:26px}.lg-flip-hor:after{content:"\e902"}.lg-flip-ver:after{content:"\e903"}.lg-group:after,.lg-group:before{display:table;content:"";line-height:0}.lg-group:after{clear:both}.lg-outer{position:fixed;top:0;left:0;z-index:1050;opacity:0;outline:0;-webkit-transition:opacity .15s ease 0s;-o-transition:opacity .15s ease 0s;transition:opacity .15s ease 0s}.lg-outer *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.lg-outer.lg-visible{opacity:1}.lg-outer.lg-css3 .lg-item.lg-current,.lg-outer.lg-css3 .lg-item.lg-next-slide,.lg-outer.lg-css3 .lg-item.lg-prev-slide{-webkit-transition-duration:inherit!important;transition-duration:inherit!important;-webkit-transition-timing-function:inherit!important;transition-timing-function:inherit!important}.lg-outer.lg-css3.lg-dragging .lg-item.lg-current,.lg-outer.lg-css3.lg-dragging .lg-item.lg-next-slide,.lg-outer.lg-css3.lg-dragging .lg-item.lg-prev-slide{-webkit-transition-duration:0s!important;transition-duration:0s!important;opacity:1}.lg-outer.lg-grab img.lg-object{cursor:-webkit-grab;cursor:-moz-grab;cursor:-o-grab;cursor:-ms-grab;cursor:grab}.lg-outer.lg-grabbing img.lg-object{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:-o-grabbing;cursor:-ms-grabbing;cursor:grabbing}.lg-outer .lg{position:relative;overflow:hidden;margin-left:auto;margin-right:auto;max-width:100%;max-height:100%}.lg-outer .lg-inner{position:absolute;left:0;top:0;white-space:nowrap}.lg-outer .lg-item{background:url(../img/loading.gif) center center no-repeat;display:none!important}.lg-outer.lg-css .lg-current,.lg-outer.lg-css3 .lg-current,.lg-outer.lg-css3 .lg-next-slide,.lg-outer.lg-css3 .lg-prev-slide{display:inline-block!important}.lg-outer .lg-img-wrap,.lg-outer .lg-item{display:inline-block;text-align:center;position:absolute;width:100%;height:100%}.lg-outer .lg-img-wrap:before,.lg-outer .lg-item:before{content:"";display:inline-block;height:50%;width:1px;margin-right:-1px}.lg-outer .lg-img-wrap{position:absolute;padding:0 5px;left:0;right:0;top:0;bottom:0}.lg-outer .lg-item.lg-complete{background-image:none}.lg-outer .lg-item.lg-current{z-index:1060}.lg-outer .lg-image{display:inline-block;vertical-align:middle;max-width:100%;max-height:100%;width:auto!important;height:auto!important}.lg-outer.lg-show-after-load .lg-item .lg-object,.lg-outer.lg-show-after-load .lg-item .lg-video-play{opacity:0;-webkit-transition:opacity .15s ease 0s;-o-transition:opacity .15s ease 0s;transition:opacity .15s ease 0s}.lg-outer.lg-show-after-load .lg-item.lg-complete .lg-object,.lg-outer.lg-show-after-load .lg-item.lg-complete .lg-video-play{opacity:1}.lg-outer .lg-empty-html,.lg-outer.lg-hide-download #lg-download{display:none}.lg-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1040;background-color:#000;opacity:0;-webkit-transition:opacity .15s ease 0s;-o-transition:opacity .15s ease 0s;transition:opacity .15s ease 0s}.lg-backdrop.in{opacity:1}.lg-css3.lg-no-trans .lg-current,.lg-css3.lg-no-trans .lg-next-slide,.lg-css3.lg-no-trans .lg-prev-slide{-webkit-transition:none 0s ease 0s!important;-moz-transition:none 0s ease 0s!important;-o-transition:none 0s ease 0s!important;transition:none 0s ease 0s!important}.lg-css3.lg-use-css3 .lg-item,.lg-css3.lg-use-left .lg-item{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.lg-css3.lg-fade .lg-item{opacity:0}.lg-css3.lg-fade .lg-item.lg-current{opacity:1}.lg-css3.lg-fade .lg-item.lg-current,.lg-css3.lg-fade .lg-item.lg-next-slide,.lg-css3.lg-fade .lg-item.lg-prev-slide{-webkit-transition:opacity .1s ease 0s;-moz-transition:opacity .1s ease 0s;-o-transition:opacity .1s ease 0s;transition:opacity .1s ease 0s}.lg-css3.lg-slide.lg-use-css3 .lg-item{opacity:0}.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current,.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide,.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide.lg-use-left .lg-item{opacity:0;position:absolute;left:0}.lg-css3.lg-slide.lg-use-left .lg-item.lg-prev-slide{left:-100%}.lg-css3.lg-slide.lg-use-left .lg-item.lg-next-slide{left:100%}.lg-css3.lg-slide.lg-use-left .lg-item.lg-current{left:0;opacity:1}.lg-css3.lg-slide.lg-use-left .lg-item.lg-current,.lg-css3.lg-slide.lg-use-left .lg-item.lg-next-slide,.lg-css3.lg-slide.lg-use-left .lg-item.lg-prev-slide{-webkit-transition:left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}
			`
		},
	],
	presets: [presetUno({ prefix: "u-", })],
	shortcuts: [
		["u-dropdown-menu",
			"u-color-primary u-text-left u-rounded-lg u-overflow-hidden u-px-2 u-py-2 u-text-18 u-m-0 u-min-w-[12.5rem] u-border-none u-top-0 u-left-0 u-z-[999] lg:u-text-16 lg:u-shadow-lg lg:u-bg-white"],
		[
			"u-mega-dropdown-inner",
			"u-grid u-grid-cols-1 u-gap-y-8 u-m-0 u-pb-8 u-place-content-start u-px-3 lg:u-px-4 lg:u-pt-4 lg:u-pb-5 lg:u-w-[736px] lg:u-grid lg:u-grid-cols-3 lg:u-gap-x-6"
		],
		["u-mega-dropdown-column",
			"u-m-0 u-w-full u-p-0"
		],
		[
			"u-dropdown-menu-heading",
			"u-block u-text-18 u-m-0 u-mb-4 u-leading-tight u-font-600 lg:u-text-15"
		],
		["u-dropdown-menu-list",
			"u-grid u-grid-cols-1 u-gap-y-2 u-p-0 u-m-0 u-list-none [&:not(:last-child)]:u-mb-8"],
		["u-dropdown-menu-list-item", ""],
		["u-dropdown-menu-link",
			"u-text-18 u-cursor-pointer lg:u-text-[14px] u-font-400 u-opacity-95 u-underline-offset-4 hover:(u-underline u-opacity-100 u-text-lightblue-700 u-decoration-current)"],
		["u-dropdown-menu-icon-link",
			`u-cursor-pointer u-text-[14px] u-font-400 group u-underline-offset-4 group)

			/* inner container */
			[&>div]:(u-gap-2 u-items-start lg:u-flex)

			/* text */
			hover:[&>div_span]:(u-text-lightblue-700 u-underline u-underline-offset-4 u-opacity-100)
			[&>div_span]:(after:u-content-[':'] u-font-400 u-inline u-text-18 u-text-primary u-relative u-opacity-90
			lg:after:u-content-[''] lg:u-block lg:u-font-600 lg:u-text-[14.5px] u-mb-1)


			/* subtext */
			[&>div_small]:(u-inline u-text-17 lg:u-block lg:u-text-[13.5px] u-leading-normal lg:u-text-lapisLazuli u-text-wrap lg:u-block)

			/* icon */
			[&>div_i]:(u-hidden u-text-20 u-pt-[2px] !text-[#005798] lg:u-block)
			`
		],
		["u-dropdown-menu-link-subtext","u-text-14 lg:u-text-12 u-leading-none u-text-primary/90 u-text-wrap lg:u-block"],
		["u-dropdown-link-button","u-text-12 u-max-w-fit u-px-3 u-py-1 u-rounded-md u-outline u-bg-primary u-text-white u-opacity-85 u-shadow hover:(u-opacity-100 u-shadow-lg)"],
		["u-dropdown-tout","u-hidden lg:u-block"],
		["u-dropdown-text-heading","u-block u-text-15 u-m-0 u-mb-1 u-leading-tight u-font-600"],
		["u-dropdown-link-cta","u-text-lapisLazuli u-text-[13.5px]  u-underline-offset-4 u-opacity-90 u-transition-colors hover:(u-opacity-100 u-underline)"],
		["u-dropdown-text","u-line-clamp-3 u-w-full u-text-[13.5px] u-max-w-[400px]"],
		[
			"u-max-w-article",
			"u-max-w-none sm:u-max-w-[34rem] md:u-max-w-[36rem] lg:u-max-w-[38rem] xl:u-max-w-[40rem] 2xl:u-max-w-[45rem]",
		],
		[
			"u-main-y-padding",
			"pt-10 pb-14 lg:(pt-12 pb-16) xl:(pt-14 pb-20) 2xl:(pt-16 pb-22)",
		],
		[
			"u-page-x-padding", "u-px-4 sm:u-px-6 md:u-px-7 lg:u-px-8 xl:u-px-16 2xl:u-px-24"
		],
		[
			"u-main-y-padding",
			"u-pt-10 u-pb-14 lg:(u-pt-12 u-pb-16) xl:(u-pt-14 u-pb-20) 2xl:(u-pt-16 u-pb-22)",
		],
		[
			"u-text-body",
			"u-text-[1.25rem] sm:u-text-[1.1875rem] md:u-text-[1.125rem] 2xl:u-text-[1.1875rem]",
		],
	],
	extendTheme: (theme) => {
		return {
			...theme,
			breakpoints: {
				...theme.breakpoints,
				sm: '5760px',
				lg: '992px',
				xl: '1200px',
				"2xl": '1400px'
			},
		}
	},
	theme: {
		colors: {
			aliceBlue: "#ebf5ff",
			aliceBlueLight: "#F1F5FF",
			berkeleyBlue: "#013663",
			charcoal: "#383F50",
			gunmetal: "#2b3445",
			indigoDye: "#0B4170",
			argentinianBlue: "#69B3FE",
			lapisLazuli: "#005798",
			maize: "#FBE44A",
			mulberry: "#bd4089",
			redCrayola: "ED254E",
			accent: "#FBE44A",
			book: "#bd4089",
			dark: "#373f50",
			light: "#fff",
			module: "#ED254E",
			primary: "#013663",
			muted: "#246698"
		}
	},

	rules: [
		//-- font-weight classes e.g. font-400
		[
			/^u-font-(\d+)$/,
			([, d]) => ({ "font-weight": `${d}` }),
			{ layer: "utilities" },
		],
		//-- font-size classes e.g. text-12 (12px)
		[
			/^u-text-(\d+)$/,
			([, d]) => ({ "font-size": `${d}px` }),
			{ layer: "utilities" },
		],
		//-- content visibility
		[
			/^u-content-(hidden|visible|auto)$/,
			([, d]) => ({ "content-visibility": d }),
			{ layer: "utilities" },
		],
	],
	safelist: [],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
