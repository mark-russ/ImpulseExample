<svelte:options tag="test-component" />
<script>
	export let name = "DEFAULT VALUE";
	
	let show = true;
	let items = [
		{ name: "Some User", age: 50 },
		{ name: "Another User", age: 25 },
		{ name: "Third User", age: 12 },
	];

	function onClick() {
		show = !show;
	}
</script>

<div id="itemList">
	{#each items as item, idx}
		<div>Id: {idx} has name { item.name } with age { item.age }.</div>
	{/each}
</div>

{#if show}
	<div>You've turned me on!</div>
{:else}
	<div>I'm off :(</div>
{/if}


<p>Prop passed in from page: {name}</p>

<button on:click={onClick}>
	Click to say hello
</button>

<style>
	#itemList {
		background: #333;
		padding: 2em;
	}
</style>