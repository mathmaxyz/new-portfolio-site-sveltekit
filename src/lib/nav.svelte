<script lang="ts">
	import { page } from '$app/state';
	import { MediaQuery } from 'svelte/reactivity';

	let audio: HTMLAudioElement | undefined = $state();
	let playing = $state(false);
	let showMenu = $state(false);

	const mobile = new MediaQuery('max-width: 768px');

	function isActive(href: string) {
		const path = page.url.pathname;
		if (href === '/') return path === '/' || path.startsWith('/blog');
		return path.startsWith(href);
	}

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
				<button class="audio-btn" onclick={pauseMusic}
					><img width="50px" height="50px" src="/pause1.svg" alt="Pause" /></button
				>
			{:else}
				<button class="audio-btn" onclick={playMusic}
					><img width="50px" height="50px" src="/play2.svg" alt="Play" /></button
				>
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
				{#each [['/', 'writing'], ['/projects', 'projects'], ['/about', 'About'], ['/contact', 'contact'], ['/minigame', '???']] as [href, label]}
					<a class="section-heading-link" class:active={isActive(href)} {href} onclick={toggleMenu}>
						<span class="section-heading">{label}</span>
					</a>
				{/each}
			</div>
		{/if}
	{:else}
		<div class="nav-buttons">
			{#each [['/', 'writing'], ['/projects', 'projects'], ['/about', 'About'], ['/contact', 'contact'], ['/minigame', '???']] as [href, label]}
				<a class="section-heading-link" class:active={isActive(href)} {href}>
					<span class="section-heading">{label}</span>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.nav {
		padding-bottom: 10px;
	}

	.nav-top-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav-buttons {
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
	}

	.section-heading-link.active {
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-color: var(--mid-green);
	}

	.menu-button {
		display: flex;
		justify-content: center;
	}

	.section-heading-button {
		background: var(--dark-green);
		border: none;
		margin: 15px 0 0 0;
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
		background: var(--dark-green);
	}

	.menu .section-heading {
		color: var(--light-green);
	}

	.menu .section-heading-link.active {
		text-decoration-color: var(--light-green);
	}
</style>
