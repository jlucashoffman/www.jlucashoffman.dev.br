<script lang="ts">
    import Box from "../box.svelte";

    interface ILang {
        lang: string,
        level: string
    }

    const languages: ILang[] = [
        {
            lang: "Português",
            level: "Nativo"
        },
        {
            lang: "Inglês",
            level: "C1"
        }
    ]

</script>

{#snippet lang(l:ILang)}
    <div class="box-lang">
        <p>
            <strong>{l.lang}</strong>
            {l.level}
        </p>
        <hr>
    </div>
    
{/snippet}
<Box pad="lg">
    <div class="box-area">
        <h2>línguas</h2>
        {#each languages as l}
            {@render lang(l)}
        {/each}
    </div>
</Box>

<style>
    .box-area {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);

        & .box-lang p {
            display: flex;
            justify-content: space-between;
            gap: var(--space-md);
        }

        & .box-lang hr {
            mix-blend-mode: overlay;
        }
    }
</style>