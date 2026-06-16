export async function load() {
	const projects = import.meta.glob('/src/projects/*.md', { eager: true });

	const allProjects = await Promise.all(
		Object.entries(projects).map(async ([path, mod]: [string, any]) => {
			return {
				slug: path.split('/').pop()!.replace('.md', ''),
				title: mod.metadata.title,
				description: mod.metadata.description,
				index: mod.metadata.index,
				thumbnail: mod.metadata.thumbnail,
			};
		})
	);

	allProjects.sort((a, b) => a.index - b.index);

	return { projects: allProjects };
}
