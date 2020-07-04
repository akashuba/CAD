<template>
	<div class="sensorCheckboxes">

		<b-form-checkbox
			id="C20"
			name="C20"
			class="sensorCheckbox"
			:checked="ventUnit['C20']"
			@change.native="setCheckbox"
		>
			обогрев заслонки
		</b-form-checkbox>
		<b-form-checkbox
			id="C8"
			name="C8"
			class="sensorCheckbox"
			:checked="ventUnit['C8']"
			@change.native="setCheckbox"
		>
			Второй фильтр
		</b-form-checkbox>
		<b-form-checkbox
			id="C9"
			name="C9"
			class="sensorCheckbox"
			:checked="ventUnit['C9']"
			@change.native="setCheckbox"
		>
			датчик наруж темп
		</b-form-checkbox>
		<b-form-checkbox
			id="C10"
			name="C10"
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
import { mapState } from 'vuex'

export default {
	name: 'SensorsCheckboxes',
	computed: mapState({
		currentSupply: state => state.currentSupply,
		ventUnit: state => state.ventUnits[state.currentSupply],
	}),
	methods: {
		setCheckbox(event) {
			this.$store.commit(mutations.SET_FIELD, {
				unit: event.target.name,
				data: event.target.checked,
			})
		},
	},
}
</script>

<style scoped>
	.sensorCheckboxes {
		width: 120px;
		margin-right: 30px;
	}

	.sensorCheckbox {
		width: 100%;
		font-size: 12px;
		text-align: left;
	}
</style>
