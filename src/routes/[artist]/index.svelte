<script context="module">
	export const load = async ({ fetch, params }) => {
		const { artist } = params;
		let url = new URL(
			'https://adorable-liger-1769be.netlify.app/.netlify/functions/getSongsByArtist'
		);
		url.search = new URLSearchParams({
			artist
		});
		const res = await fetch(url);
		const { songs } = await res.json();
		return {
			props: {
				artist,
				songs
			}
		};
	};
</script>

<script>
	export let artist;
	export let songs;
</script>

<article>
	<h1 class="headingXl">{artist}</h1>
	<ul class="list">
		{#each songs as { title, path }}
			<li class="listItem">
				<a href={path}>{title}</a>
				<br />
			</li>
		{/each}
	</ul>
</article>
