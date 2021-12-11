<script lang="ts">
	export let tags: Array<string> = [];

	$: sortedTags = [...tags].sort(function (a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
</script>

{#each sortedTags as tag, i}
	<span>{tag}</span>
{/each}

<style>
</style>
