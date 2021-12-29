// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// for more information about preprocessors see https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ out: 'build' }),
		target: 'body',

		// Specifying a port doesn't seem to be working at the momment:
		// https://github.com/sveltejs/kit/issues/3017
		// https://github.com/vitejs/vite/issues/6068
		// vite: {
		// 	server: {
		// 		hmr: {
		// 			host: '0.0.0.0',
		// 			port: 3010,
		// 		},
		// 		watch: {
		// 			usePolling: true,
		// 		},
		// 	},
		// },
	}
};

export default config;
