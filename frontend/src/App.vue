<template>
	<div id="app">
		<Header />
		<div class="ventUnits">
			<Supply />
			<Exhaust />
		</div>
	</div>
</template>

<script>
import Supply from './components/supplyUnit/Supply.vue'
import Header from './components/common/Header.vue'
import Exhaust from './components/exhaustUnit/Exhaust.vue'

export default {
	name: 'App',
	components: {
		Supply,
		Header,
		Exhaust,
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
	min-width: 1450px;
}

label {
	margin: 0;
}

.ventUnits {
	display: flex;
}

</style>
