<script lang="ts">
    import type { space_sizes } from "$lib";
    import type { Snippet } from "svelte";

    let {children, pad="md", rad="md", className}:{children: Snippet, pad?: space_sizes, rad?: space_sizes, className?:string} = $props();
</script>

<div class={[`box-pad-size-${pad}`, `box-rad-size-${rad}`, "box-container", className].join(" ")}>
    <div class="box-content">
        {@render children?.()}
    </div>
    <div class="box-border"></div>
</div>

<style>
    .box-container {
        &:is(.box-pad-size-xs) { --box-padding: var(--space-xs); }
        &:is(.box-pad-size-sm) { --box-padding: var(--space-sm); }
        &:is(.box-pad-size-md) { --box-padding: var(--space-md); }
        &:is(.box-pad-size-lg) { --box-padding: var(--space-lg); }
        &:is(.box-pad-size-xl) { --box-padding: var(--space-xl); }

        &:is(.box-rad-size-xs) { --box-radius: var(--space-xs); }
        &:is(.box-rad-size-sm) { --box-radius: var(--space-sm); }
        &:is(.box-rad-size-md) { --box-radius: var(--space-md); }
        &:is(.box-rad-size-lg) { --box-radius: var(--space-lg); }
        &:is(.box-rad-size-xl) { --box-radius: var(--space-xl); }
       

        --border-weight: 1px;
        --border-color: oklch(1 0 0);

        position: relative;
        width: 100%;

        border-radius: calc(var(--box-radius) + var(--border-weight));

        & .box-content {
            display: flex;
            position: relative;
            padding: var(--box-padding);
            inset: var(--border-weight);
            border-radius: calc(var(--box-radius) + var(--border-weight));
            background-color: var(--color-box-bg);

            & :global(.box-area) {
                width: 100%;
            }
        }

        & .box-border {
            position: absolute;
            inset: var(--border-weight);
            border-radius: calc(var(--box-radius) + var(--border-weight));
            background: var(--border-color);
            mix-blend-mode: overlay;
            pointer-events: none;
            
            -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: exclude;
            mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            mask-composite: exclude;
            
            padding: var(--border-weight);
        }
    }

    
</style>