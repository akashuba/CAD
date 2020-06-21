<template>
	<div class="motorCheckboxes">
		<b-form-select
			class="mb-3"
			id="C3"
			name="C3"
			:value="ventUnit['C3']"
			@change.native="setSelect"
		>
			<b-form-select-option :value="null">Please select an option</b-form-select-option>
			<b-form-select-option value="1">Option A</b-form-select-option>
			<b-form-select-option value="2">Option B</b-form-select-option>
		</b-form-select>
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
	// props: {
	// 	msg: String,
	// },
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

<style scoped></style>
