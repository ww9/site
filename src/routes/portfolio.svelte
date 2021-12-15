<script>
	import { activeMenu, MenuItems } from '../store';
	import Tags from '../components/Tags.svelte';

	const imageTitle = 'Open original image in new tab';

	activeMenu.set(MenuItems.Portfolio);
</script>

<h1>Portfolio</h1>
<p>Some of the projects I have worked on.</p>

<h2 class="portfolio_title">Document generator - API service</h2>
<div class="portfolio_tags"><Tags tags={['.NET', 'C#', 'PostgreSQL', 'API']} /></div>
<p>.NET Core API service that receives document printing jobs in JSON and XML payloads to produce PDF and Excel files. Used by multiple systems at work.</p>
<a href="/portfolio/report_generator.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/report_generator.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Vaccination Scheduler</h2>
<div class="portfolio_tags"><Tags tags={['Azure', 'NGINX', 'PHP-FPM', 'Benchmarking', 'Linux', 'MariaDB', 'Scaling', 'k6.io']} /></div>
<p>DevOps role. Responsible for setting up Linux, HTTP and database servers. Also profiled application performance characteristics and suggested code improvements to fix bottlenecks.</p>
<a href="/portfolio/vacina_cuiaba.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/vacina_cuiaba.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Chatbot</h2>
<p>Developed and deployed chatbot app to gather pandemic statistics useful in researches and strategic planning.</p>
<div class="portfolio_tags"><Tags tags={['From-scratch', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'Linux', 'NGINX', 'MariaDB']} /></div>
<div class="portfolio_chatbot_images">
	<a href="/portfolio/chatbot_rj.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/chatbot_rj.png" class="portfolio_image" /></a>
	<a href="/portfolio/chatbot_cuiaba.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/chatbot_cuiaba.png" class="portfolio_image" /></a>
</div>

<h2 class="portfolio_title">EdTech App</h2>
<div class="portfolio_tags"><Tags tags={['PHP', 'NGINX', 'From-scratch', 'Apache', 'Hiring', 'Mentoring', 'MariaDB', 'Linux', 'CI', 'Sonar', 'Unit Testing', 'Azure DevOps', 'Team Lead']} /></div>
<p>Lead engineer of educational tech web app used to manage the entire lifecycle of more than hundred schools.</p>
<a href="/portfolio/siged.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/siged.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Mineshare</h2>
<p>Frontend development for computing colocation startup.</p>
<div class="portfolio_tags"><Tags tags={['Solo', 'Frontend', 'Contracting', 'NGINX', 'CSS', 'HTML', 'JavaScript', 'jQuery', 'Linux', 'Design', 'MySQL']} /></div>
<a href="/portfolio/mineshare.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/mineshare.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Bicho Mania</h2>
<p>Responsive petshop website. Frontend and backend development along with CMS customization.</p>
<div class="portfolio_tags"><Tags tags={['From-scratch', 'Contracting', 'WordPress', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'MySQL']} /></div>
<a href="/portfolio/bicho_mania.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/bicho_mania.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">e-Commerce - BleepBleeps</h2>
<div class="portfolio_tags"><Tags tags={['London-UK', 'E-comerce', 'CSS', 'Shopify', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'Ruby', 'Node', 'SAAS', 'Gulp']} /></div>
<p>Frontend development for e-comerce using Shopify.</p>
<a href="/portfolio/bleep_bleeps.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/bleep_bleeps.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">WorldFirst - Finech</h2>
<div class="portfolio_tags"><Tags tags={['London-UK', 'Scrum', 'Agile', 'CSS', 'Fintech', 'PHP', 'BDD', 'Unit Testing', 'Behat', 'HTML', 'JavaScript', 'jQuery', 'Symfony']} /></div>
<p>Fintech. Worked on customer facing website and automated testing with BDD.</p>
<a href="/portfolio/worldfirst.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/worldfirst.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">ALMT - Gov legislative manager</h2>
<p>Worked in a team responsible for their portal and intranet system to manage legislative proposals. Fullstack with Symfony on the backend.</p>
<div class="portfolio_tags"><Tags tags={['Symfony', 'Zend', 'Backend', 'Frontend', 'Full-stack', 'CSS', 'HTML', 'JavaScript', 'Linux', 'MySQL']} /></div>
<a href="/portfolio/almt.png " target="_blank" title={imageTitle}><img alt="" src="/portfolio/almt.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Traço & Cor</h2>
<p>Frontend and backend development for boutique website.</p>
<div class="portfolio_tags"><Tags tags={['From-scratch', 'Contracting', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'MySQL']} /></div>
<a href="/portfolio/traco_e_cor.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/traco_e_cor.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Autobusca - Administration Panel</h2>
<p>Administration panel for car sales website. Worked on frontend and backend.</p>
<div class="portfolio_tags"><Tags tags={['Solo', 'From-scratch', 'Contracting', 'Apache', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'Linux', 'MySQL']} /></div>
<a href="/portfolio/autobusca_admin.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/autobusca_admin.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Animated PDF reader in book form with flipping animation</h2>
<p>Leveraged Adobe Flex to create an animated document reader, capable of handling thousands of pages even on underpowered machines and suboptimal internet connections.</p>
<div class="portfolio_tags"><Tags tags={['Flex', 'Flash', 'From-scratch', 'JavaScript', 'Batch-processing', 'Animation']} /></div>
<a href="/portfolio/paginador_flex_tecnomapas.jpg" target="_blank" title={imageTitle}><img alt="" src="/portfolio/paginador_flex_tecnomapas.jpg" class="portfolio_image" /></a>

