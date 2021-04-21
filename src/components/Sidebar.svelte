<script>
	export let open;
</script>

<aside class:open class="dark-menu">
	<nav>
		<button class="secondary"><a class="block" href="#about">Login</a></button>
		<button class="secondary"><a class="block" href="#contact">Invite</a></button>
	</nav>
</aside>

<style>
	aside {
		position: absolute;
		transition: top 0.3s ease-in-out;
		top: 200%;
		right: 0%;
		z-index: 1;
	}
	
    aside nav {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
    }

	aside nav button {
		font-size: 16px;
    	margin: 5px 0;
	}

	.open {
		top: calc(-100% - 95px);
	}
</style>