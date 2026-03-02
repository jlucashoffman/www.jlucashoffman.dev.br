<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faInstagram } from "@fortawesome/free-brands-svg-icons";
    import Box from "../box.svelte";
    import type { space_sizes } from "$lib";

    let { size = "sm", icon }: { size?: space_sizes; icon?: string } = $props();

    const iconMap = {
        instagram: faInstagram,
    } as const;

    const selectedIcon = $derived(
        icon ? iconMap[icon as keyof typeof iconMap] : undefined
    );
</script>

<Box pad={size} rad="sm">
    <div>
        {#if selectedIcon}
            <FontAwesomeIcon icon={selectedIcon} size="2x" />
        {/if}
    </div>
</Box>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1;
    }
</style>