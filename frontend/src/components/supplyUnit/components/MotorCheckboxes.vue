<template>
	<div class="motorCheckboxes">
		<b-form-checkbox
			id="C5"
			name="C5"
			size="sm"
			class="motorCheckbox"
			:checked="ventUnit['C5']"
			@change.native="setCheckbox"
		>
			частотный преобразователь
		</b-form-checkbox>
		<b-form-checkbox
			id="C6"
			name="C6"
			size="sm"
			class="motorCheckbox"
			:checked="ventUnit['C6']"
			@change.native="setCheckbox"
		>
			резервный двигатель
		</b-form-checkbox>
		<b-form-checkbox
			id="C7"
			name="C7"
			size="sm"
			class="motorCheckbox"
			:checked="ventUnit['C7']"
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
		currentSupply: (state) => state.currentSupply,
		ventUnit: (state) => state.ventUnits[state.currentSupply],
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
.motorCheckboxes {
	width: 140px;
	align-self: flex-end;
	padding-left: 10px;
}

.motorCheckbox {
	margin-bottom: 5px;
	text-align: left;
}
</style>
