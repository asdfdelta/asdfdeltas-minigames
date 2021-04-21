<script>
	import NewsFeed from '../components/NewsFeed.svelte';
	import CampfireImage from '../../static/images/campfire.png';
	import Party from '../components/Party.svelte';
</script>

<svelte:head>
	<title>\o/</title>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet">
</svelte:head>

<h1>asdfdelta's minigames</h1>

<div id="buttons" class="fl">
	<button id="play" class="primary">Play</button>
	<button id="login" class="secondary">Login</button>
</div>

<div id="aux" class="fl">
	<NewsFeed />
	<div id="aux-buttons" class="fl">
		<button id="campfire" class="tertiary"><img src="{CampfireImage}" alt="Campfire" /></button>
		<button id="rankings" class="secondary">Rankings</button>
		<button id="discord" class="secondary">Discord</button>
	</div>
</div>

<style>
	:global(body) {
		background-color: #36393F;
		color: white;
	}
	h1 {
		font-family: 'Red Hat Display', sans-serif;
		text-align: center;
		margin: 0 auto;
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		letter-spacing: 0.05em;
		font-weight: normal;
	}

	#buttons {
		margin-top: 100px;
	}

	.fl {
		display: flex;
		justify-content: space-around;
	}

	div#buttons {
		display: flex;
		justify-content: space-around;
		margin-top: 100px;
	}

	#aux {
		flex-direction: row;
		margin-top: 150px;
	}

	#aux-buttons {
		flex-direction: column;
	}

	#aux-buttons button {
		margin-bottom: 30px;
	}

	button#play {
		background-color: #39C16C;
		border: 3px solid #07923A;
		font-size: 48px;
	}

	button#play:hover {
		background-color: #07623A;
	}

	button#login, button#rankings, button#discord {
		background: #378BAB;
		border: 3px solid #1C789C;
	}

	button#login {
		font-size: 48px;
	}

	button#login:hover, button#rankings:hover, button#discord:hover {
		background: #176381;
	}

	#campfire {
		background: #FF6B4B;
		border: 4px solid #F84924;
	}

	#campfire:hover {
		background: #d13c1e; 
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>