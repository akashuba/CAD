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
						class="custom-input"
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
						class="custom-input"
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
						class="custom-input"
					></b-form-input>
					<label class="inputLabel" :for="fieldsIds.power">мощн.&#160;(кВт)</label>
				</div>

				<PhaseSelector
					:selectId="fieldsIds.connection"
					:selectValue="ventUnit[fieldsIds.connection]"
				/>

				<div v-if="fieldsIds.reservePump" class="reservePump">
					<b-form-checkbox
						class="reservePumpCheckbox"
						size="sm"
						:id="fieldsIds.reservePump"
						:name="fieldsIds.reservePump"
						:checked="!!ventUnit[fieldsIds.reservePump]"
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
import PhaseSelector from '../../common/PhaseSelector.vue'

export default {
	name: 'ContourEquipment',
	components: {
		PhaseSelector,
	},

	computed: {
		ventUnit() {
			return this.$store.getters.ventSupplyUnit
		},
	},

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
			this.$store.commit(mutations.SET_SUPPLY_FIELD, {
				unit: event.target.name,
				data: event.target.checked,
			})
		},
		setInput(event) {
			this.$store.commit(mutations.SET_SUPPLY_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},
		setSelect(event) {
			this.$store.commit(mutations.SET_SUPPLY_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},
	},
}
</script>

<style scoped>
.contourEquipmentContainer {
	width: 100%;
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

.custom-input {
	font-size: 12px;
	padding: 2px 4px;
	height: 24px;
}

.reservePump {
	line-height: 24px;
	text-align: left;
	margin-top: 10px;
}

.reservePumpCheckbox label {
	font-size: 12px;
}
</style>