<h2 class="portfolio_title">Ibisa - ONG Portal</h2>
<p>Developed theme and plugins for Wordpress. Also setup and mantain Linux server.</p>
<div class="portfolio_tags"><Tags tags={['From-scratch', 'Contracting', 'Wordpress', 'Apache', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'MySQL']} /></div>
<a href="/portfolio/ibisa.jpg" target="_blank" title={imageTitle}><img alt="" src="/portfolio/ibisa.jpg" class="portfolio_image" /></a>

<h2 class="portfolio_title">SuperMotor Classifieds</h2>
<p>Customer facing website and administration panel for online car classfieds.</p>
<div class="portfolio_tags"><Tags tags={['Solo', 'From-scratch', 'Contracting', 'Apache', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'Linux', 'Design', 'MySQL']} /></div>
<a href="/portfolio/revista_auto_motor_home.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/revista_auto_motor_home.png" class="portfolio_image" /></a>
<br /><br />
<a href="/portfolio/revista_auto_motor_admin.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/revista_auto_motor_admin.png" class="portfolio_image" /></a>

<!--
TRADUZIR TíTULOS PARA INGLES (Ou Pelo menos colocar em parênteses)
coinbot
crypto bot written in Go
stimulsoft report printing API server
sigeec PHP
-->
<style>
	.portfolio_chatbot_images {
		display: flex;
		align-items: center;
		align-content: space-between;
		justify-content: space-around;
		flex-flow: row wrap;
	}

	.portfolio_chatbot_images a {
		margin-bottom: 1rem;
	}
	.portfolio_title {
		margin-top: 4rem;
	}

	.portfolio_tags {
		margin: 1rem 0;
	}

	.portfolio_tags :global(span) {
		border: 1px solid #000;
		font-size: 80%;
		border-radius: 10px 20px;
		padding: 0.1rem 0.5rem;
		background-color: #848484;
		color: #000;
		white-space: nowrap;
		margin: 0 2px 5px 0;
		display: inline-block;
	}

	.portfolio_image {
		width: auto;
		height: auto;
		max-width: 100%;
		border-radius: 5px;
		display: block;
		margin: 0 auto;
		transition: transform 0.2s;
	}

	.portfolio_image:hover,
	.portfolio_image:active {
		box-shadow: 0px 0px 10px rgb(70, 70, 70);
	}
</style>
