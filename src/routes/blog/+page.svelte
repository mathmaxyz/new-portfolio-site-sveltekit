<script>
	let { data } = $props();
</script>

<ul class="post-list">
	{#each data.posts as post, i}
		<li>
			<a class="post-link" href="/blog/{post.slug}">
				<span class="post-title">{post.title}</span>
				<span class="meta-text">{post.date}</span>
			</a>
			<div class="post-teaser-content">
				<img class="post-thumbnail" src={post.thumbnail} />
				<p class="post-excerpt">{post.excerpt} ...</p>
			</div>
		</li>
	{/each}
</ul>
