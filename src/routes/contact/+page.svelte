<script>
	import EmailIcon from '$lib/icons/contact-methods/email.svg?component';
	import LinkedinIcon from '$lib/icons/contact-methods/linkedin.svg?component';
	import GithubIcon from '$lib/icons/contact-methods/github.svg?component';
</script>

<div class="contact-wrapper">
	<div class="contact-container">
		<EmailIcon height="20" />
		<a class="contact-link" href="mailto:maxhcarter@proton.me">maxhcarter@proton.me</a>
	</div>
	<div class="contact-container">
		<LinkedinIcon height="25" />
		<a class="contact-link" href="https://www.linkedin.com/in/maxhc/">linkedin.com/in/maxhc/</a>
	</div>
	<div class="contact-container">
		<GithubIcon height="25" />
		<a class="contact-link" href="https://github.com/mathmaxyz">github.com/mathmaxyz</a>
	</div>
	<br />
	<span class="section-heading">Let's work together</span>
</div>

<style>
	.contact-wrapper {
		margin-top: 20px;
	}

	.contact-link {
		text-decoration: none;
		color: var(--mid-green);
		font-size: 20px;
		margin-left: 10px;
	}

	.contact-container {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.contact-container :global(svg) {
		width: 25px;
		flex-shrink: 0;
		fill: var(--dark-green);
	}
</style>
