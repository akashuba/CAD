<template>
	<div class="exhaustUnitContainer">
		<div class="sheme">
			<ExhaustScheme />
			<ExhaustCheckboxes />
		</div>
		<div class="exhaustLowerBlock">
			<MotorSupply :ventUnit="ventUnit" :setField="setInput" />
			<VentUnitsList
				title="вытяжные системы:"
				:options="options"
				:currentVentUnitName="getCurrentVentUnitName"
				:selectCurrentUnit="selectCurrentUnit"
				:createVentUnit="createVentUnit"
				:removeVentUnit="removeVentUnit"
				:showModal="showModal"
			/>
		</div>
		<b-modal
			ref="modalCreateExhaustUnit"
			id="modalCreateExhaustUnit"
			title="Добавить установку"
			ok-title="добавить"
			cancel-title="закрыть"
			size="sm"
			hide-footer
		>
			<ModalCreateUnit :createVentUnit="createVentUnit" :options="options" />
		</b-modal>
	</div>
</template>
<script>
import ExhaustScheme from './components/ExhaustScheme.vue'
import ExhaustCheckboxes from './components/ExhaustCheckboxes.vue'
import MotorSupply from '../common/MotorSupply.vue'
import VentUnitsList from '../common/VentUnitsList.vue'
import ModalCreateUnit from '../common/ModalCreateUnit.vue'

import { mutations } from '../../store/constants'

export default {
	name: 'Exhaust',

	components: {
		ExhaustScheme,
		ExhaustCheckboxes,
		MotorSupply,
		VentUnitsList,
		ModalCreateUnit,
	},

	computed: {
		options() {
			const ventUnits = this.$store.getters.ventUnitsExhaust
			const ventUnitsNumbers = Object.keys(this.$store.getters.ventUnitsExhaust)
			return ventUnitsNumbers.map((number) => {
				return { value: number, text: ventUnits[number]['C1'] }
			})
		},

		getCurrentVentUnitName() {
			return this.$store.getters.currentExhaustName
		},

		ventUnit() {
			return this.$store.getters.ventExhaustUnit
		},
	},

	methods: {
		selectCurrentUnit(event) {
			this.$store.commit(mutations.SELECT_CURRENT_EXHAUST, {
				currentName: event.target.value,
			})
		},

		createVentUnit(name, template) {
			this.$store.commit(mutations.CREATE_EXHAUST_UNIT, {
				name,
				template,
			})

			this.$refs['modalCreateExhaustUnit'].hide()
		},

		removeVentUnit() {
			this.$store.commit(mutations.REMOVE_CURRENT_EXHAUST)
		},

		setInput(event) {
			this.$store.commit(mutations.SET_EXHAUST_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},

		showModal() {
			this.$refs['modalCreateExhaustUnit'].show()
		},
	},
}
</script>
<style scoped>
.exhaustUnitContainer {
	padding: 10px;
	border: 1px solid gray;
	border-radius: 5px;
}

.sheme {
	display: flex;
}

.exhaustLowerBlock {
	padding-top: 10px;
}
</style>
