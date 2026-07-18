<script>
	import ForwardIcon from '$lib/icons/controls/forward.svg?component';
	let { data } = $props();
</script>

<ul class="post-list">
	{#each data.posts as post, i}
		<li>
			<a class="post-topbar-link" href="/blog/{post.slug}">
				<div class="topbar topbar-linked">
					<div class="topbar-left">
						<span class="topbar-heading">{post.title}</span>
						<span class="meta-text">{post.date}</span>
					</div>
				</div>
			</a>
			<div class="post-teaser-content">
				<img class="post-thumbnail" src={post.thumbnail} />
				<div class="post-excerpt-wrapper">
					<p class="post-excerpt">{post.excerpt} ...</p>
					<div class="post-link-container">
						<a class="post-link" href="/blog/{post.slug}">
							Read More <ForwardIcon class="post-nav-icon" /></a
						>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
