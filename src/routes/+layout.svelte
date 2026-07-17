<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Max Hope-Carter</title>
</svelte:head>

<div class="page-content">
	<Nav></Nav>
	<main class="main-content">
		{@render children()}
	</main>
	<div class="footer">
		<div class="footer-contacts">
			<a class="footer-link" href="mailto:maxhcarter@proton.me">maxhcarter@proton.me</a>
			<a class="footer-link" href="https://github.com/mathmaxyz">| github.com/mathmaxyz</a>
		</div>
		<div class="footer-copyright">© 2026 Max Hope-Carter</div>
	</div>
</div>
