<script>
	import TextScramble from '$lib/TextScramble.svelte';

	let audio = $state();
	let playing = $state(false);

	const playMusic = () => {
		audio.play();
		playing = true;
	};

	const pauseMusic = () => {
		audio.pause();
		playing = false;
	};
</script>

<div class="nav">
	<div class="nav-top-row">
		<h1 class="heading"><TextScramble text="Max Hope-Carter" /></h1>
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

<style>
	.nav {
		padding-bottom: 10px;
	}
	.nav-top-row {
		display: flex;
		justify-content: space-between;
	}
</style>
