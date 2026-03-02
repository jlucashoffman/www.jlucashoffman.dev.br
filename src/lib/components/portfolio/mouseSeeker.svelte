<script lang="ts">
	import { onMount } from "svelte";

	let seeker: SVGSVGElement;

	function handleMove(e: MouseEvent) {
		const x = e.clientX - 175; // metade da largura
		const y = e.clientY - 175; // metade da altura

		seeker.style.transform = `translate(${x}px, ${y}px)`;
	}

	onMount(() => {
		window.addEventListener("mousemove", handleMove);

		return () => {
			window.removeEventListener("mousemove", handleMove);
		};
	});
</script>

<svg
	bind:this={seeker}
	width="350"
	height="350"
	viewBox="0 0 350 350"
	xmlns="http://www.w3.org/2000/svg"
	class="seeker"
>
	<circle
		cx="175"
		cy="175"
		r="175"
		fill="#ffffff22"
	/>
</svg>

<style>
	.seeker {
		position: fixed;
		top: 0;
		left: 0;
        z-index: -1;
		pointer-events: none;
        will-change: transform;
        filter: blur(60px);
	}
</style>