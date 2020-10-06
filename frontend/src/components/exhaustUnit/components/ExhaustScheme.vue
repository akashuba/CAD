<template>
	<div class="exhaustScheme">
		<div class="schemeContainer schemeBgImg1">
			<div class="configItem">
				<b-form-input
					name="C1"
					size="sm"
					:value="ventUnit['C1']"
					@input.native="setInput"
					class="custom-input"
				></b-form-input>
			</div>
		</div>
		<img
			class="frequencyСonverter"
			src="../../../assets/vent/v_chp_EF.png"
			v-show="frequencyСonverter"
			alt="frequencyСonverter"
		/>
		<img
			class="airDamper"
			src="../../../assets/vent/zaslonka.png"
			v-show="airDamper"
			alt="airDamper"
		/>
		<img
			class="difRelayCheckbox"
			src="../../../assets/vent/vyt_dp.png"
			v-show="difRelayCheckbox"
			alt="difRelayCheckbox"
		/>
	</div>
</template>
<script>
import { mutations } from '../../../store/constants';

export default {
	name: 'ExhaustScheme',

	methods: {
		setInput(event) {
			this.$store.commit(mutations.SET_EXHAUST_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			});
		},
	},

	computed: {
		ventUnit() {
			return this.$store.getters.ventExhaustUnit;
		},
		difRelayCheckbox() {
			return this.$store.getters.ventExhaustUnit['C8'];
		},
		airDamper() {
			return this.$store.getters.ventExhaustUnit['C9'];
		},
		frequencyСonverter() {
			return this.$store.getters.ventExhaustUnit['C5'];
		},
	},
};
</script>
<style scoped>
.exhaustScheme {
	position: relative;
}

.schemeContainer {
	width: 167px;
	height: 250px;
	position: relative;
	background-repeat: no-repeat;
	background-color: white;
}

.schemeBgImg1 {
	background-image: url('../../../assets/vent/vyt.jpg');
}

.frequencyСonverter {
	position: absolute;
	top: 96px;
	left: 89px;
}

.airDamper {
	position: absolute;
	top: 46px;
	left: 55px;
}

.difRelayCheckbox {
	position: absolute;
	top: 65px;
	left: 31px;
}

.configItem {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 100px;
}

.custom-input {
	text-align: center;
}
</style>
