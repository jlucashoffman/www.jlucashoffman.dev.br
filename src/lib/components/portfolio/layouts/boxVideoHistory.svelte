<script lang="ts">
    import Box from '../box.svelte';

    interface IVideo {
        head: string,
        url: string
    }

    const videos: IVideo[] = []
</script>

{#snippet videoCard(v: IVideo)}
    <a href={v.url} class="box-area">
        <Box pad="lg" rad="sm" className="seeker_mask">
            <p>{v.head}</p>
        </Box>
    </a>
{/snippet}

<div class="box-history">
    <h2>últimos vídeos</h2>
    <div class="box-videos">
        {#if videos.length > 0}
            {#each videos as v}
                {@render videoCard(v)}
            {/each}
        {:else}
            <em>Nada ainda!</em>
        {/if}
        
    </div>
</div>

<style>
    .box-history {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        width: 100%;

        & .box-videos {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
        }
    }
</style>