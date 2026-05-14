
<script>
	// Import the Mux web component
	import { onMount } from 'svelte';
	
	let { data } = $props();

	onMount(async () => {
		// @ts-expect-ignore
		await import('@mux/mux-player');
	})
</script>

<div class="max-w-7xl mx-auto p-6 xl:p-12">
	<div class="mb-8 flex items-center justify-between border-b-4 border-black pb-4">
		<a rel="external" href="/watch" class="font-black text-xl hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase">
			&lt;- Return to Archive
		</a>
		<span class="font-bold text-sm bg-yellow-300 px-2 py-1 border-2 border-black">FILE: {data.video.slug}</span>
	</div>

	<div class="border-4 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8">
		
		{#if data.video.mux_playback_id}
			<mux-player
				stream-type="on-demand"
				playback-id={data.video.mux_playback_id}
				metadata-video-title={data.video.title}
				class="w-full aspect-video border-b-4 border-black block bg-black"
				primary-color="#ffffff"
				secondary-color="#000000"
			></mux-player>
		{:else}
			<div class="w-full aspect-video bg-gray-300 border-b-4 border-black flex items-center justify-center relative overflow-hidden">
				<div class="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rVq1X8GBgYQxgEEAAQYAEOzBDoQ1K+tAAAAAElFTkSuQmCC')] opacity-20 pointer-events-none"></div>
				<span class="font-black text-4xl uppercase tracking-widest text-black">NO SIGNAL / W.I.P</span>
			</div>
		{/if}

		<div class="p-6 md:p-10">
			<h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">{data.video.title}</h1>
			
			<div class="border-t-2 border-dashed border-gray-400 pt-4 text-lg md:text-xl prose prose-p:font-medium prose-p:text-gray-800 max-w-none">
				{data.video.content}
			</div>
			
			<div class="mt-8 pt-4 border-t-4 border-black text-sm md:text-base font-bold text-gray-500 uppercase flex justify-between">
				<span>INGESTED: {new Date(data.video.created_at).toLocaleDateString()}</span>
				<span>ID: {data.video.id}</span>
			</div>
		</div>
	</div>
</div>
