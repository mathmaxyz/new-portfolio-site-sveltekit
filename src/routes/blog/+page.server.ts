import { remark } from 'remark';
import remarkExcerpt from '@stefanprobst/remark-excerpt';

export async function load() {
	const posts = import.meta.glob('/src/posts/*.md', { eager: true });
	const rawPosts = import.meta.glob('/src/posts/*.md', { eager: true, query: '?raw', import: 'default' });

	const excerptProcessor = remark().use(remarkExcerpt);

	const allPosts = await Promise.all(
		Object.entries(posts).map(async ([path, mod]: [string, any]) => {
			const raw = rawPosts[path] as string;
			const stripped = raw.replace(/^---[\s\S]*?---/, '').trim();
			const result = await excerptProcessor.process(stripped);

			return {
				slug: path.split('/').pop()!.replace('.md', ''),
				title: mod.metadata.title,
				description: mod.metadata.description,
				date: mod.metadata.date,
				excerpt: String(result).trim()
			};
		})
	);

	allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts: allPosts };
}
