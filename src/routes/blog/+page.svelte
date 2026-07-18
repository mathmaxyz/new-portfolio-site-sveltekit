<script>
	import MinMaxButton from '$lib/minMaxButton.svelte';

	let { data } = $props();
</script>

<ul class="post-list">
	{#each data.posts as post, i}
		<li>
			<div class="topbar">
				<div class="topbar-left">
					<a class="post-link" href="/blog/{post.slug}">
						<span class="topbar-heading">{post.title}</span>
					</a>
					<span class="meta-text">{post.date}</span>
				</div>
				<a class="post-link" href="/blog/{post.slug}">
					<MinMaxButton></MinMaxButton>
				</a>
			</div>
			<div class="post-teaser-content">
				<img class="post-thumbnail" src={post.thumbnail} />
				<p class="post-excerpt">{post.excerpt} ...</p>
			</div>
		</li>
	{/each}
</ul>
