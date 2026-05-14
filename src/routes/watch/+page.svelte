<script>
	let { data } = $props();
</script>


<div class="border-b-4 border-black p-4 bg-yellow-300">
    <h1 class="text-3xl font-black uppercase tracking-tighter">VIDEO ARCHIVE</h1>
    <p class="mb-4">Watching videos can be fun... in moderation. </p>
</div>

<div class="p-6 grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50">
    {#each data.videos as video (video.slug)}
		<a rel="external" href="/watch/{video.slug}" class="block group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-75">
			
			<div class="h-48 bg-gray-300 border-b-4 border-black flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-black group-hover:text-white transition-colors duration-75">
				
				<div class="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rVq1X8GBgYQxgEEAAQYAEOzBDoQ1K+tAAAAAElFTkSuQmCC')] opacity-20 pointer-events-none"></div>

				<span class="font-black text-2xl uppercase tracking-widest">NO SIGNAL</span>
				<span class="text-xs font-bold mt-1">FILE_ID: {video.slug}</span>
			</div>

			<div class="p-3 bg-white">
				<h2 class="font-black text-xl uppercase truncate">{video.title}</h2>
				<div class="mt-2 pt-2 border-t-2 border-dashed border-gray-400 flex justify-between text-xs font-bold text-gray-600">
					<span>FMT: {video.mux_playback_id ? 'MUX / HLS' : 'OFFLINE'}</span>
					<span>STATUS: [ OK ]</span>
				</div>
			</div>
			
		</a>
	{/each}
</div>

<!--
<ul class="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
	{#each data.summaries as summary (summary.slug)}
		<li class="border-b-2 border-dashed border-gray-400 py-2 last:border-b-0">
            <a rel="external" href="/watch/{summary.slug}" class="font-bold uppercase">
                {summary.title}
            </a>
        </li>
	{/each}
</ul>
-->