<script>
	import Song from '../../components/Song.svelte';
	export let artist;
	export let id;
	export let content;
</script>

<article>
	<h1 class="headingXl">{id}</h1>
	<a href="/{artist}" class="lightText">{artist}</a>
	<Song {content} />

	<!-- <MetaData metadata={metadata} /> -->
	<!-- <Song song={content} /> -->
</article>

<style></style>
