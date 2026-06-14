<script>
	let { data } = $props();
</script>

<h2 class="section-heading section-heading-right">Projects</h2>

<ul class="post-list">
	{#each data.projects as project}
		<li>
			<a class="post-link" href="/blog/{project.slug}">
				<span class="project-title">{project.title}</span>
			</a>
		</li>
	{/each}
</ul>
