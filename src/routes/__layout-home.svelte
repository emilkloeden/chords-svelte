<script>
	import '$lib/styles/global.css';
	import Image from '../components/Image.svelte';
	export let title = 'Chords - Svelte!';
</script>

<div class="container">
	<header class="header">
		<Image src="/logo.jpg" alt="Chords - Svelte! Logo" />
		<section class="heading2Xl">{title}</section>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		max-width: 36rem;
		padding: 0 1rem;
		margin: 3rem auto 6rem;
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.heading2Xl {
		font-size: 2.5rem;
		line-height: 1.2;
		font-weight: 800;
		letter-spacing: -0.05rem;
		margin: 1rem 0;
	}
</style>
