<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Footer from '$lib/components/portfolio/layouts/footer.svelte';
    import Header from '$lib/components/portfolio/layouts/header.svelte';
    import MouseSeeker from '$lib/components/portfolio/mouseSeeker.svelte';
    import PageMask from '$lib/components/portfolio/pageMask.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="styles/portfolio.css">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,0,0&icon_names=favorite" />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />

<PageMask />
<MouseSeeker />

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}
</style>