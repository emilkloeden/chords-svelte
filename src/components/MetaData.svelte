<script>
	export let metadata;
	const { tabAuthor, tabAuthorUrl, originalUrl, capoFret } = metadata;
</script>

<div class="metadata">
	{#if tabAuthor}
		<p>
			Chords courtesy of
			{#if tabAuthorUrl}
				<a href={tabAuthorUrl}>{tabAuthor}</a>
			{:else}
				{tabAuthor}
			{/if}
		</p>
	{/if}
	{#if originalUrl}
		<p>
			Original URL:
			{' '}<a href={originalUrl} target="_blank">{originalUrl}</a>
		</p>
	{/if}
	{#if capoFret}
		<div class="highlight">Place capo on fret {capoFret}</div>
	{/if}
</div>

<style>
	.metadata {
		font-size: 0.6rem;
	}

	.highlight {
		color: var(--quaternary-color);
	}
</style>
