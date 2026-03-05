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
        <p>Meu nome é <strong>João Lucas Hoffman</strong> (@jlucashoffman) e atuo como desenvolvedor. Tenho como propósito ampliar meu impacto, criando soluções e compartilhando conhecimento que gerem transformação real na sociedade.<br><br>
            Acredito que já dispomos de poder computacional suficiente para enfrentar grande parte dos desafios sociais que ainda nos cercam — da acessibilidade à segurança. O que falta não é tecnologia, mas direcionamento, colaboração e iniciativa para aplicá-la de forma estratégica e responsável.</p>
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