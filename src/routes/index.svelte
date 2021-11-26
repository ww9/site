<script>
	import { activeMenu } from '../store';
	activeMenu.set('index');
</script>

<h1>Hi I'm Bruno, a software developer.</h1>
<img src="/bruno.jpg" alt="me" class="me" />
<p>And this is where I work.</p>
<img src="/office.jpg" alt="office" class="office" />
<p>Mostly doing full-stack web with C#, PHP and JavaScript.</p>
<img src="/workwith.png" alt="techologies i work with" class="workwith" />
<p>I also have experience with other tech such as Linux, NGINX, Apache, PostgreSQL, MySQL, Go, Node, CSS/SASS, Bootstrap and to a lesser extent React and Vue. Currently having fun with Svelte and Kubernetes.</p>
<p>I love people and I like helping them. Have experience with mentoring and tech leading. Teaching is one of the best ways to learn.</p>

<style>
	p {
		font-size: large;
	}
	.me {
		border-radius: 50%;
		width: 90%;
		max-width: 342px;
		height: auto;
		margin: 0 auto;
		display: block;
	}

	.office {
		border-radius: 20px;
		width: 90%;
		max-width: 600px;
		height: auto;
		margin: 0 auto;
		display: block;
	}
	.workwith {
		width: 90%;
		max-width: 416px;
		height: auto;
		margin: 0 auto;
		display: block;
	}
</style>
