<template>
<div>
	<img v-bind:src="require(`../images/${backgroundImage}.jpg`)" class="schemeContainer"/>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Scheme',
	computed: mapState({
		currentSupply: state => state.currentSupply,
		ventUnit: (state) => state.veqntUnits[state.currentSupply],
		backgroundImage: (state) => {
			const fcCheckbox = state.ventUnits[state.currentSupply]['C5']
			return fcCheckbox ? 'main_1' : 'main_2'
		}
	}),
}
</script>

<style scoped>
.schemeContainer {
	width: 1000px;
	height: 250px;
}
</style>
