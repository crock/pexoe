<template lang="html">
  <div id="home">
	<div class="jumbotron">
		<img src="../assets/logo.png" alt="pexoe logo">
		<h2>Minecraft Permissions Generator</h2>
		<h3>Quickly generate large permission files for your Minecraft server with ease</h3>
		<div class="callToActions">
			<router-link class="button is-outlined" to="/generator">Get Started</router-link>
			<router-link class="button is-outlined" to="/">Learn More</router-link>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
.jumbotron {
  background: #2C2E36;
  width: 100%;
  height: 350px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
		  align-items: center;

	img {
		width: 200px;
		height: auto;
	}

	h1 {
		font-size: 3rem !important;
	}

	h2 {
		font-size: 1.5rem;
		color: #fff;
		padding-top: 50px;
	}

	h3 {
		color: #bebebe;
		font-size: 1rem;
		padding-top: 10px;
		padding-bottom: 50px;
	}

	.callToActions {
		width: 300px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
}
</style>
