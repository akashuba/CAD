<template>
	<div class="motorCheckboxes">
		<b-form-input
			id="C1"
			name="C1"
			placeholder="Enter your name"
			:value="ventUnit['C1']"
			@input.native="setInput"
		></b-form-input>
		<b-form-checkbox
			id="C2"
			name="C2"
			:checked="ventUnit['C2']"
			@change.native="setCheckbox"
		>
			I accept the terms and use
		</b-form-checkbox>
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
		<div>{{ ventUnit }}</div>
		<div>{{ currentSupply }}</div>
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
		setCheckbox(event) {
			this.$store.commit(mutations.SET_FIELD, {
				unit: event.target.name,
				data: event.target.checked,
			})
		},
		setInput(event) {
			this.$store.commit(mutations.SET_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},
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
