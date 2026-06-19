<script lang="ts">
	import type { Component } from 'svelte';

	let { data } = $props();

	const techIcons: Record<string, { default: Component }> = import.meta.glob(
		'$lib/icons/tech_stack/*.svg',
		{ query: '?component', eager: true }
	);

	function getIcon(name: string): Component | undefined {
		const key = `/src/lib/icons/tech_stack/${name}.svg`;
		return techIcons[key]?.default;
	}
</script>

<ul class="project-list">
	{#each data.projects as project}
		<li class="project-entry">
			<div class="project-overlay">
				<a class="project-link" href="/blog/{project.slug}">
					<span class="project-overlay-title">{project.title}</span>
				</a>
				<p>
					{project.description}
				</p>
				<div class="tech-stack-wrapper">
					{#each project.stack as tech}
						{@const Icon = getIcon(tech)}
						<div class="tech-stack">
							{#if Icon}
								<Icon width="20" height="20" />
							{/if}
							<span class="tech-stack-text">{tech + ' '}</span>
						</div>
					{/each}
				</div>
			</div>
			<img class="project-thumbnail" src={project.thumbnail} />
		</li>
	{/each}
</ul>

<style>
	.project-list {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 300px;
		gap: 20px;
	}

	@media (max-width: 768px) {
		.project-list {
			grid-template-columns: 1fr;
		}
	}

	.project-overlay-title {
		font-family: var(--font-display);
		color: var(--light-green);
		font-size: 50px;
	}

	.project-entry {
		position: relative;
	}

	.project-thumbnail {
		width: 100%;
		display: block;
		height: 100%;
		object-fit: cover;
	}

	.project-overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--dark-green);
	}

	.project-overlay:hover {
		opacity: 75%;
	}

	.project-overlay p {
		color: var(--light-green);
		font-family: var(--font-body);
		font-weight: 300;
		padding: 0 20px 0 20px;
		text-align: center;
	}

	.project-link {
		text-decoration: none;
	}

	.tech-stack-text {
		color: var(--light-green);
		text-transform: capitalize;
	}

	.tech-stack :global(svg) {
		margin-right: 5px;
		fill: var(--light-green);
	}

	.tech-stack {
		display: flex;
		align-items: center;
		margin-left: 10px;
	}

	.tech-stack-wrapper {
		display: flex;
	}
</style>
