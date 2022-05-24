<script context="module">
	export const load = async ({ fetch, params }) => {
		const { artist } = params;
		const songs = await fetch(`/api/artist/${artist}.json`);
		const allSongs = await songs.json();
		return {
			props: {
				artist,
				allSongs
			}
		};
	};
</script>

<script>
	export let artist;
	export let allSongs;
</script>

<article>
	<h1 class="headingXl">{artist}</h1>
	<ul class="list">
		{#each allSongs as song}
			<li class="listItem">
				<a href={song.path}>
					{song.meta.title}
				</a>
				<br />
			</li>
		{/each}
	</ul>
</article>
