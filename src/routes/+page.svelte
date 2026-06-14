<script>
	let { data } = $props();
</script>

<ul class="post-list">
	{#each data.posts as post}
		<li>
			<a class="post-link" href="/blog/{post.slug}">
				<span class="post-title">{post.title}</span>
				<span class="meta-text">{post.date}</span>
			</a>
			<p class="post-excerpt">{post.excerpt} ...</p>
		</li>
	{/each}
</ul>
