<script>
	import EmailIcon from '$lib/icons/contact-methods/email.svg?component';
	import LinkedinIcon from '$lib/icons/contact-methods/linkedin.svg?component';
	import GithubIcon from '$lib/icons/contact-methods/github.svg?component';
</script>

<div class="contact-wrapper">
	<div class="contact-container dark">
		<div class="contact-title">
			<EmailIcon height="20" />
			Email:
		</div>
		<div class="contact-method">
			<a class="contact-link hover-link" href="mailto:maxhcarter@proton.me">maxhcarter@proton.me</a>
		</div>
	</div>
	<div class="contact-container light">
		<div class="contact-title">
			<LinkedinIcon height="25" />
			LINKEDIN:
		</div>
		<div class="contact-method">
			<a class="contact-link hover-link" href="https://www.linkedin.com/in/maxhc/">linkedin.com/in/maxhc/</a>
		</div>
	</div>
	<div class="contact-container dark">
		<div class="contact-title">
			<GithubIcon height="25" />
			GITHUB:
		</div>
		<div class="contact-method">
			<a class="contact-link hover-link" href="https://github.com/mathmaxyz">github.com/mathmaxyz</a>
		</div>
	</div>
</div>
<span class="section-heading">Let's work together</span>

<style>
	.contact-wrapper {
		border-right: 5px solid var(--dark-green-transparent);
		border-left: 5px solid var(--dark-green-transparent);
		margin: 20px 0;
	}

	.contact-link {
		color: var(--light-green);
		font-size: 20px;
		margin-left: 10px;
	}

	.contact-container {
		display: flex;
		align-items: center;
		padding: 5px 10px;
	}

	.contact-title {
		display: flex;
		align-items: center;
		font-family: var(--font-display);
		font-weight: 400;
		font-size: 25px;
		color: var(--light-green);
	}

	.contact-container :global(svg) {
		width: 25px;
		flex-shrink: 0;
		fill: var(--light-green);
		margin-right: 10px;
	}

	.contact-method {
		flex-grow: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>
