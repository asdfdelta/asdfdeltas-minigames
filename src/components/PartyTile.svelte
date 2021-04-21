<script>
    //export let member;
    export let tooltip = false;
    export let isReal = false;
</script>

<div id="party-tile" data-tooltip={tooltip} {isReal}>
    {#if !isReal}
        <span>+</span>
    {/if}
</div>

<style>
    #party-tile {
        height: 30px;
        width: 30px;
        background-color: orange;
        margin: 10px;
    }

    #party-tile[isReal='false'] {
        background-color: grey;
    }
    
    #party-tile[isReal='false'] span {
        color: black;
        font-size: 25px;
        display: inline-block;
        margin-top: -7px;
        margin-left: 6px;
        font-weight: bolder;
    }
    

/*This would all go into the global.css file*/
[data-tooltip] {
	position: relative;
	z-index: 2;
	display: block;
  }
  
  [data-tooltip]:before,
  [data-tooltip]:after {
	visibility: hidden;
	opacity: 0;
	pointer-events: none;
	  transition: .2s ease-out;
	  transform: translate(-50%, 5px)
  }
  
  [data-tooltip]:before {
	position: absolute;
	bottom: 100%;
	left: 50%;
	margin-bottom: 5px;
	padding: 7px;
	  width: 100%;
	min-width: 70px;
	  max-width: 250px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	background-color: #000;
	background-color: hsla(0, 0%, 20%, 0.9);
	color: #fff;
	content: attr(data-tooltip);
	text-align: center;
	font-size: 14px;
	line-height: 1.2;
	  transition: .2s ease-out
  }
  
  [data-tooltip]:after {
	position: absolute;
	bottom: 100%;
	left: 50%;
	width: 0;
	border-top: 5px solid #000;
	border-top: 5px solid hsla(0, 0%, 20%, 0.9);
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
	content: " ";
	font-size: 0;
	line-height: 0;
  }
  
  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
	visibility: visible;
	opacity: 1;
	  transform: translate(-50%, 0)
  }
  [data-tooltip=false]:hover:before,
  [data-tooltip=false]:hover:after {
	visibility: hidden;
	opacity: 0;
  }
</style>