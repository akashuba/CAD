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
		<div v-if="getVentUnit[moduleId] === '1'">
			<ContourEquipment
				v-bind:fieldsIds="{
					name: 'C12',
					current: 'C13',
					power: 'C14',
					connection: 'C15',
					reservePump: 'C16',
				}"
			/>
		</div>
	</div>
</template>

<script>
import { mutations } from '../../../store/constants'
import ContourEquipment from './ContourEquipment.vue'
// import { mapState } from 'vuex'

export default {
	name: 'Module',
	components: {
		ContourEquipment,
	},
	computed: {
		getVentUnit() {
			console.log(JSON.parse(JSON.stringify(this.$store.getters.ventUnits)))
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
