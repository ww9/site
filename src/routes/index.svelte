<script>
	import { activeMenu, MenuItems } from '../store';
	activeMenu.set(MenuItems.Index);
</script>

<p>👋 Hi! I make apps for the web</p>
<img src="/london-400x424.png" alt="me" class="me" />

<p>Mostly with C#, TypeScript, JavaScript and PHP</p>
<img src="/workwith.png" alt="techologies i work with" class="workwith" />

<p>And this is where I work from</p>
<img src="/office.jpg" alt="office" class="office" />

<style>
	p {
		font-weight: 100;
		font-size: 30px;
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
