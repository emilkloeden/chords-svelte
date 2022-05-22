<script>
	import '$lib/styles/global.css';
</script>

<div class="container">
	<main>
		<slot />
	</main>
	<div class="backToHome"><a href="/">Back to home</a></div>
</div>

<style>
	.container {
		max-width: 36rem;
		padding: 0 1rem;
		margin: 3rem auto 6rem;
	}
</style>
