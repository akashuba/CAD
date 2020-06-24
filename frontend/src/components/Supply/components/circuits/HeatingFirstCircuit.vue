<template>
	<div class="heatingFirstCircuitContainer">
		<b-form-group
			id="heatingFirstCircle"
			label="Насос"
			class="group"
		>
			<div class="fieldsWrapper" >
				<div class="configItem">
					<b-form-input
						id="C1"
						name="C1"
						size="sm"
						:value="ventUnit['C1']"
						@input.native="setInput"
					></b-form-input>
					<label for="C1">Обозн</label>
				</div>
				<div class="configItem">
					<b-form-input
						id="C2"
						name="C1"
						size="sm"
						:value="ventUnit['C1']"
						@input.native="setInput"
					></b-form-input>
					<label for="C2">Обозн</label>
				</div>
				<div class="configItem">
					<b-form-input
						id="C3"
						name="C1"
						size="sm"
						:value="ventUnit['C1']"
						@input.native="setInput"
					></b-form-input>
					<label for="C3">Обозн</label>
				</div>
				<b-form-select
					class="mb-3"
					id="C3"
					name="C3"
					size="sm"
					:value="ventUnit['C3']"
					@change.native="setSelect"
				>
					<b-form-select-option :value="null"
						>Please select an option</b-form-select-option
					>
					<b-form-select-option value="1">Option A</b-form-select-option>
					<b-form-select-option value="2">Option B</b-form-select-option>
				</b-form-select>
				<b-form-checkbox
					id="C2"
					name="C2"
					:checked="ventUnit['C2']"
					@change.native="setCheckbox"
				>
					Рез. насос
				</b-form-checkbox>
			</div>
		</b-form-group>
	</div>
</template>

<script>
import { mutations } from '../../../../store/constants'
import { mapState } from 'vuex'

export default {
	name: 'HeatingFirstCircuit',
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
				data: `${event.target.checked}`,
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

<style scoped>
.heatingFirstCircuitContainer {
	width: 140px;
}
.configItem {
	display: flex;
}
.group {
	color: gray;
}
.fieldsWrapper {
	color: black;
}
</style>
