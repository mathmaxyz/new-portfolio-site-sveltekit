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
	<h1 class="heading"><TextScramble text="Max Hope-Carter" /></h1>
	<p class="tagline">Software engineer | Music producer | Designer</p>
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
