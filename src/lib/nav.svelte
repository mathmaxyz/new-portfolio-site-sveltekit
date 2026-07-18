<script lang="ts">
	import { page } from '$app/state';
	import { MediaQuery } from 'svelte/reactivity';
	import PauseIcon from '$lib/icons/controls/pause.svg?component';
	import PlayIcon from '$lib/icons/controls/play.svg?component';

	let audio: HTMLAudioElement | undefined = $state();
	let playing = $state(false);
	let showMenu = $state(false);

	const mobile = new MediaQuery('max-width: 768px');

	const links: [string, string][] = [
		['/', 'About'],
		['/blog', 'writing'],
		['/projects', 'projects'],
		['/contact', 'contact']
	];

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

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function playMusic() {
		audio?.play();
		playing = true;
	}

	function pauseMusic() {
		audio?.pause();
		playing = false;
	}
</script>

<div class="nav">
	<div class="nav-title">
		<div class="nav-top-row">
			<h1 class="heading glitch" data-text="Max Hope-Carter">Max Hope-Carter</h1>
			<audio bind:this={audio} id="music-player" src="/helpless_chase.mp3"></audio>
			{#if playing}
				<button class="audio-btn" onclick={pauseMusic}><PauseIcon /></button>
			{:else}
				<button class="audio-btn" onclick={playMusic}><PlayIcon /></button>
			{/if}
		</div>
		<p class="tagline">Software engineer | Music producer | Designer</p>
	</div>
	{#if mobile.current}
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
	{:else}
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
	{/if}
</div>

<style>
	.nav {
		padding-bottom: 10px;
	}

	.nav-top-row {
		display: flex;
		align-items: center;
		min-width: 0;
	}

	.nav-top-row :global(.heading) {
		min-width: 0;
		flex-shrink: 1;
	}

	.audio-btn {
		flex-shrink: 0;
		margin-left: auto;
	}

	.audio-btn :global(svg) {
		width: clamp(1.35rem, 5.3vw, 50px);
		height: clamp(1.35rem, 5.3vw, 50px);
	}
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

	.menu .section-heading-link {
		margin: 0 0 10px 10px;
	}

	.menu .section-heading-link.active {
		text-decoration: underline;
		text-decoration-thickness: 3px;
		text-underline-offset: 4px;
		text-decoration-color: var(--light-green);
	}
</style>
