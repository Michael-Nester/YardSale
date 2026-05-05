import { videos } from './data.js';

export function load() {
	return {
		summaries: videos.map((video) => ({
			slug: video.slug,
			title: video.title
		}))
	};
}