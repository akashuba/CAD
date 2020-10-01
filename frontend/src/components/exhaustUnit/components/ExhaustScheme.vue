<template>
	<div class="exhaustScheme">
		<div class="schemeContainer schemeBgImg1" />
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
export default {
	name: 'ExhaustScheme',

	computed: {
		difRelayCheckbox() {
			return this.$store.getters.ventExhaustUnit['C8']
		},
		airDamper() {
			return this.$store.getters.ventExhaustUnit['C9']
		},
		frequencyСonverter() {
			return this.$store.getters.ventExhaustUnit['C5']
		},
	},
}
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
</style>
