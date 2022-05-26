<script context="module">
	export const load = async ({ fetch, params }) => {
		const { artist, song: title } = params;

		let url = new URL('https://adorable-liger-1769be.netlify.app/.netlify/functions/getSong');
		url.search = new URLSearchParams({
			artist,
			title
		});
		const res = await fetch(url);
		const data = await res.json();
		const { content, tabAuthor, tabAuthorUrl, originalUrl, capoFret } = data;
		const metadata = {
			tabAuthor,
			tabAuthorUrl,
			originalUrl,
			capoFret
		};
		return {
			props: {
				content,
				artist,
				title,
				metadata
			}
		};
	};
</script>

<script>
	import MetaData from '../../components/MetaData.svelte';
	import Song from '../../components/Song.svelte';
	export let artist;
	export let title;
	export let content;
	export let metadata;
</script>

<article>
	<h1 class="headingXl">{title}</h1>
	<a href="/{artist}" class="lightText">{artist}</a>
	<MetaData {metadata} />
	<Song {content} />
</article>

<style></style>
