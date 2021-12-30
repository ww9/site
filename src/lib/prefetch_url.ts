import { prefetch } from '$app/navigation';

// Since sveltekit:prefetch didn't work for me, I made my own.
// https://github.com/sveltejs/kit/issues/2929
// We can't really use on:click|once here because focus and click could trigger fetching the same content twice.
export const prefetchUrl = function (e: Event): void {
	const link = <HTMLElement>e.target;
	if (link.getAttribute('fetched')) return;
	const url = link.getAttribute('href');
	prefetch(url);
	link.setAttribute('fetched', 'yep');
};
