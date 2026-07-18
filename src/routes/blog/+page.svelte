<script>
	import MinMaxButton from '$lib/minMaxButton.svelte';

	let { data } = $props();
</script>

<ul class="post-list">
	{#each data.posts as post, i}
		<li>
			<a href="/blog/{post.slug}">
				<div class="topbar">
					<div class="topbar-left">
						<span class="topbar-heading">{post.title}</span>
						<span class="meta-text">{post.date}</span>
					</div>
				</div>
			</a>
			<div class="post-teaser-content">
				<img class="post-thumbnail" src={post.thumbnail} />
				<p class="post-excerpt">{post.excerpt} ...</p>
			</div>
		</li>
	{/each}
</ul>
