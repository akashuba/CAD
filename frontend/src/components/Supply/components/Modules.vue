<template>
	<div class="modulesContainer">
		<Module v-bind:options="options" moduleId="C11"/>
	</div>
</template>

<script>
// import { mutations } from '../../../store/constants'
// import { mapState } from 'vuex'
import Module from './Module.vue'

export default {
	name: 'Modules',
	components: {
		Module,
	},
	data: function() {
		return {
			options: [
				{ value: 0, text: 'нет' },
				{ value: 1, text: 'нагрев 1 конт.' },
				{ value: 2, text: 'рекуп. ротор.' },
				{ value: 3, text: 'рекуп. гликоль' },
				{ value: 4, text: 'рециркуляция' },
				{ value: 5, text: 'электронагрев' },
			],
		}
	},
	// computed: mapState({
	// 	currentSupply: state => state.currentSupply,
	// 	ventUnit: state => state.ventUnits[state.currentSupply],
	// }),
	// props: {
	// 	options: Array,
	// },
}
</script>

<style scoped>
.modulesContainer {
	width: 850px;
}
</style>
