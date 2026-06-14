<script>
	let { data } = $props();
</script>

<a class="section-heading-link" href="/blog">
	<span class="section-heading">writing</span>
</a>

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

<a href="/projects" class="section-heading-link">
	<span class="section-heading">Projects</span>
</a>

<ul class="post-list">
	{#each data.projects as project}
		<li>
			<a class="post-link" href="/blog/{project.slug}">
				<span class="project-title">{project.title}</span>
			</a>
		</li>
	{/each}
</ul>
