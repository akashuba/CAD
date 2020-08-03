<template>
	<div class="sensorCheckboxes">
		<b-form-checkbox
			id="C20"
			name="C20"
			size="sm"
			class="sensorCheckbox"
			:checked="ventUnit['C20']"
			@change.native="setCheckbox"
		>
			обогрев заслонки
		</b-form-checkbox>
		<b-form-checkbox
			id="C8"
			name="C8"
			size="sm"
			class="sensorCheckbox"
			:checked="ventUnit['C8']"
			@change.native="setCheckbox"
		>
			Второй фильтр
		</b-form-checkbox>
		<b-form-checkbox
			id="C9"
			name="C9"
			size="sm"
			class="sensorCheckbox"
			:checked="ventUnit['C9']"
			@change.native="setCheckbox"
		>
			датчик наруж темп
		</b-form-checkbox>
		<b-form-checkbox
			id="C10"
			name="C10"
			size="sm"
			class="sensorCheckbox"
			:checked="ventUnit['C10']"
			@change.native="setCheckbox"
		>
			датчик CO
		</b-form-checkbox>
	</div>
</template>

<script>
import { mutations } from '../../../store/constants'

export default {
	name: 'SensorsCheckboxes',

	computed: {
		ventUnit() {
			return this.$store.getters.ventSupplyUnit
		},
	},

	methods: {
		setCheckbox(event) {
			this.$store.commit(mutations.SET_SUPPLY_FIELD, {
				unit: event.target.name,
				data: event.target.checked,
			})
		},
	},
}
</script>

<style scoped>
.sensorCheckboxes {
	margin-right: 30px;
	flex: 0 0 118px;
}

.sensorCheckbox {
	width: 100%;
	text-align: left;
	margin-bottom: 5px;
}
</style>
