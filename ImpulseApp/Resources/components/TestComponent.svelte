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

<p>Prop passed in from page: {name}</p>


{#if show}
	<div>You've turned me on!</div>
{:else}
	<div>I'm off :(</div>
{/if}

<button on:click={onClick}>
	Click me to toggle the thing above me!
</button>

<style>
	#itemList {
		background: #333;
		padding: 2em;
	}
</style>