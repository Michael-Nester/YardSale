import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {

    const response = await fetch(`http://localhost:8080/videos/${params.slug}`);

    if (!response.ok) {
        if (response.status === 404) {
            error(404, 'FILE_NOT_FOUND');
        }
        error(500, "SYSTEM_OFFLINE");
    }
    
    const video = await response.json();
    return { video };
}