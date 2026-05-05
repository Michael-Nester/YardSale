import { error } from '@sveltejs/kit';
import { videos } from '../data.js';

export function load({ params }) {
    const video = videos.find((video) => video.slug === params.slug);

    if (!video) {
        throw error(404, 'Video not found');
    }

    return {
        video
    };
}