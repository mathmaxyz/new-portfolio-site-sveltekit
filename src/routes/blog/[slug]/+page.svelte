<script>
	let { data } = $props();
</script>

<article>
	<div class="topbar article-header" style:background-image="url({data.thumbnail})">
		<div class="article-heading-container">
			<h2 class="article-heading">{data.title}</h2>
			<span class="meta-text article-meta">{data.date}</span>
		</div>
	</div>
	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	.article-header {
		background-size: cover;
		background-position: top;
		border: 5px solid var(--dark-green-transparent);
	}

	.article-heading {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: 50px;
		color: var(--light-green);
		background: var(--dark-green-transparent);
		padding: 0 10px;
	}

	.article-meta {
		background: var(--dark-green-transparent);
	}

	.prose {
		margin-top: 20px;
		line-height: 1.6rem;
		padding: 10px;
		background-color: var(--light-green-transparent);
		border: 5px solid var(--dark-green-transparent);
		color: var(--light-green);
	}
</style>
