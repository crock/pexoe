<template>
  <div>
	<navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    'navbar': navbar
  }
}
</script>

<style>
body {
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 14px;
}

.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
</style>
