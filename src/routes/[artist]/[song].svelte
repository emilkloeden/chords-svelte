<script context="module">
	export const load = async ({ fetch, params }) => {
		const { artist, song: title } = params;

		// let url = new URL('https://adorable-liger-1769be.netlify.app/.netlify/functions/getSong');
		// url.search = new URLSearchParams({
		// 	artist,
		// 	title
		// });
		// const res = await fetch(url);
		// const data = await res.json();
		// const { content } = data;
		let content = 'remote test';
		return {
			props: {
				content,
				artist,
				title
			}
		};
	};
</script>

<script>
	import Song from '../../components/Song.svelte';
	export let artist;
	export let title;
	export let content;
</script>

<article>
	<h1 class="headingXl">{title}</h1>
	<a href="/{artist}" class="lightText">{artist}</a>
	<Song {content} />

	<!-- <MetaData metadata={metadata} /> -->
	<!-- <Song song={content} /> -->
</article>

<style></style>
