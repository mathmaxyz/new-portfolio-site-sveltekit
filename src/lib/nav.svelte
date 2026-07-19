<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import TitleBar from '$lib/TitleBar.svelte';
	import DesktopMenu from '$lib/DesktopMenu.svelte';
	import MobileMenu from '$lib/MobileMenu.svelte';

	const mobile = new MediaQuery('max-width: 768px');

	const links: [string, string][] = [
		['/', 'About'],
		['/blog', 'writing'],
		['/projects', 'projects'],
		['/contact', 'contact']
	];
</script>

<div class="nav">
	<TitleBar />
	{#if mobile.current}
		<MobileMenu {links} />
	{:else}
		<DesktopMenu {links} />
	{/if}
</div>

<style>
	.nav {
		padding-bottom: 10px;
	}
</style>
