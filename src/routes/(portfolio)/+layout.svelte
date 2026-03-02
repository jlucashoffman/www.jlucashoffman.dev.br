<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Footer from '$lib/components/portfolio/layouts/footer.svelte';
    import Header from '$lib/components/portfolio/layouts/header.svelte';
	import "$lib/styles/reset.css";
	import "$lib/styles/portfolio.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,0,0&icon_names=favorite" />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}
</style>