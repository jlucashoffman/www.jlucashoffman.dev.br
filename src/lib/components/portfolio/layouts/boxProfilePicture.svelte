<script lang="ts">
    import Box from "../box.svelte";

</script>
<Box pad="sm" rad="sm">
    <img id="profile_pic-pic" src="assets/pic.webp" alt="Foto em perfil de João Lucas Hoffman com contraste de sombras em seu rosto.">
</Box>

<style>
    :global(.box-container:has(#profile_pic-pic)) {
        width: fit-content !important;
        height: fit-content;
    }

    img {
        aspect-ratio: 1;
        width: 64px;
        border-radius: var(--space-xs);
    }
</style>