<template>
	<div class="moduleContainer">
		<b-form-select
			class="mb-3 custom-input"
			size="sm"
			:id="moduleId"
			:name="moduleId"
			:options="options"
			:value="getVentUnit[moduleId]"
			@change.native="setSelect"
		>
		</b-form-select>
		<div v-if="contour[contourOrder][getVentUnit[moduleId]] !== null">
			<ContourEquipment
				v-bind:fieldsIds="{ ...contour[contourOrder][getVentUnit[moduleId]] }"
			/>
		</div>
	</div>
</template>

<script>
import { mutations } from '../../../store/constants'
import ContourEquipment from './ContourEquipment.vue'
import { contour } from '../constants'

export default {
	name: 'Module',
	components: {
		ContourEquipment,
	},

	props: {
		options: Array,
		moduleId: String,
		contourOrder: String,
	},

	created() {
		this.contour = contour
	},

	computed: {
		getVentUnit() {
			return this.$store.getters.ventSupplyUnit
		},
	},

	methods: {
		setSelect(event) {
			this.$store.commit(mutations.SET_SUPPLY_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},
	},
}
</script>

<style scoped>
.moduleContainer {
	width: 110px;
	flex: 0 0 110px;
	margin-right: 30px;
}

.custom-input {
	font-size: 12px;
}
</style>
