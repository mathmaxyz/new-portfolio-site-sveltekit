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
	{@render children()}
</div>
