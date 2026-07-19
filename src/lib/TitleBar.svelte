<script lang="ts">
	import PauseIcon from '$lib/icons/controls/pause.svg?component';
	import PlayIcon from '$lib/icons/controls/play.svg?component';

	let audio: HTMLAudioElement | undefined = $state();
	let playing = $state(false);

	function playMusic() {
		audio?.play();
		playing = true;
	}

	function pauseMusic() {
		audio?.pause();
		playing = false;
	}
</script>

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

<style>
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
</style>
