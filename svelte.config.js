import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// for more information about preprocessors see https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ out: 'build' }),
		target: 'body'
	}
};

export default config;
