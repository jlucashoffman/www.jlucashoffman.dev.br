<script lang="ts">
    import type { Snippet } from "svelte";

    let {children}:{children: Snippet} = $props();
</script>

<div class="box-container">
    <div class="box-border"></div>
    <div class="box-content">
        {@render children?.()}
    </div>
</div>

<style>
    .box-container {
        --box-padding: var(--space-md);

        --border-weight: 1px;
        --border-color: oklch(1 0 0);

        position: relative;

        & .box-content {
            background-color: var(--color-box-bg);
            padding: var(--box-padding);
            border-radius: calc(var(--box-padding) + var(--border-weight));
            z-index: 0;
        }

        & .box-border {
            position: absolute;
            inset: var(--border-weight);
            border-radius: calc(var(--box-padding) + var(--border-weight));
            background: var(--border-color);
            z-index: 1;
            mix-blend-mode: overlay;
            
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