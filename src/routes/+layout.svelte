<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';


	// script to change nav bar for mobile
	let scrollY = $state(0);
	let lastY = $state(0);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let isNavHidden = $state(false);

	// if scrollY increases, user is scrolling down
	$effect(() => {
		if (scrollY > lastY && scrollY > 50) {
			isNavHidden = true; // hide when scrolling down
		} else if (scrollY < lastY) {
			isNavHidden = false; // show when scrolling up
		}
		lastY = scrollY;
	});

	let { children } = $props();
</script>

<svelte:window bind:scrollY />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<!--{@render children()}-->

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
	
	<div class="flex-1 h-full overflow-y-auto bg-[#0f0f0f] flex flex-col relative text-zinc-200">
		<!--Middle column, main page-->


		<div class="sticky top-0 z-20 bg-[#0f0f0f] border-b-4 border-zinc-800">

			<div class="flex justify-between items-center p-3 text-xs md:text-sm font-bold text-zinc-500 border-b-2 border-zinc-800 bg-[url('/brushed_metal.png')] bg-repeat bg-[length:300px]">
				<div class="relative inline-block">

					<img
						src="/baseball-bat-3.png"
						alt="Yard Sale Bat Logo"
						class="h-12 md:h-16 w-auto object-contain"
					/>
					<!--<img
						src="/yard-sale-cd.png"
						alt="Yard Sale Bat Logo"
						class="h-12 md:h-24 w-auto object-contain"
					/>-->

					<a
						href={resolve('/')}
						class="absolute inset-0 z-10 cursor-pointer block"
						aria-label="Return to home"
						title="Home"
					></a>
					<!--<span class="tracking-widest">SYS_ONLINE</span>-->
				</div>
				
				<!--placeholder buttons for search bar and account-->
				
				<div class="flex items-center space-x-6 shrink-0">
    
					<button class="group relative w-8 h-8 flex items-center justify-center cursor-pointer overflow-hidden">
						
						<img 
							src="/red-button-idle.png" 
							alt="" 
							class="absolute inset-0 w-full h-full object-cover block group-hover:hidden z-0" 
						/>
						<img 
							src="/red-button-clicked.png" 
							alt="" 
							class="absolute inset-0 w-full h-full object-cover hidden group-hover:block z-0" 
						/>
						
						<span class="relative z-10 text-zinc-300 group-hover:text-white font-black text-sm uppercase tracking-widest transition-colors">
							🔍
						</span>
					</button>
				
					<button class="group relative w-8 h-8 flex items-center justify-center cursor-pointer overflow-hidden">
						
						<img 
							src="/red-button-idle.png" 
							alt="" 
							class="absolute inset-0 w-full h-full object-cover block group-hover:hidden z-0" 
						/>
						<img 
							src="/red-button-clicked.png" 
							alt="" 
							class="absolute inset-0 w-full h-full object-cover hidden group-hover:block z-0" 
						/>
						
						<span class="relative z-10 text-zinc-300 group-hover:text-white font-black text-sm uppercase tracking-widest transition-colors">
							♟
						</span>
					</button>
				
				</div>
			</div>
		

			<nav class="
				fixed bottom-0 left-0 w-full max-w-[100vw] z-50
				md:static md:w-auto
				flex justify-center space-x-3 sm:space-x-6 md:space-x-12
				border-y-2 border-zinc-800 bg-black/80 md:bg-black backdrop-blur-md md:backdrop-blur-none
				py-3 md:py-4 px-2
				transition-transform duration-500 ease-in-out
				{isNavHidden ? 'translate-y-full md:translate-y-0' : 'translate-y-0'}
			"> <!--{isNavHidden ? 'translate-y-full md:translate-y-0' : 'translate-y-0'}">-->
				<a href={resolve('/')} class="group flex items-center font-black text-xs sm:text-sm md:text-xl transition-colors duration-300 cursor-pointer { page.url.pathname === '/' ? 'text-white' : 'text-zinc-500 hover:text-white' }">
					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/' ? '-translate-x-1 md:-translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:-translate-x-1 md:group-hover:-translate-x-2 group-hover:text-[#DFFF00]' }">[</span>
					
					<span class="mx-2 md:mx-3 tracking-widest">HOME</span>

					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/' ? 'translate-x-1 md:translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:text-[#DFFF00]' }">]</span>
				</a>

				<a href={resolve('/watch')} class="group flex items-center font-black text-xs sm:text-sm md:text-xl transition-colors duration-300 cursor-pointer { page.url.pathname === '/watch' ? 'text-white' : 'text-zinc-500 hover:text-white' }">
					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/watch' ? '-translate-x-1 md:-translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:-translate-x-1 md:group-hover:-translate-x-2 group-hover:text-[#DFFF00]' }">[</span>
					
					<span class="mx-2 md:mx-3 tracking-widest">VIDEOS</span>

					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/watch' ? 'translate-x-1 md:translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:text-[#DFFF00]' }">]</span>
				</a>

				<a href={resolve('/shop')} class="group flex items-center font-black text-xs sm:text-sm md:text-xl transition-colors duration-300 cursor-pointer { page.url.pathname === '/shop' ? 'text-white' : 'text-zinc-500 hover:text-white' }">
					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/shop' ? '-translate-x-1 md:-translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:-translate-x-1 md:group-hover:-translate-x-2 group-hover:text-[#DFFF00]' }">[</span>
					
					<span class="mx-2 md:mx-3 tracking-widest">SHOP</span>

					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/shop' ? 'translate-x-1 md:translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:text-[#DFFF00]' }">]</span>
				</a>

				<a href={resolve('/archive')} class="group flex items-center font-black text-xs sm:text-sm md:text-xl transition-colors duration-300 cursor-pointer { page.url.pathname === '/archive' ? 'text-white' : 'text-zinc-500 hover:text-white' }">
					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/archive' ? '-translate-x-1 md:-translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:-translate-x-1 md:group-hover:-translate-x-2 group-hover:text-[#DFFF00]' }">[</span>
					
					<span class="mx-2 md:mx-3 tracking-widest">ARCHIVE</span>

					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/archive' ? 'translate-x-1 md:translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:text-[#DFFF00]' }">]</span>
				</a>
			</nav>




			<!--<<nav class="flex p-4 border-black bg-[#0f0f0f] sticky top-0 z-20">
				<a href={resolve('/')} class="flex-1 border-r-4 border-black p-2 hover:bg-black hover:text-[#DFFF00] font-bold text-center">
					[ HOME ]
				</a>
				<a href={resolve('/watch')} class="flex-1 border-r-4 border-black p-2 hover:bg-black hover:text-white font-bold text-center">
					[ VIDEOS ]
				</a>
				<a href={resolve('/shop')} class="flex-1 p-2 hover:bg-black hover:text-white font-bold text-center">
					[ SHOP ]
				</a>
			</nav>>-->
		</div>
			<div class="relative w-full max-w-[100vw] overflow-x-hidden min-h-screen">
				{@render children()}
			</div>
		
		</div>
	</div>
		<!--Right margin graphic
		<div class="flex-1 bg-[url('/bg_1.jpeg')] bg-cover bg-left bg-no-repeat -scale-x-100"></div>-->


