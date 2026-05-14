<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<!--{@render children()}-->

<!--full window, black screen-->
<div class="flex w-full h-screen overflow-hidden bg-black">
	<!--<div class="crt-overlay hidden md:block"></div>-->
	<!--Left margin graphic-->
	<!--<div class="flex-1 bg-[url('/yard_sale_1.jpeg')] bg-cover bg-top bg-repeat"></div>-->
	<aside class="w-1/5 h-full overflow-y-auto border-r-4 border-zinc-800 bg-black relative hidden md:block shrink-0">
		
		{#if page.url.pathname.startsWith('/watch')}
			<img src="/yard_sale_2.jpeg" alt="Watch Margin Graphic" class="w-full h-auto block" />
		{:else if page.url.pathname.startsWith('/shop')}
			<img src="/yard_sale_1.jpeg" alt="Shop Margin Graphic" class="w-full h-auto block" />
		{:else}
			<img src="/yard_sale_3.jpeg" alt="Home Margin Graphic" class="w-full h-auto block" />
		{/if}

		<a
			href={resolve('/')}
			class="absolute top-7 left-4 w-50 h-50 cursor-pointer z-10 block"
			aria-label="Return to home"
			title="Home"
		></a>

		<div class="p-4 border-t-2 border-zinc-800 text-zinc-400">
			<h2 class="font-black text-xl uppercase mb-2 text-white">/// UPDATES</h2>
			<p class="text-sm font-bold mb-4">Welcome to the Yard Sale. Expect turbulence.</p>
		</div>

	</aside>
	
	<div class="flex-1 h-full overflow-y-auto bg-[#8A9A5B] flex flex-col relative">
		<!--Middle column, main page-->
		
			<nav class="flex p-4 gap-4 border-black bg-[#8A9A5B] sticky top-0 z-20">
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
	</div>
		<!--Right margin graphic
		<div class="flex-1 bg-[url('/bg_1.jpeg')] bg-cover bg-left bg-no-repeat -scale-x-100"></div>-->


