import adapter from '@sveltejs/adapter-netlify';
// import preprocess from "svelte-preprocess"
// import path from "path"
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	preprocess: [
		mdsvex({
			extensions: [".md"]
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
