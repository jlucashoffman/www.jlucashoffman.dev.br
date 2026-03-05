<script lang="ts">
    import Box from "../box.svelte";
    import BoxLinkButton from "./boxLinkButton.svelte";

    interface ISocial {
        icon: string
        url: string
    }

    const social_medias: ISocial[] = []

</script>

<Box pad="lg" className="seeker_mask">
    <div class="box-area">
        <h2>redes sociais</h2>
        <div class="box-social_medias">
        
        {#if social_medias.length > 0}
            {#each social_medias as sm}
                <BoxLinkButton icon={sm.icon} url={sm.url} />
            {/each}
        {:else}
            <em>Nada ainda!</em>
        {/if}
        </div>
    </div>
</Box>

<style>
    .box-area {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);

        & .box-social_medias {
            display: grid;
            grid-template-columns: repeat(5, auto);
            gap: var(--space-sm);
            width: fit-content;
        }
    }
</style>