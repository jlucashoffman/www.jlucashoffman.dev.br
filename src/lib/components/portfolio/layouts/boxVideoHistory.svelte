<script lang="ts">
    import Box from '../box.svelte';

    interface IVideo {
        head: string,
        url: string
    }

    const videos: IVideo[] = [
        {
            head: "Headline de vídeo",
            url: "http"
        },
        {
            head: "Headline de vídeo 2",
            url: "http"
        },
        {
            head: "Headline de vídeo 3",
            url: "http"
        }
    ]
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
        {#each videos as v}
            {@render videoCard(v)}
        {/each}
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