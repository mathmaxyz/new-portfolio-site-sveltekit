<script lang="ts">
	import { page } from '$app/state';

	let audio: HTMLAudioElement | undefined = $state();
	let playing = $state(false);

	function isActive(href: string) {
		const path = page.url.pathname;
		if (href === '/') return path === '/' || path.startsWith('/blog');
		return path.startsWith(href);
	}

	const playMusic = () => {
		audio?.play();
		playing = true;
	};

	const pauseMusic = () => {
		audio?.pause();
		playing = false;
	};
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
	<div class="nav-buttons">
		{#each [['/', 'writing'], ['/projects', 'projects'], ['/about', 'About'], ['/contact', 'contact'], ['/minigame', '???']] as [href, label]}
			<a class="section-heading-link" class:active={isActive(href)} {href}>
				<span class="section-heading">{label}</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.nav {
		padding-bottom: 10px;
	}
	.nav-top-row {
		display: flex;
		justify-content: space-between;
	}
	.nav-buttons {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
	.section-heading-link.active {
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-color: var(--mid-green);
	}
</style>
