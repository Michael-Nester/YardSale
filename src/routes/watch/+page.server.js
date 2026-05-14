export async function load({ fetch }) {
    //ping go API
    const response = await fetch('http://localhost:8080/videos');

    if (!response.ok) {
        //if go server is down, return an empty array so the frontend doesn't crash.
        console.error('Failed to fetch videos from Go API');
        return { videos: [] };
    }

    const videos = await response.json();
    return { videos };
}