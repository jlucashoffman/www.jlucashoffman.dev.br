<script lang="ts">
    import Box from "../box.svelte";

    interface IProject {
        name: string,
        stars: number
    }

    const projects: IProject[] = [
        {
            name: "projeto",
            stars: 100
        },
        {
            name: "projeto 2",
            stars: 100
        },
        {
            name: "projeto 3",
            stars: 100
        },
        {
            name: "projeto 4",
            stars: 100
        },
        {
            name: "projeto 5",
            stars: 100
        }
    ]

</script>

{#snippet project(p: IProject)}
    <Box pad="lg" rad="sm">
        <div class="box-project">
            <strong>{p.name}</strong>
            <p>
                <span class="material-symbols-rounded">favorite</span>
                {p.stars}
            </p>
        </div>
    </Box>
{/snippet}

<Box pad="xl" className="seeker_mask">
    <div class="box-area">
        <h2>projetos</h2>
        <div class="box-projects">
            {#each projects as p}
                {@render project(p)}
            {/each}
        </div>
        <a href="">Clique aqui para ver mais projetos</a>
    </div>
</Box>

<style>
    .box-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-lg);

        & .box-projects {
            display: grid;
            grid-template-columns: repeat(3, auto);
            gap: var(--space-md);
            width: 100%;

            & .box-project {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: var(--space-sm);
                width: 100%;

                & p {
                    display: flex;
                    gap: var(--space-xs);
                    align-items: center;
                }
            }
        }

        & a {
            width: 100%;
            text-align: left;
        }
    }
</style>