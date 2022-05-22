<script>
	import { chordifyLine } from '@emilkloeden/chordify';
	export let line;
	const chords = chordifyLine(line);
</script>

{#each chords as { precedingSpaces, chord }}
	{' '.repeat(precedingSpaces)}<span class="chord" data-finger-positioning="test\nxxx\test">{chord}</span>
{/each}

<style>
.chord {
	/* font-size: 3rem; */
	color: var(--primary-color);
	font-weight: bold;

	position: relative;
	/* /* border-bottom: 1px dashed var(--primary-color); */
}

.chord:before {
	content: attr(data-finger-positioning);
	position: absolute;
	transform: translateY(-50%);

	z-index: 10;

	width: 100px;
	padding: 10px;
	border-radius: 20px;
	background: var(--primary-color);
	color: var(--tertiary-color);
	text-align: center;
	font-size: 0.6rem;

	opacity: 0;
	transition: 0.3s opacity;
}

.chord:hover:before {
	opacity: 0.9;
}
</style>
