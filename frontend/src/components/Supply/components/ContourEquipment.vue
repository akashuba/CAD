<template>
	<div class="contourEquipmentContainer">
		<b-form-group id="heatingFirstCircle" :label="fieldsIds.label" class="group">
			<div class="fieldsWrapper">
				<div class="configItem">
					<b-form-input
						:id="fieldsIds.name"
						:name="fieldsIds.name"
						size="sm"
						:value="ventUnit[fieldsIds.name]"
						@input.native="setInput"
					></b-form-input>
					<label class="inputLabel" :for="fieldsIds.name">обозн</label>
				</div>
				<div class="configItem">
					<b-form-input
						:id="fieldsIds.current"
						:name="fieldsIds.current"
						size="sm"
						:value="ventUnit[fieldsIds.current]"
						@input.native="setInput"
					></b-form-input>
					<label class="inputLabel" :for="fieldsIds.current">ток (А)</label>
				</div>
				<div class="configItem">
					<b-form-input
						:id="fieldsIds.power"
						:name="fieldsIds.power"
						size="sm"
						:value="ventUnit[fieldsIds.power]"
						@input.native="setInput"
					></b-form-input>
					<label class="inputLabel" :for="fieldsIds.power">мощн.&#160;(кВт)</label>
				</div>
				<b-form-select
					class="mb-3"
					:id="fieldsIds.connection"
					:name="fieldsIds.connection"
					size="sm"
					:value="ventUnit[fieldsIds.connection]"
					@change.native="setSelect"
				>
					<b-form-select-option value="0">1ф-L1</b-form-select-option>
					<b-form-select-option value="1">1ф-L2</b-form-select-option>
					<b-form-select-option value="2">1ф-L3</b-form-select-option>
					<b-form-select-option value="3">3ф</b-form-select-option>
				</b-form-select>
				<div v-if="fieldsIds.reservePump">
					<b-form-checkbox
						:id="fieldsIds.reservePump"
						:name="fieldsIds.reservePump"
						:checked="ventUnit[fieldsIds.reservePump]"
						@change.native="setCheckbox"
					>
						Рез. насос
					</b-form-checkbox>
				</div>
			</div>
		</b-form-group>
	</div>
</template>

<script>
import { mutations } from '../../../store/constants'
import { mapState } from 'vuex'

export default {
	name: 'ContourEquipment',
	computed: mapState({
		currentSupply: state => state.currentSupply,
		ventUnit: state => state.ventUnits[state.currentSupply],
	}),
	props: {
		fieldsIds: {
			name: String,
			current: String,
			power: String,
			connection: String,
			reservePump: String,
		},
	},
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
.contourEquipmentContainer {
	width: 140px;
}

.configItem {
	display: flex;
	align-items: center;
	margin-bottom: 15px;
}

.group {
	color: gray;
}

.fieldsWrapper {
	color: black;
	font-size: 12px;
}

.inputLabel {
	white-space: nowrap;
	padding-left: 10px;
}
</style>
