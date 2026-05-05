<script>
    let { data } = $props();
    import { resolve } from '$app/paths';
</script>

<a href={resolve("/watch")} class="mb-4 inline-block font-bold hover:bg-black hover:text-white border-2 border-transparent p-1">
	BACK TO LIST
</a>

<h1 class="text-3xl font-black uppercase mb-4 border-b-4 border-black pb-1">
	{data.video.title}
</h1>

<div class="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
	{data.video.content}
</div>
