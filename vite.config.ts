import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
			extensions: ['.svelte', '.svx', '.md']
		}),

		svg({
			includePaths: ['src/lib/icons/tech_stack/'],
			svgoOptions: {
				plugins: [
					{ name: 'preset-default' },
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		}),

		svg({
			includePaths: ['src/lib/icons/controls/'],
			svgoOptions: false
		}),

		svg({
			includePaths: ['src/lib/icons/contact-methods'],
			svgoOptions: {
				plugins: [
					{ name: 'preset-default' },
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		})
	]
});
