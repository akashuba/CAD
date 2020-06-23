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
	</div>
</template>

<script>
import { mutations } from '../../../store/constants'
// import { mapState } from 'vuex'

export default {
	name: 'Module',
	computed: {
		getVentUnit() {
			console.log(JSON.parse(JSON.stringify(this.$store.getters.ventUnits)));

			return this.$store.getters.ventSupplyUnit;
		}
	},
	// mapState({
	// 	currentSupply: state => state.currentSupply,
	// 	ventUnit: state => state.ventUnits[state.currentSupply],
	// }),
	props: {
		options: Array,
		moduleId: String,
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
