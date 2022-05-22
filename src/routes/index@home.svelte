<script>
	export let allSongsData;
</script>

<section class="headingMd">
	<p>A portfolio project displaying guitar chords with finger-positions on-hover.</p>
</section>

<section class="headingMd padding1px">
	<h2 class="headingLg">Chords</h2>
	<ul class="list">
		{#each allSongsData as song}
			<li class="listItem">
				<a href="{song.artist}/{song.id}">
					{song.artist} - {song.title}
				</a>
				<br />
			</li>
		{/each}
	</ul>
</section>

<style>
	section.headingMd {
		font-size: 1.2rem;
		line-height: 1.5;
	}
</style>
