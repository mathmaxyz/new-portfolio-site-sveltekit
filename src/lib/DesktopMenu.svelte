<script lang="ts">
	import { page } from '$app/state';

	let { links }: { links: [string, string][] } = $props();

	let navButtonsEl: HTMLDivElement | undefined = $state();
	let linkEls: HTMLAnchorElement[] = $state([]);
	let underlineLeft = $state(0);
	let underlineWidth = $state(0);
	let ready = $state(false);

	function isActive(href: string) {
		const path = page.url.pathname;
		if (href === '/') return path === '/';
		return path.startsWith(href);
	}

	function getActiveIndex() {
		return links.findIndex(([href]) => isActive(href));
	}

	function measureLink(index: number) {
		const el = linkEls[index];
		if (!el || !navButtonsEl) return;
		const parentRect = navButtonsEl.getBoundingClientRect();
		const elRect = el.getBoundingClientRect();
		underlineLeft = elRect.left - parentRect.left;
		underlineWidth = elRect.width;
	}

	function moveToActive() {
		const idx = getActiveIndex();
		if (idx >= 0) measureLink(idx);
	}

	function handleLinkEnter(index: number) {
		measureLink(index);
	}

	function handleMouseLeave() {
		moveToActive();
	}

	$effect(() => {
		if (navButtonsEl && linkEls.length === links.length) {
			moveToActive();
			ready = true;
		}
	});
</script>

<div class="nav-buttons" bind:this={navButtonsEl} onmouseleave={handleMouseLeave}>
	{#each links as [href, label], i}
		<a
			class="section-heading-link"
			class:active={isActive(href)}
			{href}
			bind:this={linkEls[i]}
			onmouseenter={() => handleLinkEnter(i)}
		>
			<span class="section-heading">{label}</span>
		</a>
	{/each}
	<div
		class="nav-underline"
		class:nav-underline-ready={ready}
		style="left: {underlineLeft}px; width: {underlineWidth}px;"
	></div>
</div>

<style>
	.nav-buttons {
		width: 100%;
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
		position: relative;
	}

	.nav-underline {
		position: absolute;
		bottom: -4px;
		height: 3px;
		background: var(--mid-green);
		opacity: 0;
		pointer-events: none;
	}

	.nav-underline-ready {
		opacity: 1;
		transition:
			left 0.6s ease,
			width 0.3s ease;
	}
</style>
