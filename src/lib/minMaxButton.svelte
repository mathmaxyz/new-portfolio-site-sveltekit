<!-- add minmax functionality here -->
<script lang="ts">
	interface Props {
		toggleWindow?: () => void;
		windowOpen?: boolean;
	}
	let { toggleWindow = () => {}, windowOpen = false }: Props = $props();
</script>

<button onclick={toggleWindow} class="maximise-window-button">
	{#if !windowOpen}
		<div class="maximise-window-icon"></div>
	{:else}
		<div class="minimise-window-icon"></div>
	{/if}
</button>

<style>
	.maximise-window-button {
		background: none;
		border: none;
	}

	.maximise-window-icon {
		width: 15px;
		height: 12px;
		border: 3px solid var(--light-green);
		border-top: 5px solid var(--light-green);
	}

	.minimise-window-icon {
		width: 21px;
		border-top: 5px solid var(--light-green);
	}
</style>
