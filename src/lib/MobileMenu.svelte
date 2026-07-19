<script lang="ts">
	import { page } from '$app/state';

	let { links }: { links: [string, string][] } = $props();

	let showMenu = $state(false);

	function isActive(href: string) {
		const path = page.url.pathname;
		if (href === '/') return path === '/';
		return path.startsWith(href);
	}

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<div class="menu-button">
	<button onclick={toggleMenu} class="section-heading-button">
		<span class="section-heading">M</span>
		<span class="section-heading">E</span>
		<span class="section-heading">N</span>
		<span class="section-heading">U</span>
	</button>
</div>
{#if showMenu}
	<div class="menu">
		{#each links as [href, label]}
			<a class="section-heading-link" class:active={isActive(href)} {href} onclick={toggleMenu}>
				<span class="section-heading">{label}</span>
			</a>
		{/each}
	</div>
{/if}

<style>
	.menu-button {
		margin-top: 10px;
		display: flex;
		justify-content: center;
	}

	.section-heading-button {
		background: var(--dark-green-transparent);
		border: none;
		margin: 1fr 0 0 0;
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}

	.menu-button .section-heading {
		color: var(--light-green);
	}

	.section-heading-button:hover {
		background: var(--mid-green-transparent);
	}

	.menu {
		display: flex;
		flex-direction: column;
		background: var(--light-green-transparent);
		padding-top: 10px;
		border: 5px solid var(--dark-green-transparent);
		border-top: none;
	}

	.menu .section-heading {
		color: var(--light-green);
	}

	.menu .section-heading-link:hover .section-heading {
		color: var(--mid-mid-green);
	}

	.menu .section-heading-link {
		margin: 0 0 10px 10px;
	}

	.menu .section-heading-link.active {
		text-decoration: underline;
		text-decoration-thickness: 3px;
		text-underline-offset: 4px;
		text-decoration-color: var(--light-green);
	}

	.menu .section-heading-link:hover {
		text-decoration-color: var(--mid-mid-green);
	}
</style>
