<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<!--{@render children()}-->

<!--full window, black screen-->
<div class="flex w-full min-h-screen bg-black">
	<!--Left margin graphic-->
	<div class="flex-1 bg-[url('/bg_1.jpeg')] bg-cover bg-left bg-no-repeat"></div>
		<!--Middle column, main page-->
		<div class="w-full max-w-5xl bg-gray-50 flex flex-col shrink-0 z-10 border-x-4 border-black">
		
			<header class="border-b-4 border-black p-4 bg-white">
				<h1 class="text-4xl font-black uppercase tracking-tighter">YARD SALE</h1>
				<p class="text-sm border-t-2 border-black mt-2 pt-1">EST. 2026 // WiP</p>
			</header>
		
			<nav class="flex border-b-4 border-black bg-gray-200">
				<a href={resolve('/')} class="flex-1 border-r-4 border-black p-2 hover:bg-black hover:text-white font-bold text-center">
					[ HOME ]
				</a>
				<a href={resolve('/watch')} class="flex-1 border-r-4 border-black p-2 hover:bg-black hover:text-white font-bold text-center">
					[ VIDEOS ]
				</a>
				<a href={resolve('/shop')} class="flex-1 p-2 hover:bg-black hover:text-white font-bold text-center">
					[ SHOP ]
				</a>
			</nav>
		
			<main class="flex-1 p-4">
				{@render children()}
			</main>
		
		</div>
		<!--Right margin graphic-->
		<div class="flex-1 bg-[url('/bg_1.jpeg')] bg-cover bg-left bg-no-repeat -scale-x-100"></div>
</div>

