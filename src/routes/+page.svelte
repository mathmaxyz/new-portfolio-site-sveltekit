<script>
	import MinMaxButton from '$lib/minMaxButton.svelte';

	let faqOpen = $state(false);

	function toggleFaq() {
		faqOpen = !faqOpen;
	}
</script>

<div class="about-wrapper">
	<img alt="Self portrait of Max" class="about-image" src="/me_detail.png" />
	<div class="about-grid">
		<div class="row-title dark">Name:</div>
		<div class="row-fact dark">Max</div>
		<div class="row-title light">Tech stack:</div>
		<div class="row-fact light">
			Java, Spring, Python, FastApi, Typescript, NodeJS, React, Angular, Docker, AWS, SQL,
			Tensorflow, Kubernetes, Kafka, Azure, Claude Code
		</div>
		<div class="row-title dark">Additional Skills:</div>
		<div class="row-fact dark">
			Electronic music production, Japanese, event production, illustration, graphic design, Djing,
			boxing
		</div>
		<div class="row-title light">Curriculum Vitae:</div>
		<div class="row-fact light">
			<a href="/CV.pdf" class="light-link hover-link" target="_blank"> View Here</a>
		</div>
	</div>
</div>
<div class="about-blurb">
	Welcome to my corner of the internet.
	<br />
	<br />
	This website is built to be, not just a portfolio, but a home on the streets of the lower internet or
	"<a class="about-link hover-link" target="_blank" href="https://zsrobinson.com/posts/the-tiny-internet/"
		>tiny internet</a
	>"
	<br />
	<br />
	Please stick around, listen to my music, read my <a class="about-link hover-link" href="/blog">blog</a>,
	check out my
	<a class="about-link hover-link" href="/projects">software projects</a> and feel free to
	<a class="about-link hover-link" href="/contact"> reach out</a> for work, collaboration or just questions.
</div>
<div class="about-faq">
	<div class="topbar">
		<h2 class="topbar-heading">FAQ</h2>
		<MinMaxButton toggleWindow={toggleFaq} windowOpen={faqOpen} />
	</div>
	<div class={faqOpen ? 'faq-content' : 'hide'}>
		Q: Did you make the art and music on this website yourself?
		<br />
		A: Yes, the music on this site is an example of the electronic music I make in Ableton live. The art
		is drawn by hand with a cheap, rather janky drawing tablet and GIMP (open source photoshop)
		<br />
		<br />
		Q: What got you into software engineering?
		<br />
		A: I have a blog post about this here
		<br />
		<br />
		Q: Do you have tips for learning Japanese?
		<br />
		A: I used the an approach inspired by popular 2010s blogs called All Japanese All the Time (AJATT)
		and Japanese Level Up, which had a more coherent guide, but no longer exists. If you want to look
		at it on the internet archive,
		<a
			class="light-link hover-link"
			href="https://web.archive.org/web/20160617102649/http://japaneselevelup.com/japanese-quest-walkthrough/"
			target="_blank">click here</a
		>. I do not recommend Duolingo.
	</div>
</div>

<style>
	.about-wrapper {
		margin: 20px 0 0 0;
		display: flex;
		align-items: stretch;
	}

	.about-image {
		width: 30%;
		object-fit: cover;
		padding: 5px;
		border: 5px solid var(--dark-green-transparent);
		margin: 0;
	}

	@media (max-width: 600px) {
		.about-wrapper {
			margin: 10px 0 0 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
		.about-image {
			width: 100%;
			box-sizing: border-box;
		}
		.about-grid {
			border-left: 5px solid var(--dark-green-transparent);
		}
	}

	.row-title {
		font-family: var(--font-display);
		font-size: 25px;
		font-weight: 300;
		color: var(--light-green);
		padding: 3px 5px;
	}

	.row-fact {
		font-size: 18px;
		padding: 7px 10px 3px 0;
		text-align: right;
		color: var(--light-green);
	}

	.light-link {
		color: var(--light-green);
	}

	.about-link {
		color: var(--light-green);
	}

	.about-grid {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr;
		border-bottom: 5px solid var(--dark-green-transparent);
		border-right: 5px solid var(--dark-green-transparent);
		box-sizing: border-box;
	}

	.about-blurb {
		border: 5px solid var(--dark-green-transparent);
		background: var(--light-green-transparent);
		color: var(--light-green);
		padding: 10px;
		font-size: 18px;
		margin-top: 20px;
	}
	.about-faq {
		color: var(--light-green);
		font-size: 18px;
		margin-top: 20px;
	}

	.faq-content {
		background: var(--light-green-transparent);
		border: 5px solid var(--dark-green-transparent);
		border-top: none;
		padding: 10px;
	}

	.hide {
		display: none;
	}
</style>
