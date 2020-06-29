<template>
	<div class="moduleContainer">
		<b-form-select
			class="mb-3"
			size="sm"
			:id="moduleId"
			:name="moduleId"
			:options="options"
			:value="getVentUnit[moduleId]"
			@change.native="setSelect"
		>
		</b-form-select>
		<div v-if="contour.first[getVentUnit[moduleId]] !== null" >
			<ContourEquipment v-bind:fieldsIds="{ ...contour.first[getVentUnit[moduleId]] }" />
		</div>
	</div>
</template>

<script>
import { mutations } from '../../../store/constants'
import ContourEquipment from './ContourEquipment.vue'
import { contour } from '../constants'
// import { mapState } from 'vuex'

export default {
	name: 'Module',
	components: {
		ContourEquipment,
	},
	created() {
		this.contour = contour
	},
	computed: {
		getVentUnit() {
			return this.$store.getters.ventSupplyUnit
		},
		getStore() {
			return this.$store.getters.ventUnits
		},
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
