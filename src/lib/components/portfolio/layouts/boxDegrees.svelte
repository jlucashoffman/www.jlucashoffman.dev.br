<script lang="ts">
    import Box from "../box.svelte";

    interface IDegree {
        course: string,
        university: string,
        year: number
    }

    const degrees: IDegree[] = [
        {
            course: "Bacharel em Ciência da Computação",
            university: "UFBRA",
            year: 2029
        },
        {
            course: "Tecnólogo em Segurança Cibernética",
            university: "UNICESUMAR",
            year: 2026
        }
    ]

</script>

{#snippet degree(d: IDegree)}
    <div class="box-degree">
        <strong>{d.course}</strong>
        <p>{d.university} <span>{d.year}</span></p>
    </div>    
{/snippet}

<Box pad="xl">
    <div class="box-area">
        <h2>graduações</h2>
        <div class="box-degrees">
            {#each degrees as deg}
                {@render degree(deg)}
            {/each}
        </div>
    </div>
</Box>

<style>
    .box-area {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);

        & .box-degrees {
            display: flex;
            flex-direction: column;
            gap: var(--space-lg);

            position: relative;

            &::before {
                content: '';
                display: block;
                position: absolute;
                z-index: 1;
                left: calc(var(--space-md) * -1 - var(--space-sm) / 2);
                transform: translateX(-50%);
                width: 1px;
                height: 100%;
                background-color: var(--color-text-important);
                mix-blend-mode: overlay;
            }
        }

        & .box-degree {
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
            

            & strong {
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: calc(var(--space-md) * -1);
                    transform: translate(-100%, -50%);
                    display: block;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    width: var(--space-sm);
                    background-color: var(--color-text-important);
                    box-shadow: 0px 0px 10px 1px var(--color-text-important);
                }
            }

            & p {
                display: flex;
                gap: var(--space-sm);
                font-weight: bold;

                & span {
                    color: var(--color-text-secundary);
                    font-weight: normal;
                }
            }
        }
    }
</style>