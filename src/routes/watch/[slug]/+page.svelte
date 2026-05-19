
<script>
	// Import the Mux web component
	import { onMount } from 'svelte';
	
	let { data } = $props();

	onMount(async () => {
		// @ts-expect-ignore
		await import('@mux/mux-player');
	})
</script>

<div class="max-w-7xl mx-auto p-6 xl:p-12 relative z-10">
	<div class="mb-8 flex items-center justify-between border-b-4 border-zinc-800 pb-4">
		<a rel="external" href="/watch" class="font-black text-xl text-zinc-400 hover:bg-white hover:text-black px-2 py-1 transition-colors uppercase">
			&lt;- Return to Archive
		</a>
		<span class="font-bold text-sm bg-black text-zinc-400 px-2 py-1 border-2 border-zinc-800">FILE: {data.video.slug}</span>
	</div>

	<div class="border-4 border-zinc-700 bg-[url('rusty_1.jpg')] bg-cover bg-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8">
		
		{#if data.video.mux_playback_id}
			<mux-player
				stream-type="on-demand"
				playback-id={data.video.mux_playback_id}
				metadata-video-title={data.video.title}
				class="w-full aspect-video border-b-4 border-zinc-700 block bg-black"
				primary-color="#ffffff"
				secondary-color="#000000"
			></mux-player>
		{:else}
			<div class="w-full aspect-video bg-zinc-900 border-b-4 border-zinc-700 flex items-center justify-center relative overflow-hidden">
				<div class="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rVq1X8GBgYQxgEEAAQYAEOzBDoQ1K+tAAAAAElFTkSuQmCC')] opacity-20 pointer-events-none"></div>
				<span class="font-black text-4xl uppercase tracking-widest text-zinc-600">NO SIGNAL / W.I.P</span>
			</div>
		{/if}

		<div class="p-6 md:p-10 bg-black/80 backdrop-blur-sm">
			<h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">{data.video.title}</h1>
			
			<div class="border-t-2 border-dashed border-zinc-700 pt-4 text-lg md:text-xl prose prose-p:font-medium prose-p:text-zinc-300 max-w-none prose-headings:text-white prose-strong:text-white">
				{data.video.content}
			</div>
			
			<div class="mt-8 pt-4 border-t-4 border-zinc-800 text-sm md:text-base font-bold text-zinc-500 uppercase flex justify-between">
				<span>INGESTED: {new Date(data.video.created_at).toLocaleDateString()}</span>
				<span>ID: {data.video.id}</span>
			</div>
		</div>
	</div>
</div>
