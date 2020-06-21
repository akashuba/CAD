<template>
	<div class="motorCheckboxes">

		<b-form-checkbox
			id="C20"
			name="C20"
			:checked="ventUnit['C20']"
			@change.native="setCheckbox"
		>
			обогрев заслонки
		</b-form-checkbox>
		<b-form-checkbox
			id="C8"
			name="C8"
			:checked="ventUnit['C8']"
			@change.native="setCheckbox"
		>
			Второй фильтр
		</b-form-checkbox>
		<b-form-checkbox
			id="C2"
			name="C2"
			:checked="ventUnit['C2']"
			@change.native="setCheckbox"
		>
			датчик наруж темп
		</b-form-checkbox>
		<b-form-checkbox
			id="C10"
			name="C10"
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
	name: 'MotorCheckboxes',
	computed: mapState({
		currentSupply: state => state.currentSupply,
		ventUnit: state => state.ventUnits[state.currentSupply],
	}),
	methods: {
		setCheckbox(event) {
			this.$store.commit(mutations.SET_FIELD, {
				unit: event.target.name,
				data: `${event.target.checked}`,
			})
		},
	},
}
</script>

<style scoped>
	.motorCheckboxes {
		width: 150px;
	}
</style>
