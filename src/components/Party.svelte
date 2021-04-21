<script>
    import PartyTile from './PartyTile.svelte';
    import Hamburger from './Hamburger.svelte';
	import Sidebar from './Sidebar.svelte'

    const partyMembers = [
        { id: 1, name: 'asdfdelta', isReal: true },
        { id: 2, name: 'Pirion', isReal: false },
        { id: 3, name: 'FoohonPie', isReal: false },
        { id: 4, name: 'ThatGuy', isReal: false }
    ]

    let open = false;
</script>

<div id="party-menu" class="dark-menu">
    {#each partyMembers as member (member.id)}
        <PartyTile member={member} tooltip={member.name} isReal={member.isReal} />
    {/each}

    <Hamburger bind:open={open} />
    <Sidebar bind:open />
</div>

<style>
    #party-menu {
        position: fixed;
        right: 10px;
        bottom: 10px;
        height: 50px;
        display: flex;
        flex-direction: row;
        z-index: 2;
    }
</style>