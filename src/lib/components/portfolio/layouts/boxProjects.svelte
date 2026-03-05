<script lang="ts">
    import Box from "../box.svelte";

    interface IProject {
        name: string,
        stars: number
    }

    const projects: IProject[] = []

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
            
            {#if projects.length > 0}
                {#each projects as p}
                    {@render project(p)}
                {/each}
            {:else}
                <em>Nada ainda!</em>
            {/if}
        </div>
        {#if projects.length > 0}
            <a href="">Clique aqui para ver mais projetos</a>
        {/if}
    </div>
</Box>

<style>
    .box-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-lg);

        @media screen and (max-width:900px) {
            & h2 {
                width: 100%;
                text-align: left;
            }
        }

        & .box-projects {
            display: grid;
            grid-template-columns: repeat(3, auto);
            gap: var(--space-md);
            width: 100%;

            @media screen and (max-width:1024px) {
                grid-template-columns: repeat(2, auto);
            }

            @media screen and (max-width:750px) {
                grid-template-columns: repeat(1, auto);
            }

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