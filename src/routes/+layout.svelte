<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { fade, fly } from 'svelte/transition';


	// script to change nav bar for mobile
	let scrollY = $state(0);
	let lastY = $state(0);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let isNavHidden = $state(false);
	let isMenuOpen = $state(false);


	// if scrollY increases, user is scrolling down
	$effect(() => {
		if (scrollY > lastY && scrollY > 50) {
			isNavHidden = true; // hide when scrolling down
		} else if (scrollY < lastY) {
			isNavHidden = false; // show when scrolling up
		}
		lastY = scrollY;
	});

	//function to extract page title from the url
	let pageTitle = $derived(() => {
		const path = page.url.pathname;
		if (path === '/') return '';
		const cleaned = path.replace('/', '').toUpperCase();
		return `${cleaned}`;
	});

	let { children } = $props();
</script>

<svelte:window bind:scrollY />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<!--{@render children()}-->

{#if isMenuOpen}
    <!-- Dark backdrop that closes the menu when clicked -->
    <div
        transition:fade={{ duration: 300 }}
        class="fixed inset-0 bg-black/40 z-60"
        onclick={() => isMenuOpen = false}
        aria-hidden="true"
    ></div>

    <!-- The menu sidebar -->
    <aside
        transition:fly={{ x: -300, duration: 400, opacity: 1 }}
        class="fixed top-0 left-0 w-3/4 max-w-[320px] h-screen bg-[#0f0f0f] border-r-4 border-zinc-800 z-70 p-8 flex flex-col"
    >
        
		<!--background img-->
		<div
			class="absolute inset-0 bg-cover bg-center z-0 opacity-40"
			style="background-image: url('/YDS-guy.jpeg'); filter: invert(100%);"
		></div>
		<div class="absolute inset-0 bg-black/60 z-0"></div>

		<div class="relative z-10 flex flex-col h-full">
        <h2 class="text-2xl md:text-4xl font-tanker text-red-600/80 tracking-tighter mix-blend-screen drop-shadow-lg mb-8">
            YARD SALE
        </h2>
        <nav class="flex flex-col space-y-4">
            <a onclick={() => isMenuOpen = false} href={resolve('/')} class="font-black text-xl md:text-2xl text-zinc-400 hover:text-red-600 transition-colors tracking-tight">HOME</a>
            <a onclick={() => isMenuOpen = false} href={resolve('/watch')} class="font-black text-xl md:text-2xl text-zinc-400 hover:text-red-600 transition-colors tracking-tight">VIDEOS</a>
            <a onclick={() => isMenuOpen = false} href={resolve('/shop')} class="font-black text-xl  md:text-2xl text-zinc-400 hover:text-red-600 transition-colors tracking-tight">SHOP</a>
            <a onclick={() => isMenuOpen = false} href={resolve('/archive')} class="font-black text-xl md:text-2xl text-zinc-400 hover:text-red-600 transition-colors tracking-tight">ARCHIVE</a>
        </nav>
		</div>
    </aside>
{/if}

<button
	onclick={() => isMenuOpen = true}
	class="fixed top-6 left-6 md:top-8 md:left-8 z-50 font-tanker text-xl md:text-2xl text-zinc-400 hover:text-red-600 tracking-[0.1em] uppercase transition-colors cursor-pointer"
>
	MENU
</button>

<!--full window, black screen-->
<div class="flex w-full max-w-[100vw] min-h-screen overflow-hidden bg-black">
	<!--<div class="crt-overlay hidden md:block"></div>-->
	<!--Left margin graphic-->
	<!--<div class="flex-1 bg-[url('/yard_sale_1.jpeg')] bg-cover bg-top bg-repeat"></div>-->
	<!--<aside class="w-1/6 h-full overflow-y-auto border-r-4 border-zinc-800 bg-black relative hidden md:block shrink-0">
		

		<div class="p-4 border-t-2 border-zinc-800 text-zinc-400">
			<h2 class="font-black text-xl uppercase mb-2 text-white">/// UPDATES</h2>
			<p class="text-sm font-bold mb-4">Welcome to the Yard Sale. Expect turbulence.</p>
		</div>

	</aside>-->
	
	<div class="flex-1 h-full overflow-y-auto bg-[#0f0f0f] flex flex-col relative text-zinc-200 transition-all duration-500 ease-out {isMenuOpen ? 'invert blur-[2px] pointer-events-none' : ''}">
		
		
		{#if page.url.pathname !== '/'}

<!-- GLOBAL STICKY HEADER -->
<div class="sticky top-4 z-20 bg-[#0f0f0f] flex items-center justify-between px-6 py-2 md:px-10">
	<!-- Left side spacing or home back link can go here -->
	<div class="w-16"></div>

	<!-- Sleek Dynamic Page Title -->
		<h1 class="font-tanker text-xl md:text-2xl text-white tracking-tighter uppercase">
			{pageTitle()}
		</h1>

	

	<!-- Right side placeholder or action buttons -->
	<div class="w-16"></div>
</div>
{/if}
			
				
			<div class="relative w-full max-w-[100vw] overflow-x-hidden min-h-screen">
				{@render children()}
			</div>
		
	</div>
</div>
		<!--Right margin graphic
		<div class="flex-1 bg-[url('/bg_1.jpeg')] bg-cover bg-left bg-no-repeat -scale-x-100"></div>-->


