<template>
	<div class="motorSupplyContainer">
		<div class="fieldsWrapper">
			<div class="motorSide">
				<div class="configItem">
					<label class="inputLabel" for="C2">ток (А)</label>
					<b-form-input
						name="C2"
						size="sm"
						type="number"
						:value="ventUnit['C2']"
						@input.native="setInput"
						class="custom-input"
					></b-form-input>
				</div>
				<div class="configItem">
					<label class="inputLabel" for="C3">мощн. (кВт)</label>
					<b-form-input
						name="C3"
						size="sm"
						type="number"
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
						name="C59"
						size="sm"
						type="number"
						:value="ventUnit['C59']"
						@input.native="setInput"
						class="custom-input"
					></b-form-input>
				</div>
				<div class="configItem">
					<label class="inputLabel" for="C60">площ заслонки</label>
					<b-form-input
						name="C60"
						size="sm"
						type="number"
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
import PhaseSelector from './PhaseSelector.vue'

export default {
	name: 'MotorSupply',
	components: {
		PhaseSelector,
	},

	props: {
		ventUnit: Object,
		setField: Function,
	},

	methods: {
		setInput(event) {
			this.setField && this.setField(event)
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
