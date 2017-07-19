<template>
	<nav class="nav has-shadow">
		<div class="container">
			<div class="nav-left">
				<a class="nav-item">
				<img src="../assets/logo-sm.png" alt="pexoe logo">
				</a>
			</div>
			<a class="navbar-burger" v-on:click="showNav = !showNav" v-bind:class="showNav ? 'is-active' : ''">
				<span></span>
				<span></span>
				<span></span>
			</a>
			<div class="nav-right nav-menu" v-bind:class="showNav ? 'is-active' : ''">
				<router-link class="nav-item is-tab" to="/" exact>How It Works</router-link>
				<router-link class="nav-item is-tab" to="/generator">Generator</router-link>
				<router-link class="nav-item is-tab" to="/profile">Profile</router-link>
				<router-link class="nav-item is-tab" to="/login">Login</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
	return {
		showNav: false
	}
  },
}
</script>

<style lang="scss">

.navbar-burger {
	display: none;
}

.nav-item img {
	margin-left: 25px;
}

@media screen and (max-width: 768px) {
	a.nav-item a:not(.button).is-tab.is-active, a.nav-item:not(.button).is-tab.is-active {
		border-bottom: none;
	}

	a.nav-item:not(.button).is-tab {
		padding: 0 !important;
		border-top: 1px solid rgba(219, 219, 219, 0.5);

		&:hover {
			border-bottom: none;
			background: whitesmoke;
		}
	}

	.nav-menu.is-active {
		display: block;
		min-height: 208px;

		a {
		display: block;
		width: 100%;
		height: 52px;
		line-height: 52px;
		background: #fff;
		color: #363636;
		}
	}

	.navbar-burger {
		display: block;
	}
}
</style>
