<script lang="ts">
    import { onMount } from "svelte";

    let circle: SVGCircleElement;

    function handleMove(e: MouseEvent) {
        const x = e.pageX;
        const y = e.pageY;

        circle.setAttribute("cx", x.toString());
        circle.setAttribute("cy", y.toString());
    }

    onMount(() => {
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    });
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    class="seeker-container"
>
    <circle
        bind:this={circle}
        r="175"
        fill="#ffffff22"
        class="seeker-circle"
    />
</svg>

<style>
    .seeker-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
        
        mask: url(#svg_mask-image);
        -webkit-mask: url(#svg_mask-image);
    }

    .seeker-circle {
        will-change: cx, cy;
        filter: blur(60px);
    }
</style>