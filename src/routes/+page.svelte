<script>
	import TextScramble from "$lib/TextScramble.svelte";

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

<div class="content">
	<h1><TextScramble text="Max Hope-Carter" /></h1>
	<p>Software engineer | Music producer | Designer</p>
	<audio bind:this={audio} id="music-player" src="/helpless_chase.mp3"></audio>
	{#if playing}
		<button onclick={pauseMusic}
			><img width="50px" height="50px" src="/pause1.svg" alt="Pause" /></button
		>
	{:else}
		<button onclick={playMusic}
			><img width="50px" height="50px" src="/play2.svg" alt="Play" /></button
		>
	{/if}
	<h2>Recent writing</h2>
</div>

<style>
	button {
		background: none;
		border: none;
		margin-top: 10px;
	}
</style>
