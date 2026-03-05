<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Footer from '$lib/components/portfolio/layouts/footer.svelte';
    import Header from '$lib/components/portfolio/layouts/header.svelte';
    import MouseSeeker from '$lib/components/portfolio/mouseSeeker.svelte';
    import PageMask from '$lib/components/portfolio/pageMask.svelte';
    import { deviceState } from '$lib/detectDevice.svelte';

	import "$lib/styles/portfolio.css"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"> -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,0,0&icon_names=favorite" />

	<meta name="theme-color" content="#000000">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />

{#if !deviceState.isTouch}
<PageMask />
<MouseSeeker />
{/if}

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		padding-left: var(--space-lg);
		padding-right: var(--space-lg);
	}
</style>