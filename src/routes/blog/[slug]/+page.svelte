<script>
	let { data } = $props();
</script>

<article>
	<h2 class="section-heading">{data.title}</h2>
	<span class="meta-text">{data.date}</span>
	<div class="prose">
		<data.content />
	</div>
</article>
