<script>
	import { activeMenu, MenuItems } from '../store';
	activeMenu.set(MenuItems.Index);
</script>

<h1>👋 Hi! I make apps for the web</h1>
<img src="/bruno.jpg" alt="me" class="me" />

<h1>Mostly with C#, TypeScript, JavaScript and PHP</h1>
<img src="/workwith.png" alt="techologies i work with" class="workwith" />

<h1>And this is where I work from</h1>
<img src="/office.jpg" alt="office" class="office" />

<style>
	h1 {
		font-weight: 100;
		text-align: center;
	}
	.me {
		border-radius: 50%;
		width: 90%;
		max-width: 342px;
		height: auto;
		margin: 0 auto 4rem auto;
		display: block;
	}

	.office {
		border-radius: 20px;
		width: 90%;
		max-width: 600px;
		height: auto;
		margin: 0 auto 4rem auto;
		display: block;
	}
	.workwith {
		width: 90%;
		max-width: 534px;
		height: auto;
		margin: 0 auto 4rem auto;
		display: block;
	}
</style>
