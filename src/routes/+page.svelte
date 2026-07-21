

<script>
    import { blurReveal } from '$lib/actions/blurReveal.js';
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';

    let scrollY = $state(0);
    let innerHeight = $state(0);

    // This dynamically calculates if we have scrolled past 90% of the screen height
    let showStickyLogo = $derived(scrollY > innerHeight * 0.9);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<!-- This logo is completely hidden until the user scrolls past the hero section -->
{#if showStickyLogo}
    <div transition:fade={{ duration: 400 }} class="fixed top-6 left-6 md:top-8 md:left-8 z-50 pointer-events-none">
        <h2 class="text-2xl md:text-4xl font-black text-red-600/80 tracking-tighter mix-blend-screen drop-shadow-lg">
            YARD SALE
        </h2>
    </div>
{/if}

<div class="relative w-full bg-black">
    
    <!-- SECTION 1: THE HERO (Exactly 100% of the viewport height) -->
    <div class="relative w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center">
        
        <!-- The Background Woods Image -->
        <!-- Fallback dark gradient just in case the image loads slowly -->
        <div class="absolute inset-0 bg-zinc-900 z-0">
            <!-- CHANGED: Removed mix-blend-luminosity so the image is in full color -->
            <img src="/woods.jpeg" alt="The Woods" class="w-full h-full object-cover opacity-80" />
        </div>

        <!-- NEW: Cinematic Vignette Overlay -->
        <div class="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,transparent_25%,transparent_75%,rgba(0,0,0,1)_100%)]"></div>

        <!-- TV Static Overlay (Generated via SVG Data URI) -->
        <div class="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay z-10" style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;);"></div>
        
        <!-- Massive Translucent Title -->
        <!-- CHANGED: Removed global CRT overlay. Added 'blur-[2px]' for soft optical edges, and 'scanline-text' for moving lines -->
        <h1 class="relative z-20 text-[20vw] sm:text-8xl md:text-[14rem] font-black text-red-600 tracking-[-0.1em] sm:tracking-[-0.15em] mix-blend-screen leading-none text-center select-none blur-[1px] md:blur-[2px] scanline-text">
            YARD SALE
        </h1>

        <!-- Continue Prompt -->
        <div class="absolute bottom-6 z-20 flex flex-col items-center animate-pulse opacity-70">
            <span class="text-[10px] md:text-xs font-mono text-white tracking-[0.3em] uppercase mb-3">continue</span>
        </div>

        <!--<div class="fixed bottom-10 left-10 z-20 flex flex-col items-left opacity-70">
            <h2 class="text-[10px] md:text-xl font-black text-red-600/80 tracking-tighter mix-blend-screen drop-shadow-lg">
                worth the wait.
            </h2>
        </div>-->

    </div>

    <!-- SECTION 2: THE DEEP SCROLL (Where the blur reveal happens) -->
    <div class="w-full min-h-[120vh] flex flex-col items-center justify-center space-y-16 px-4 pb-32">
        
        <h2 
            use:blurReveal={{ maxDistance: 400, maxBlur: 24 }} 
            class="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase text-center will-change-[filter,opacity,transform]"
        >
            Short Films <br/>
            <span class="text-zinc-600 text-3xl md:text-6xl">Coming Soon.</span>
        </h2>

        <!-- The Archive Button -->
        <a 
            href={resolve('/archive')}
            use:blurReveal={{ maxDistance: 300, maxBlur: 16 }} 
            class="group relative flex flex-col items-center will-change-[filter,opacity,transform] cursor-pointer"
        >
            <span class="text-xl md:text-3xl font-black text-red-600/80 tracking-widest uppercase transition-colors duration-500 group-hover:text-white">
                [ View The Archive ]
            </span>
            <!-- A cinematic underline that grows on hover -->
            <div class="absolute -bottom-2 w-0 h-[2px] bg-white transition-all duration-700 ease-out group-hover:w-full"></div>
        </a>

    </div>

</div>

<!--<script lang="ts">
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
</script>


<div class="min-h-[80vh] w-full flex items-center justify-center p-6">

    <div class="relative w-full max-w-4xl py-12 md:py-0 md:aspect-video border-4 border-zinc-800 bg-zinc-950 shadow-[8px_8px_0px_0px_rgba(39,39,42,1)] md:shadow-[16px_16px_0px_0px_rgba(39,39,42,1)] overflow-hidden flex flex-col items-center justify-center group">

        <div class="absolute inset-0 bg-[url('/rusty_1.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-1000"></div>

        <div class="absolute inset-0 pointer-events-none opacity-20 z-0" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px):"></div>

        <div class="relative z-10 flex flex-col items-center bg-black/70 backdrop-blur-sm border-2 border-zinc-700 p-4 md:p-16 max-w-[80%]">
            
            <div class="flex items-center space-x-2 mb-4 md:mb-6 border-b-2 border-zinc-800 pb-4 w-full justify-center">
                <div class="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                <span class="text-red-500 font-bold mx-1 tracking-widest text-[10px] md:text-sm uppercase">[ SITE STATUS: EARLY DEVELOPMENT ]</span>
                
                <a href={resolve('/archive')} class="group flex items-center font-black text-[10px] md:text-sm transition-colors duration-300 cursor-pointer { page.url.pathname === '/archive' ? 'text-white' : 'text-zinc-500 hover:text-white' }">
					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/archive' ? '-translate-x-1 md:-translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:-translate-x-1 md:group-hover:-translate-x-2 group-hover:text-[#DFFF00]' }">[</span>
					
					<span class="mx-1 tracking-widest">VIEW MEDIA ARCHIVE</span>

					<span class="inline-block transition-transform duration-500 ease-out { page.url.pathname === '/archive' ? 'translate-x-1 md:translate-x-2 text-[#DFFF00]' : 'text-zinc-600 group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:text-[#DFFF00]' }">]</span>
				</a>  
                       
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 text-center leading-none">
                Yard Sale
            </h1>

            <div class="w-full bg-zinc-900/80 border border-zinc-800 p-3 md:p-4 mt-2">
            <p class="font-mono text-zinc-400 text-[10px] sm:text-xs md:text-sm leading-relaxed break-words">
                > root@yard-sale.tv:~# <br>
                > Site under development. <br>
                > Archive available <br>
                > <span class="text-white bg-zinc-800 px-1 animate-pulse">Awaiting pure, unfiltered inspiration...</span>
            </p></div>

        </div>
    </div>
</div>
-->
