<script lang="ts">
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