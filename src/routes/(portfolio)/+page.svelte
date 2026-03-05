<script>
    import BoxAbout from "$lib/components/portfolio/layouts/boxAbout.svelte";
    import BoxBlog from "$lib/components/portfolio/layouts/boxBlog.svelte";
    import BoxDegrees from "$lib/components/portfolio/layouts/boxDegrees.svelte";
    import BoxLangs from "$lib/components/portfolio/layouts/boxLangs.svelte";
    import BoxLastVideo from "$lib/components/portfolio/layouts/boxLastVideo.svelte";
    import BoxProjects from "$lib/components/portfolio/layouts/boxProjects.svelte";
    import BoxSocial from "$lib/components/portfolio/layouts/boxSocial.svelte";
    import BoxVideoHistory from "$lib/components/portfolio/layouts/boxVideoHistory.svelte";

</script>
<svelte:head>
    <title>J. Lucas Hoffman | Desenvolvedor Web</title>
    <meta name="description" content="Meu nome é João Lucas Hoffman (@jlucashoffman) e atuo como desenvolvedor. Tenho como propósito ampliar meu impacto, criando soluções e compartilhando conhecimento que gerem transformação real na sociedade.">
</svelte:head>

<section id="personal_infos">
    <div id="personal_infos_1">
        <BoxAbout />
        <BoxDegrees />
    </div>
    <div id="personal_infos_2">
        <BoxLangs />
        <BoxSocial />
    </div>
</section>
<section id="projects">
    <BoxProjects />
</section>
<section id="blog">
    <BoxBlog />
</section>
<section id="media">
    <BoxLastVideo />
    <BoxVideoHistory />
</section>

<style>

    section, section > div {
        gap: var(--space-md);
    }

    section > div {
        display: flex;
        flex-direction: column;
    }

    section {
        display: flex;
        width: 100%;
    }

    @media screen and (max-width:1024px) {
        #personal_infos > div {
            flex: 1;
        }
    }

    @media screen and (max-width:900px) {
        #personal_infos, #media {
            flex-direction: column;
        }
    }
</style>