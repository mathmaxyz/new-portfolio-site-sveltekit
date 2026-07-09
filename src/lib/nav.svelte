<script lang="ts">
	import { page } from '$app/state';
	import { MediaQuery } from 'svelte/reactivity';
	import PauseIcon from '$lib/icons/controls/pause.svg?component';
	import PlayIcon from '$lib/icons/controls/play.svg?component';
	import Stickmen from '$lib/icons/controls/stickmen1.svg?component';

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
			<div class="stickmen" class:playing>
					<Stickmen height="80"></Stickmen>
				</div>
			{#if playing}
				<button class="audio-btn" onclick={pauseMusic}><PauseIcon width="50" height="50" /></button>
			{:else}
				<button class="audio-btn" onclick={playMusic}><PlayIcon width="50" height="50" /></button>
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
	.stickmen {
		--beat: 0.423s;
	}

	:global(.playing #head1) {
		animation:
			var(--beat) infinite alternate follow,
			calc(var(--beat) / 2) infinite alternate bob;
		animation-composition: add;
	}

	:global(.playing #torso1) {
		transform-box: view-box;
		transform-origin: 63.5618px 111.1449px;
		animation: var(--beat) infinite alternate benddown;
	}

	:global(.playing .arm1) {
		animation: var(--beat) infinite alternate follow;
	}

	:global(.playing .arml1) {
		transform-box: view-box;
		transform-origin: 83.199px 83.4418px;
		animation: var(--beat) infinite ease-in-out alternate oneeightyneg;
		animation-composition: add;
	}

	:global(.playing .armr1) {
		transform-box: view-box;
		transform-origin: 83.199px 83.4418px;
		animation: var(--beat) infinite ease-in-out alternate oneeightypos;
		animation-composition: add;
	}

	:global(.playing #forearml1) {
		transform-box: view-box;
		transform-origin: 59.5301px 75.2547px;
		animation: var(--beat) infinite alternate swingstraight;
	}

	:global(.playing #forearmr1) {
		transform-box: view-box;
		transform-origin: 108.4257px 101.5321px;
		animation: var(--beat) infinite alternate swingbent;
	}

	:global(.playing #bicepl2) {
		transform-box: view-box;
		transform-origin: 224.0413px 61.2779px;
		animation: var(--beat) infinite alternate seventybend;
	}

	:global(.playing #forearml2) {
		transform-box: view-box;
		transform-origin: 199.7323px 69.7372px;
		animation:
			var(--beat) infinite alternate followshoulder,
			var(--beat) infinite alternate elbowbendneg;
		animation-composition: add;
	}

	:global(.playing #bicepr2) {
		transform-box: view-box;
		transform-origin: 228.8556px 59.5164px;
		animation: var(--beat) infinite alternate seventybend;
	}

	:global(.playing #forearmr2) {
		transform-box: view-box;
		transform-origin: 249.452px 44.8114px;
		animation:
			var(--beat) infinite alternate followshoulderpos,
			var(--beat) infinite alternate elbowbendneg;
		animation-composition: add;
	}

	:global(.playing .man3) {
		animation: calc(var(--beat) * 2) infinite alternate roll;
	}

	:global(.playing .body3) {
		transform-box: view-box;
		transform-origin: 370.1377px 102.3236px;
		animation: calc(var(--beat) * 2) infinite alternate wobble;
	}

	:global(.playing .legr3) {
		transform-box: view-box;
		transform-origin: 386.0792px 59.9642px;
		animation: calc(var(--beat) * 2) infinite alternate wobbleleg;
	}

	:global(.playing .legl3) {
		transform-box: view-box;
		transform-origin: 384.5179px 61.3257px;
		animation: calc(var(--beat) * 2) infinite alternate wobblelegl;
	}

	:global(.playing .arml3) {
		transform-box: view-box;
		transform-origin: 369.2314px 96.077px;
		animation: calc(var(--beat) * 2) infinite alternate ease-in-out shakearm;
	}

	/* :global(.armr1) {
		transform-box: view-box;
		transform-origin: 87.4184px 85.5354px;
		animation: 1s infinite spin;
	} */

	@keyframes -global-wobbleleg {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 30deg;
		}
	}

	@keyframes -global-wobblelegl {
		from {
			rotate: 0deg;
		}
		to {
			rotate: -20deg;
		}
	}

	@keyframes -global-shakearm {
		0% {
			rotate: 0deg;
		}
		50% {
			rotate: 0deg;
		}
		85% {
			rotate: 0deg;
		}
		90% {
			rotate: 10deg;
		}
		95% {
			rotate: 0deg;
		}
		100% {
			rotate: 10deg;
		}
	}

	@keyframes -global-wobble {
		0% {
			rotate: 0deg;
		}

		100% {
			rotate: 30deg;
		}
	}

	@keyframes -global-roll {
		from {
			translate: -50px 0px;
		}
		to {
			translate: -10px 0px;
		}
	}

	@keyframes -global-followshoulderpos {
		form {
			translate: 0px 0px;
		}
		to {
			translate: 3px 29px;
		}
	}

	@keyframes -global-elbowbendpos {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 20deg;
		}
	}

	@keyframes -global-seventybend {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 70deg;
		}
	}

	@keyframes -global-followshoulder {
		from {
			translate: 0px 0px;
		}
		to {
			translate: 5px -29px;
		}
	}

	@keyframes -global-elbowbendneg {
		from {
			rotate: 0deg;
		}
		to {
			rotate: -20deg;
		}
	}

	@keyframes -global-follow {
		from {
			translate: 0px 0px;
		}
		to {
			translate: 8px 8px;
		}
	}

	@keyframes -global-bob {
		from {
			translate: 7px 7px;
		}
		to {
			translate: 0px 0px;
		}
	}

	@keyframes -global-benddown {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 20deg;
		}
	}

	@keyframes -global-oneeightyneg {
		0% {
			rotate: 0deg;
		}
		15% {
			rotate: 0deg;
		}
		85% {
			rotate: -180deg;
		}
		100% {
			rotate: -180deg;
		}
	}

	@keyframes -global-oneeightypos {
		0% {
			rotate: 0deg;
		}
		15% {
			rotate: 0deg;
		}
		85% {
			rotate: 180deg;
		}
		100% {
			rotate: 180deg;
		}
	}

	@keyframes -global-swingstraight {
		0% {
			rotate: 0deg;
		}
		25% {
			rotate: 0deg;
		}
		50% {
			rotate: 45deg;
		}
		75% {
			rotate: 90deg;
		}
		100% {
			rotate: 90deg;
		}
	}

	@keyframes -global-swingbent {
		0% {
			rotate: 0deg;
		}
		25% {
			rotate: 0deg;
		}
		50% {
			rotate: -45deg;
		}
		75% {
			rotate: -90deg;
		}
		100% {
			rotate: -90deg;
		}
	}

	@keyframes -global-spin {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 360deg;
		}
	}

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
