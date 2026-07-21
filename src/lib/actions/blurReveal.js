
/**
 * @typedef {Object} BlurRevealOptions
 * @property {number} [maxDistance] - Distance, in pixels, from center screen.
 * @property {number} [maxBlur] - Maximum blur amount in pixels.
 * @property {number} [focusZone] - Zone where the element stays in focus.
 */

/**
 * @param {HTMLElement} node - The HTML element to apply the effect to.
 * @param {BlurRevealOptions} [options={}] - Configuration options for the effect.
 */
export function blurReveal(node, options = {}) {
    const {
        maxDistance = 300, //distance, in pixles, from center screen
        maxBlur = 24, //maximum blur amount in pixels
        focusZone = 150 //zone where element stays in focus
    } = options;

    function update() {
        const rect = node.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;

        //find the vertical center of the HTML element
        const elementCenter = rect.top + (rect.height / 2);

        //find absolute distance from the center of the screen
        const distance = Math.abs(viewportCenter - elementCenter);

        const adjustedDistance = Math.max(0, distance - focusZone);
        const fadeZone = maxDistance - focusZone;

        //normalize distance (0-1)
        //0 - perfect center, 1 - touching the screen border(max distance limit)
        let progress = 0;
        if (fadeZone > 0) {
            progress = adjustedDistance / fadeZone;
        }

        //map progress value to opacity
        const opacity = 1 - progress;

        //map progress value to blur
        const blurAmount = progress * maxBlur;

        //map progress to a slight y-axis push (0px at center, 48px at edges)
        const yOffset = progress * 48;

        //apply calculate style to the element at compile time
        node.style.filter = `blur(${blurAmount}px)`;
        node.style.opacity = opacity.toString();
        node.style.transform = `translateY(${yOffset}px)`;
    }

    let ticking = false;
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                update();
                ticking = false;
            });
            ticking = true;
        }
    }

    //run once on load to set the initial blur
    update();

    window.addEventListener('scroll', onScroll, { passive : true });
    window.addEventListener('resize', onScroll, { passive : true });

    return {
        destroy() {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        }
    };
}
/*export function blurReveal(node, options = {}) {

    const {
        threshold = 0.5, //50% of the element must be visible to trigger
        retrigger = true, //true=reblur when scorlling away, false=visible forever
    } = options;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                //when the element scrolls into view:
                // remove blur classes
                node.classList.remove('blur-2xl', 'opacity-0', 'translate-y-12');
                // add visible classes
                node.classList.add('blur-none', 'opacity-100', 'translate-y-0');

                if (!retrigger) {
                    observer.unobserve(node);
                }
            } else if (retrigger) {
                //when the element scrolls out of view:
                // remove visible classes
                node.classList.remove('blur-none', 'opacity-100', 'translate-y-0');
                // re-add blur classes
                node.classList.add('blur-2xl', 'opacity-0', 'translate-y-12');
            }
        });
    }, {
        // the observer uses the threshold
        threshold: threshold
    });
    
    // apply transition timings here, to avoid adding to each element manually
    node.classList.add('transition-all', 'duration-[1500ms]', 'ease-out');

    //make observer watch this element
    observer.observe(node);

    //required to prevent memory leaks when the element is removed from the page.
    return {
        destroy() {
            observer.disconnect();
        }
    };
}*/