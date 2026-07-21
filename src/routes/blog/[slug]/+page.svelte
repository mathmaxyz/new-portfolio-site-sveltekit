<script>
	import BackIcon from '$lib/icons/controls/back.svg?component';
	let { data } = $props();
</script>

<article>
	<div class="topbar article-header" style:background-image="url({data.thumbnail})">
		<div class="article-heading-container">
			<h2 class="article-heading">{data.title}</h2>
			<span class="meta-text article-meta">{data.date}</span>
		</div>
		<a href="/blog" class="back-button"><BackIcon class="post-nav-icon" /> Back to posts</a>
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

	.back-button {
		text-decoration: none;
		color: var(--light-green);
		background: var(--dark-green-transparent);
		height: fit-content;
		padding: 5px 10px 5px 5px;
		margin-top: 10px;
		font-family: var(--font-display);
		font-size: 20px;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.back-button:hover {
		background: var(--mid-mid-green);
	}

	.prose :global(.figure) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		font-style: italic;
	}
</style>
