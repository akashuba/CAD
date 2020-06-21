<template>
	<div class="motorCheckboxes">

		<b-form-checkbox
			id="C5"
			name="C5"
			:checked="ventUnit['C5']"
			@change.native="setCheckbox"
		>
			частотный преобразователь
		</b-form-checkbox>
		<b-form-checkbox
			id="C6"
			name="C6"
			:checked="ventUnit['C6']"
			@change.native="setCheckbox"
		>
			резервный двигатель
		</b-form-checkbox>
		<b-form-checkbox
			id="C2"
			name="C2"
			:checked="ventUnit['C2']"
			@change.native="setCheckbox"
		>
			выключатель безопасности
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
