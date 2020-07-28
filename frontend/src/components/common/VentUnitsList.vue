<template>
	<div class="ventUnitsListContainer">
		<div class="title">{{ title }}</div>
		<div class="fieldsWrapper">
			<div class="unitsList">
				<b-form-select
					class="mb-3 custom-select"
					id="unitsList"
					name="unitsList"
					size="sm"
					:value="getCurrentSupply"
					:options="options"
					@change.native="selectCurrentUnit"
					:select-size="5"
				>
				</b-form-select>
			</div>
			<div class="controls">
				<b-button
					size="sm"
					variant="outline-dark"
					class="button"
					v-b-modal.modal-create-unit
					>добавить</b-button
				>
				<b-button
					size="sm"
					variant="outline-danger"
					class="button"
					@click="onRemoveButtonClick"
					>удалить</b-button
				>
			</div>
		</div>

		<b-modal
			ref="modal-create-unit"
			id="modal-create-unit"
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
import { mutations } from '../../store/constants'
import ModalCreateUnit from '../common/ModalCreateUnit.vue'

export default {
	name: 'VentUnitsList',
	components: {
		ModalCreateUnit,
	},

	data() {
		return {
			ventUnitName: '',
		}
	},

	props: {
		title: String,
	},

	computed: {
		currentVentUnit() {
			return this.$store.getters.ventSupplyUnit
		},

		options() {
			const ventUnits = this.$store.getters.ventUnits
			const ventUnitsNumbers = Object.keys(this.$store.getters.ventUnits)
			return ventUnitsNumbers.map((number) => {
				return { value: number, text: ventUnits[number]['C1'] }
			})
		},

		getCurrentSupply() {
			return this.$store.getters.currentSupplyName
		},
	},

	methods: {
		setInput(event) {
			this.$store.commit(mutations.SET_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},

		selectCurrentUnit(event) {
			this.$store.commit(mutations.SELECT_CURRENT_SUPPLY, {
				currentSupplyName: event.target.value,
			})
		},

		createVentUnit(name, template) {
			this.$store.commit(mutations.CREATE_SUPPLY_UNIT, {
				name,
				template,
			})

			this.$refs['modal-create-unit'].hide()
		},

		onRemoveButtonClick() {
			this.$store.commit(mutations.REMOVE_CURRENT_SUPPLY)
		},
	},
}
</script>

<style scoped>
.ventUnitsListContainer {
	width: 250px;
}

.configItem {
	display: flex;
	align-items: center;
	text-align: left;
	margin-bottom: 5px;
}

.fieldsWrapper {
	display: flex;
	justify-content: space-between;
	font-size: 12px;
}

.inputLabel {
	padding-left: 10px;
}

.custom-input {
	width: 50px;
	font-size: 12px;
	padding: 2px 4px;
}

.unitsList {
	flex: 0 0 100px;
}

.controls {
	flex: 0 0 115px;
	display: flex;
	flex-direction: column;
}

.title {
	font-size: 14px;
	margin-bottom: 5px;
}

.button {
	margin-bottom: 5px;
}
</style>
