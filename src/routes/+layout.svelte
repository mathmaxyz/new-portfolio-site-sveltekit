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

<Nav></Nav>
<div class="page-content">
	{@render children()}
</div>
