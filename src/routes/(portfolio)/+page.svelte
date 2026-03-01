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
<section id="personal_infos">
    <div>
        <BoxAbout />
        <BoxDegrees />
    </div>
    <div>
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