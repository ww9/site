<script>
	import { activeMenu, MenuItems } from '../store';
	import Tags from '../components/Tags.svelte';

	const imageTitle = 'Open original image in new tab';

	activeMenu.set(MenuItems.Portfolio);
</script>

<h1>Portfolio</h1>

<h2 class="portfolio_title">Document generator - API service</h2>
<div class="portfolio_tags"><Tags tags={['.NET', 'C#', 'PostgreSQL', 'API']} /></div>
<p>A .NET Core API service accepts document printing requests in JSON and XML payloads to generate PDF and Excel files. Multiple systems at work make use of this service.</p>
<a href="/portfolio/report_generator.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/report_generator.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Vaccination Scheduler</h2>
<div class="portfolio_tags"><Tags tags={['Azure', 'NGINX', 'PHP-FPM', 'Benchmarking', 'Linux', 'MariaDB', 'Scaling', 'k6.io']} /></div>
<p>For this project, I was more of a DevOps specialist in charge of configuring Linux, HTTP, and database servers. In addition, I assessed application performance characteristics and proposed code and platform enhancements to address bottlenecks.</p>
<a href="/portfolio/vacina_cuiaba.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/vacina_cuiaba.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Chatbot</h2>
<p>I created a chatbot online tool to assist individuals in analyzing their symptoms and, if required, directing them to health care.</p>
<div class="portfolio_tags"><Tags tags={['From-scratch', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'Linux', 'NGINX', 'MariaDB']} /></div>
<div class="portfolio_chatbot_images">
	<a href="/portfolio/chatbot_rj.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/chatbot_rj.png" class="portfolio_image" /></a>
	<a href="/portfolio/chatbot_cuiaba.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/chatbot_cuiaba.png" class="portfolio_image" /></a>
</div>

<h2 class="portfolio_title">EdTech App</h2>
<div class="portfolio_tags"><Tags tags={['PHP', 'NGINX', 'From-scratch', 'Apache', 'Hiring', 'Mentoring', 'MariaDB', 'Linux', 'CI', 'Sonar', 'Unit Testing', 'Azure DevOps', 'Team Lead']} /></div>
<p>An educational management tool that controls nearly 200 educational establishments was designed, developed, and led by me.</p>
<a href="/portfolio/siged.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/siged.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Mineshare</h2>
<p>In this project I was assigned to work o nthe frontend development for a computing colocation startup.</p>
<div class="portfolio_tags"><Tags tags={['Solo', 'Frontend', 'Contracting', 'NGINX', 'CSS', 'HTML', 'JavaScript', 'jQuery', 'Linux', 'Design', 'MySQL']} /></div>
<a href="/portfolio/mineshare.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/mineshare.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Bicho Mania</h2>
<p>In this responsive petshop website, I was in charge of full-stack development as well as CMS customization.</p>
<div class="portfolio_tags"><Tags tags={['From-scratch', 'Contracting', 'WordPress', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'MySQL']} /></div>
<a href="/portfolio/bicho_mania.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/bicho_mania.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">e-Commerce - BleepBleeps</h2>
<div class="portfolio_tags"><Tags tags={['London-UK', 'E-commerce', 'CSS', 'Shopify', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'Ruby', 'Node', 'SAAS', 'Gulp']} /></div>
<p>I customized a Shopify e-Commerce website, including the shopping cart discount processing.</p>
<a href="/portfolio/bleep_bleeps.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/bleep_bleeps.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">WorldFirst - Fintech</h2>
<div class="portfolio_tags"><Tags tags={['London-UK', 'Scrum', 'Agile', 'CSS', 'Fintech', 'PHP', 'BDD', 'Unit Testing', 'Behat', 'HTML', 'JavaScript', 'jQuery', 'Symfony']} /></div>
<p>I used Behat to introduce automated BDD-style tests capable of detecting regressions in translations on a per-language basis. I also designed customer registration forms that were divided into sections based on the user's country of origin.</p>
<a href="/portfolio/worldfirst.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/worldfirst.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">ALMT - Government Legislation creation manager</h2>
<p>I was a key member of a team that created a system to manage the entire life cycle of law proposals for a state government body.</p>
<div class="portfolio_tags"><Tags tags={['Symfony', 'Zend', 'Backend', 'Frontend', 'Full-stack', 'CSS', 'HTML', 'JavaScript', 'Linux', 'MySQL']} /></div>
<a href="/portfolio/almt.png " target="_blank" title={imageTitle}><img alt="" src="/portfolio/almt.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Traço & Cor</h2>
<p>Full-stack development for boutique website.</p>
<div class="portfolio_tags"><Tags tags={['From-scratch', 'Contracting', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'MySQL']} /></div>
<a href="/portfolio/traco_e_cor.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/traco_e_cor.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Autobusca - Backend administration panel</h2>
<p>Full-stack development for the administration panel of a car sales website.</p>
<div class="portfolio_tags"><Tags tags={['Solo', 'From-scratch', 'Contracting', 'Apache', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'Linux', 'MySQL']} /></div>
<a href="/portfolio/autobusca_admin.png" target="_blank" title={imageTitle}><img alt="" src="/portfolio/autobusca_admin.png" class="portfolio_image" /></a>

<h2 class="portfolio_title">Interactive 3D PDF reader</h2>
<p>By splitting PDFs into chunks and loading pages on demand, I created an animated document reader capable of handling thousands of pages even on underpowered computers and slow internet connections.</p>
<div class="portfolio_tags"><Tags tags={['Flex', 'Flash', 'From-scratch', 'JavaScript', 'Batch-processing', 'Animation']} /></div>
<a href="/portfolio/paginador_flex_tecnomapas.jpg" target="_blank" title={imageTitle}><img alt="" src="/portfolio/paginador_flex_tecnomapas.jpg" class="portfolio_image" /></a>

<h2 class="portfolio_title">Ibisa - Website</h2>
<p>This role entailed customizing WordPress themes and plugins and deploying it to a Linux server.</p>
<div class="portfolio_tags"><Tags tags={['From-scratch', 'Contracting', 'WordPress', 'Apache', 'CSS', 'PHP', 'HTML', 'JavaScript', 'jQuery', 'MySQL']} /></div>
<a href="/portfolio/ibisa.jpg" target="_blank" title={imageTitle}><img alt="" src="/portfolio/ibisa.jpg" class="portfolio_image" /></a>

<h2 class="portfolio_title">SuperMotor - Car sales</h2>
<p>I created a website and control panel for a car dealership, which featured a multi-tenant user system that allowed third-party sellers to rent advertisement space and promote their car listings.</p>
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
