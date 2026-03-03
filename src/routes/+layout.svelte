<script lang="ts">

	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="styles/reset.css">
</svelte:head>

{@render children()}