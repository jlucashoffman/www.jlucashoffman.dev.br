<footer>
    <p>Todos os direitos reservados à J. Lucas Hoffman, 2026</p>
    <div class="link-groups">
        <div class="link-group">
            <a href="">Sobre nós</a>
            <a href="">Línguas</a>
            <a href="">Graduações</a>
            <a href="">Redes sociais</a>
        </div>
        <div class="link-group">
            <a href="">Projetos</a>
            <a href="">Blog</a>
        </div>
    </div>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);

        & .link-groups {
            display: flex;
            gap: var(--space-xl);

            & .link-group {
                display: flex;
                flex-direction: column;
                gap: var(--space-md);
            }
        }
    }
</style>