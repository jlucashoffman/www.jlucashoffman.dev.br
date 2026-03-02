<script lang="ts">
    import Box from "../box.svelte";
    import BoxProfilePicture from "./boxProfilePicture.svelte";

</script>
<Box pad="xl" className="seeker_mask">
    <div class="box-area">
        <div>
            <BoxProfilePicture />
            <div>
                <p><strong>22</strong> anos</p>
                <p><strong>Belo Horizonte</strong>, MG, Brasil</p>
            </div>
        </div>
        <p>Me chamo <strong>João Lucas Hoffman</strong> (@jlucashoffman) e, pasmem, sou um desenvolvedor! Meu objetivo é alcançar o mundo, criando e ensinando para a sociedade. Acredito que já temos poder computacional o suficiente para acabar com toda mazela social que impregna a sociedade, desde a acessibilidade até a segurança.</p>
    </div>
</Box>

<style>
    .box-area {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);

        & > div {
            display: flex;
            gap: var(--space-md);

            & > div {
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
            }
        }
    }
</style>