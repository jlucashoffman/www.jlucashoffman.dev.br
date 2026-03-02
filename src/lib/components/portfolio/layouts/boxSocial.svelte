<script lang="ts">
    import Box from "../box.svelte";
    import BoxLinkButton from "./boxLinkButton.svelte";

    interface ISocial {
        icon: string
        url: string
    }

    const social_medias: ISocial[] = [
        {
            icon: "instagram",
            url: ""
        },
        {
            icon: "instagram",
            url: ""
        },
        {
            icon: "instagram",
            url: ""
        },
        {
            icon: "instagram",
            url: ""
        },
        {
            icon: "instagram",
            url: ""
        },
        {
            icon: "instagram",
            url: ""
        }
    ]

</script>

<Box pad="lg">
    <div class="box-area">
        <h2>redes sociais</h2>
        <div class="box-social_medias">
        {#each social_medias as sm}
            <BoxLinkButton icon={sm.icon} url={sm.url} />
        {/each}
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