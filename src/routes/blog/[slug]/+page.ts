import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const posts = import.meta.glob('/src/posts/*.md');
	const path = `/src/posts/${params.slug}.md`;

	if (!posts[path]) {
		error(404, 'Post not found');
	}

	const mod: any = await posts[path]();

	return {
		content: mod.default,
		title: mod.metadata.title,
		description: mod.metadata.description,
		date: mod.metadata.date
	};
}
