<template>
	<b-form-select
		class=" custom-select"
		:id="selectId"
		:name="selectId"
		size="sm"
		:value="selectValue"
		@change.native="setSelect"
	>
		<b-form-select-option value="0">1ф-L1</b-form-select-option>
		<b-form-select-option value="1">1ф-L2</b-form-select-option>
		<b-form-select-option value="2">1ф-L3</b-form-select-option>
		<b-form-select-option value="3">3ф</b-form-select-option>
	</b-form-select>
</template>

<script>
import { mutations } from '../../store/constants'

export default {
	name: 'PhaseSelector',

	props: {
		selectId: String,
		selectValue: String,
	},

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

<style scoped>
select.custom-select {
	font-size: 12px;
	margin: 0px;
}
</style>
