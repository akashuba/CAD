<template>
	<div class="supplyContainer">
		<div class="sypplyUpperBlock">
			<Scheme />
			<MotorCheckboxes />
		</div>
		<div class="lowerBlock">
			<SensorsCheckboxes />
			<Modules />
			<div>
				<MotorSupply :ventUnit="ventUnit" :setField="setInput" />
				<VentUnitsList
					title="приточные системы:"
					:options="options"
					:currentVentUnitName="getCurrentVentUnitName"
					:selectCurrentUnit="selectCurrentUnit"
					:createVentUnit="createVentUnit"
					:removeVentUnit="removeVentUnit"
					:showModal="showModal"
				/>
			</div>
		</div>

		<b-modal
			ref="modalCreateSupplyUnit"
			id="modalCreateSupplyUnit"
			title="Добавить установку"
			ok-title="добавить"
			cancel-title="закрыть"
			hide-footer
		>
			<ModalCreateUnit :createVentUnit="createVentUnit" :options="options" />
		</b-modal>
	</div>
</template>

<script>
import MotorCheckboxes from './components/MotorCheckboxes.vue'
import SensorsCheckboxes from './components/SensorsCheckboxes.vue'
import Modules from './components/Modules.vue'
import Scheme from './components/Scheme.vue'
import MotorSupply from '../common/MotorSupply.vue'
import VentUnitsList from '../common/VentUnitsList.vue'
import ModalCreateUnit from '../common/ModalCreateUnit.vue'

import { mutations } from '../../store/constants'

export default {
	name: 'Supply',

	components: {
		MotorCheckboxes,
		Modules,
		Scheme,
		SensorsCheckboxes,
		MotorSupply,
		VentUnitsList,
		ModalCreateUnit,
	},

	data() {
		return {
			status: 'not_accepted',
		}
	},

	computed: {
		options() {
			const ventUnits = this.$store.getters.ventUnitsSupply
			const ventUnitsNumbers = Object.keys(this.$store.getters.ventUnitsSupply)
			return ventUnitsNumbers.map((number) => {
				return { value: number, text: ventUnits[number]['C1'] }
			})
		},

		getCurrentVentUnitName() {
			return this.$store.getters.currentSupplyName
		},

		ventUnit() {
			return this.$store.getters.ventSupplyUnit
		},
	},

	methods: {
		selectCurrentUnit(event) {
			this.$store.commit(mutations.SELECT_CURRENT_SUPPLY, {
				currentName: event.target.value,
			})
		},

		createVentUnit(name, template) {
			this.$store.commit(mutations.CREATE_SUPPLY_UNIT, {
				name,
				template,
			})

			this.$refs['modalCreateSupplyUnit'].hide()
		},

		removeVentUnit() {
			this.$store.commit(mutations.REMOVE_CURRENT_SUPPLY)
		},

		setInput(event) {
			this.$store.commit(mutations.SET_SUPPLY_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},

		showModal() {
			this.$refs['modalCreateSupplyUnit'].show()
		},
	},
}
</script>

<style scoped>
.supplyContainer {
	padding: 10px;
	border: 1px solid gray;
	border-radius: 5px;
	margin-right: 10px;
}

.sypplyUpperBlock {
	display: flex;
	min-height: 270px;
}

.lowerBlock {
	display: flex;
}

.lowerBlock {
	padding-top: 10px;
}
</style>
