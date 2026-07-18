<script lang="ts">
	import MinMaxButton from '$lib/minMaxButton.svelte';
	import type { Component } from 'svelte';

	let { data } = $props();
	let project;

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
			<div class="topbar">
				<div class="topbar-left">
					<h2 class="topbar-heading">Project File:</h2>
					<div class="project-topbar-title">{project.title}</div>
				</div>
			</div>
			<div class="project-content">
				<div class="project-overlay">
					<a class="project-link" href={project.github}>
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
			</div>
		</li>
	{/each}
</ul>

<style>
	.project-list {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 300px;
		gap: 20px;
	}

	.project-overlay-title {
		font-family: var(--font-display);
		color: var(--light-green);
		font-size: 50px;
	}

	.project-entry {
		position: relative;
		border: 5px solid var(--dark-green-transparent);
		border-top: none;
		display: flex;
		flex-direction: column;
	}

	.project-topbar {
		background: var(--dark-green-transparent);
	}
	.project-content {
		flex-grow: 1;
		position: relative;
		overflow: hidden;
	}

	.project-thumbnail {
		width: 100%;
		display: block;
		flex-direction: column;
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
		background: var(--mid-green);
	}

	.project-overlay:hover {
		background: var(--light-green-transparent);
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

	.project-topbar-title {
		color: var(--light-green);
		font-size: 18px;
		display: flex;
		align-items: center;
	}

	.topbar-left {
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>
