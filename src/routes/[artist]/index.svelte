<script>
	export let artist;
	export let songTitles;
</script>

<article>
	<h1 class="headingXl">{artist}</h1>
	<ul class="list">
		{#each songTitles as songTitle}
			<li class="listItem">
				<a href="{artist}/{songTitle}">
					{songTitle}
				</a>
				<br />
			</li>
		{/each}
	</ul>
</article>
