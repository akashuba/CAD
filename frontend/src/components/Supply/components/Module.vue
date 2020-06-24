<template>
	<div class="moduleContainer">
		<b-form-select
			class="mb-3"
			:id="moduleId"
			:name="moduleId"
			:options="options"
			:value="getVentUnit[moduleId]"
			@change.native="setSelect"
		>
		</b-form-select>
		<div v-if="circuit === 1">
			<HeatingFirstCircuit />
		</div>
	</div>
</template>

<script>
import { mutations } from '../../../store/constants'
import HeatingFirstCircuit from './circuits/HeatingFirstCircuit'
// import { mapState } from 'vuex'

export default {
	name: 'Module',
	components: {
		HeatingFirstCircuit,
	},
	computed: {
		getVentUnit() {
			console.log(JSON.parse(JSON.stringify(this.$store.getters.ventUnits)));

			return this.$store.getters.ventSupplyUnit;
		},
		getStore() {
			return this.$store.getters.ventUnits
		}
	},
	// mapState({
	// 	currentSupply: state => state.currentSupply,
	// 	ventUnit: state => state.ventUnits[state.currentSupply],
	// }),
	props: {
		options: Array,
		moduleId: String,
		circuit: Number,
	},
	methods: {
		setSelect(event) {
			this.$store.commit(mutations.SET_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},
	},
}
</script>

<style scoped>
.moduleContainer {
	width: 160px;
}
</style>
