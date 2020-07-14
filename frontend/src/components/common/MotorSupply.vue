<template>
	<div class="motorSupplyContainer">
		<div class="fieldsWrapper">
			<div class="motorSide">
				<div class="configItem">
					<label class="inputLabel" for="C2">ток (А)</label>
					<b-form-input
						id="C2"
						name="C2"
						size="sm"
						:value="ventUnit['C2']"
						@input.native="setInput"
						class="custom-input"
					></b-form-input>
				</div>
				<div class="configItem">
					<label class="inputLabel" for="C3">мощн. (кВт)</label>
					<b-form-input
						id="C3"
						name="C3"
						size="sm"
						:value="ventUnit['C3']"
						@input.native="setInput"
						class="custom-input"
					></b-form-input>
				</div>
				<div class="phaseSelector">
					<PhaseSelector selectId="C4" :selectValue="ventUnit['C4']" />
				</div>
			</div>

			<div class="cableSide">
				<div class="configItem">
					<label class="inputLabel" for="C59">длинна кабеля</label>
					<b-form-input
						id="C59"
						name="C59"
						size="sm"
						:value="ventUnit['C59']"
						@input.native="setInput"
						class="custom-input"
					></b-form-input>
				</div>
				<div class="configItem">
					<label class="inputLabel" for="C60">площ заслонки</label>
					<b-form-input
						id="C60"
						name="C60"
						size="sm"
						:value="ventUnit['C60']"
						@input.native="setInput"
						class="custom-input"
					></b-form-input>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mutations } from '../../store/constants'
import { mapState } from 'vuex'
import PhaseSelector from './PhaseSelector.vue'

export default {
	name: 'MotorSupply',
	components: {
		PhaseSelector,
	},

	computed: mapState({
		currentSupply: (state) => state.currentSupply,
		ventUnit: (state) => state.ventUnits[state.currentSupply],
	}),

	methods: {
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
.motorSupplyContainer {
	width: 230px;
	margin-bottom: 10px;
}

.configItem {
	/* display: flex;
	align-items: center; */
	text-align: left;
	margin-bottom: 5px;
}

.fieldsWrapper {
	display: flex;
	font-size: 12px;
}

.motorSide {
	width: 110px;
	flex: 0 0 110px;
}

.cableSide {
	margin-left: auto;
	flex: 0 0 95px;
}

.inputLabel {
	/* white-space: nowrap; */
	padding-left: 10px;
	margin-bottom: 0;
}

.custom-input {
	width: 50px;
	font-size: 12px;
	padding: 2px 4px;
	height: 24px;
}

.phaseSelector {
	margin-top: 15px;
}
</style>
