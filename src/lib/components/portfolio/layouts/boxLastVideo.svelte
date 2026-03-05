<script lang="ts">
    import Box from "../box.svelte";

    const videoUrl = ""
</script>
<Box rad="xs">
    {#if videoUrl != ""}
        <iframe src={videoUrl} title="Meu último vídeo publicado" frameborder="0"></iframe>
    {/if}
    
</Box>

<style>
    iframe {
        aspect-ratio: 16/9;
    }
</style>
