<script lang="ts">
    import { onMount } from "svelte";

    interface IRectMask {
        rect: DOMRect;
        radius: number;
    }

    const classMask = ".seeker_mask";
    let elements: HTMLElement[] = [];
    let masks = $state<IRectMask[]>([]); 
    let observer: ResizeObserver;
    let rafId: number;

    function parseRadiusToPixels(borderRadius: string, width: number): number {
        const firstValue = borderRadius.split(' ')[0]; 

        if (firstValue.includes('%')) {
            const percent = parseFloat(firstValue);
            return (percent / 100) * width;
        }

        return parseFloat(firstValue) || 0;
    }

    function updateMasks() {
        masks = elements.map(el => {
            const rect = el.getBoundingClientRect();
            const computedStyle = getComputedStyle(el);
            
            return {
                rect: new DOMRect(
                    rect.x + window.scrollX,
                    rect.y + window.scrollY,
                    rect.width,
                    rect.height
                ),
                radius: parseRadiusToPixels(computedStyle.borderRadius, rect.width)
            };
        });
    }

    function handleResize() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updateMasks);
    }

    onMount(() => {
        elements = Array.from(document.querySelectorAll<HTMLElement>(classMask));
        updateMasks();

        observer = new ResizeObserver(handleResize);
        elements.forEach(el => observer.observe(el));
        observer.observe(document.body);

        return () => {
            if (observer) observer.disconnect();
            if (rafId) cancelAnimationFrame(rafId);
        };
    });
</script>

{#snippet rectangle(bound: DOMRect, rad: number)}
    <rect 
        x={bound.x} 
        y={bound.y} 
        width={bound.width} 
        height={bound.height}
        rx={rad}
        fill="#ffffff" 
    />
{/snippet}

<svg xmlns="http://www.w3.org/2000/svg" id="svg_mask">
    <defs>
        <mask id="svg_mask-image">
            {#each masks as m}
                {@render rectangle(m.rect, m.radius)}
            {/each}
        </mask>
    </defs>
</svg>

<style>
    #svg_mask {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>