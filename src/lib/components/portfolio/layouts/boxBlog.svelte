<script lang="ts">
    import Box from "../box.svelte";

    interface IBlog {
        name: string,
        date: string
    }

    const posts: IBlog[] = []

</script>

{#snippet post(p: IBlog)}
    <Box pad="lg" rad="sm">
        <article class="box-post">
            <h3>{p.name}</h3>
            <p>{p.date}</p>
        </article>
    </Box>
{/snippet}

<Box pad="xl" className="seeker_mask">
    <div class="box-area ">
        <h2>blog</h2>
        <div class="box-posts">
        {#if posts.length > 0}
            {#each posts as p}
                {@render post(p)}
            {/each}
        {:else}
            <em>Nada ainda!</em>
        {/if}
            
        </div>
        {#if posts.length > 0}
            <a href="">Clique aqui para ver mais publicações no blog</a>
        {/if}
    </div>
</Box>

<style>
    .box-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-lg);

        & .box-posts {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
            width: 100%;

            & .box-post {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: var(--space-sm);
                width: 100%;
            }
        }

        & a {
            width: 100%;
            text-align: left;
        }
    }
</style>