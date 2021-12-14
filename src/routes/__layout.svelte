<script>
	import { prefetchUrl } from '$lib/prefetch_url';
	import { title, activeMenu, MenuItems } from '../store';
</script>

<svelte:head>
	<title>{$title}</title>
	<meta name="description" content="Author: Bruno Cassol, Category: Personal Site" />
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAz1BMVEX///8AAADExMSCgoL39/f9/f0NDQ37+/u/v782NjakpKSHh4cfHx/09PTt7e0vLy9nZ2fx8fFGRkYmJiZqamrS0tJQUFDY2Njo6Ojf39+7u7s7OzvKysrk5ORUVFQSEhKxsbFwcHAZGRne3t7b29vNzc16enp0dHRgYGDW1taurq6dnZ2Tk5OOjo54eHhERERAQEDq6urm5uZ9fX3BwcG0tLSZmZmLi4tMTEwpKSleXl5dXV1LS0u2traqqqpkZGRYWFjPz8+mpqbX19fh4eFgGXtmAAABI0lEQVQ4y+WSe1OCQBDAb+FO5T0QToiCQBoiPUCIxsqR0u//mbolcrCiL+D+sXu3+9vH7RwhlyFUa2XY9WpJWSaUkCMhnlAD2Pd3oVUI34yZZqmwdAvZrfA6gwwjugKx1sRvLDtHy0ZzBW0Cj00q3YOMdiNlelsqiFEfWoDswGI8L4bdacDbM8AFiR/GEOmnYV3WAVgB2LKC1x8PbQH6AW8Ox+oGOwcGtqKEBohYmm6h+gVMc83clCsIJxxQIf27BaEFSA5hFjz3AOQ4wEWIfUPyEgbOJ8Dc6QFMFSvQ+muhjQh6Z9VkDVceN9dq9N7GxyXqEUz1IWO5PNjOGvfSiNYmttwFXC+e9r7vv4T7lRLkbaJTSVGoPIjJP9/IW0xMckHyCcDWGZ3JHYAFAAAAAElFTkSuQmCC"
	/>
</svelte:head>

<div class="container">
	<a class="logo" href="/">Bruno Cassol <span class="description">software engineer</span></a>
	<div class="container-shadow">
		<div class="menu">
			<a href="/" class="active" on:mouseover={prefetchUrl} on:focus={prefetchUrl} on:touchstart={prefetchUrl} class:active={$activeMenu == MenuItems.Index}>About</a>
			<a href="/portfolio" on:mouseover={prefetchUrl} on:focus={prefetchUrl} on:touchstart={prefetchUrl} class:active={$activeMenu == MenuItems.Portfolio}>Portfolio</a>
			<!-- <a href="/tools" on:mouseover={prefetchUrl} on:focus={prefetchUrl} on:touchstart={prefetchUrl} class:active={$activeMenu == MenuItems.Tools}>Tools</a> -->

			<a target="_blank" class="social last" rel="noreferrer" title="Instagram" href="https://www.instagram.com/brunocassol/">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						fill="currentColor"
						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
					/>
				</svg>
			</a>

			<a target="_blank" class="social" rel="noreferrer" title="Twitter" href="https://twitter.com/brunocassol">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						fill="currentColor"
						d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
					/>
				</svg>
			</a>

			<a target="_blank" class="social" rel="noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/brunocassol">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
				</svg>
			</a>

			<a target="_blank" class="social" rel="noreferrer" title="GitHub" href="http://github.com/ww9">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
					<path
						fill="currentColor"
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					/>
				</svg>
			</a>
		</div>

		<div class="content">
			<slot />
		</div>
	</div>
</div>

<div class="footer">
	handcrafted with Svelte<br />source code available at <a href="https://github.com/ww9/site">github.com/ww9/site</a>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Nunito');

	:global(html),
	:global(body) {
		font-family: Nunito, sans-serif;
		font-size: 24px;
		box-sizing: content-box;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		background-color: #282828;
	}

	:global(*),
	:global(*:before),
	:global(*:after) {
		box-sizing: inherit;
	}

	:global(a),
	:global(a:visited),
	:global(a:active) {
		text-decoration: none;
		color: #44ddff;
	}

	:global(a:hover) {
		color: #fff;
	}

	:global(.center) {
		text-align: center;
	}

	.logo,
	.logo:visited {
		color: #848484;
		text-shadow: #000 1px 1px 1px;
		font-size: 40px;
		display: block;
		text-align: center;
		padding: 0 0 20px 0;
	}

	.logo:hover {
		color: #aaa;
	}

	.logo .description {
		font-size: 50%;
		display: block;
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 1rem 0;
	}

	.container-shadow {
		box-shadow: 0px 0px 30px #222;
		border-radius: 20px;
	}

	@media (min-width: 800px) {
		.container {
			padding-top: 3rem;
		}
		.logo {
			display: inline-block;
			text-align: left;
		}
		.logo .description {
			display: inline-block;
		}
	}

	.menu {
		clear: both;
		padding: 5px;
		margin: 0;
		display: block;
		overflow: hidden;
		background-color: #3d3d3d;
		border-radius: 20px 20px 0 0;
	}

	.menu a {
		float: left;
		font-size: 28px;
		display: block;
		color: white;
		text-align: center;
		padding: 13px 16px;
		text-decoration: none;
		margin: 7px 0 7px 7px;
	}

	.menu a.last {
		margin-right: 7px;
	}

	.menu a.active,
	.menu a:hover {
		background-color: #111;
		border-radius: 20px;
	}

	@media (min-width: 800px) {
		.menu {
			padding: 0;
		}
	}

	.menu a.social {
		float: right;
		padding: 11px 11px 5px 11px;
	}

	.menu .social svg {
		width: 38px;
		height: 38px;
	}

	.content {
		background: #111;
		color: #ddd;
		padding: 20px;
		border-radius: 0 0 20px 20px;

		/* fixes artifact observed in Chrome mobile emulator where a thin line appears below menu items*/
		margin-top: -1px;
	}

	.content :global(h2) {
		margin-bottom: 0.5em;
	}

	@media (min-width: 800px) {
		.content {
			padding: 2rem;
		}
	}

	.footer {
		text-align: center;
		color: #fff;
		padding: 1rem;
	}
</style>
