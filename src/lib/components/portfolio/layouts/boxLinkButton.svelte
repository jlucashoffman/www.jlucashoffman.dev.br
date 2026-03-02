<script lang="ts">
    import type { space_sizes } from "$lib";
    import BoxIcon from "./boxIcon.svelte";

    let {size="sm", icon, url}:{size?:space_sizes, icon:string, url:string} = $props();
</script>

<a href={url} class={["box-icon_link", `box-icon_link-size-${size}`].join(" ")}>
    <BoxIcon {icon} />
</a>
<style>
    a {
        width: fit-content;
        display: flex;
    }
</style>