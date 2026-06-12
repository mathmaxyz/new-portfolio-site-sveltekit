<script>
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	/** @type {{ text: string, speed?: number, revealDelay?: number }} */
	let { text, speed = 70, revealDelay = 200 } = $props();

	let displayed = $state(
		text.split("").map((c) => (c === " " ? " " : randomChar())).join("")
	);
	let resolved = $state(0);
	let done = $state(false);
	let interval;

	function randomChar() {
		return chars[Math.floor(Math.random() * chars.length)];
	}

	function scramble() {
		resolved = 0;
		done = false;
		clearInterval(interval);

		const revealTimer = setInterval(() => {
			resolved++;
			if (resolved >= text.length) clearInterval(revealTimer);
		}, revealDelay);

		interval = setInterval(() => {
			displayed = text
				.split("")
				.map((char, i) => {
					if (char === " ") return " ";
					if (i < resolved) return text[i];
					return randomChar();
				})
				.join("");

			if (resolved >= text.length) {
				displayed = text;
				done = true;
				clearInterval(interval);
			}
		}, speed);
	}

	$effect(() => {
		text;
		scramble();
		return () => clearInterval(interval);
	});
</script>

<span class={done ? "glitch" : ""} data-text={displayed}>{displayed}</span>
