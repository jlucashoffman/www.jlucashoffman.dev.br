<script lang="ts">
    import Box from "../box.svelte";

    interface IBlog {
        name: string,
        date: string
    }

    const posts: IBlog[] = [
        {
            name: "headline de publicação",
            date: "15/12/2026"
        },
        {
            name: "headline de publicação",
            date: "15/12/2026"
        },
        {
            name: "headline de publicação",
            date: "15/12/2026"
        }
    ]

</script>

{#snippet post(p: IBlog)}
    <Box pad="lg" rad="sm">
        <article class="box-post">
            <h3>{p.name}</h3>
            <p>{p.date}</p>
        </article>
    </Box>
{/snippet}

<Box pad="xl">
    <div class="box-area">
        <h2>blog</h2>
        <div class="box-posts">
            {#each posts as p}
                {@render post(p)}
            {/each}
        </div>
        <a href="">Clique aqui para ver mais publicações no blog</a>
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