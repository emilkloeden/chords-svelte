<script>
	import { isChordLine, isBlockLine } from '@emilkloeden/chordify';
	import BlockLine from "./BlockLine.svelte"
    import ChordLine from './ChordLine.svelte';
	export let content;
	const lines = content.split('\n');
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Space+Mono&display=optional" rel="stylesheet" />
</svelte:head>

<!-- This is awkwardly pulled left as the <pre> tag honors whitespace-->
<pre class="song">
{#each lines as line}
{#if isBlockLine(line)}
    <BlockLine {line} />
{:else if isChordLine(line)}
    <ChordLine {line} />
{:else}
    {line}
{/if}
<!-- This is here so that all lines aren't rejoined -->
{/each}
</pre>

<style>
	.song {
		font-family: 'Inconsolata', 'Space Mono', monospace;
		font-size: 1rem;
	}
</style>
