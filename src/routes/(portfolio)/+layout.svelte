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
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />