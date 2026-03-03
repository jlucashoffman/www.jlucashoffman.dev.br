<script lang="ts">
    import { onMount } from "svelte";

    interface IRectMask {
        rect: DOMRect;
        radius: string;
    }

    const classMask = ".seeker_mask";
    let elements:HTMLElement[];
    let masks:IRectMask[];

    onMount(() => {
        elements = Array.from(document.querySelectorAll<HTMLElement>(classMask));
        masks = elements.map(el => {
            const rect = el.getBoundingClientRect();

            return {
                rect: new DOMRect(
                    rect.x + window.scrollX,
                    rect.y + window.scrollY,
                    rect.width,
                    rect.height
                ),
                radius: getComputedStyle(el).borderRadius
            };
        });
    })
</script>

{#snippet rectangle(bound:DOMRect, rad:string)}
    <rect 
    x={bound.x} 
    y={bound.y} 
    width={bound.width} 
    height={bound.height}
    rx={rad.slice(0, -2)}
    fill="#ffffff" />
{/snippet}

<svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg_mask">
    {#each masks as m}
        {@render rectangle(m.rect, m.radius)}
    {/each}
</svg>

<style>
    #svg_mask {
        display: block;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>