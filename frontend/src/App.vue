<template>
	<div id="app">
		<Header />
		<Supply />
	</div>
</template>

<script>
import Supply from './components/supplyUnit/Supply.vue'
import Header from './components/common/Header.vue'

export default {
	name: 'App',
	components: {
		Supply,
		Header,
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
	background-color: #bfcddb;
	/* min-width: 1560px; */
}

label {
	margin: 0;
}
</style>
