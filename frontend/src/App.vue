<template>
	<div id="app">
		<Supply />
	</div>
</template>

<script>
import Supply from './components/Supply/Supply.vue'

export default {
	name: 'App',
	components: {
		Supply,
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
