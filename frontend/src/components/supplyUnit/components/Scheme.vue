<template>
	<div>
		<div class="schemeContainer schemeBgImg2">
			<div
				class="contoureImg contourOne"
				:style="{ backgroundImage: `url(${images.contourOne[contourOneSelect]})` }"
			></div>
			<div
				class="contoureImg contourTwo"
				:style="{ backgroundImage: `url(${images.contourTwo[contourTwoSelect]})` }"
			></div>
			<div
				class="contoureImg contourThree"
				:style="{ backgroundImage: `url(${images.contourThree[contourThreeSelect]})` }"
			></div>
			<div
				class="contoureImg contourFour"
				:style="{ backgroundImage: `url(${images.contourFour[contourFourSelect]})` }"
			></div>
			<div
				class="contoureImg contourFive"
				:style="{ backgroundImage: `url(${images.contourFive[contourFiveSelect]})` }"
			></div>
			<div
				class="frequencyСonverter"
				:style="{ backgroundImage: `url(${images[frequencyСonverterSelect]})` }"
			></div>
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
	</div>
</template>

<script>
import { mutations } from '../../../store/constants';

export default {
	name: 'Scheme',
	data() {
		return {
			images: {
				contourOne: {
					['0']: '',
					['1']: require('../../../assets/vent/1_cont.jpg'),
					['2']: require('../../../assets/vent/rekup_rotor.jpg'),
					['3']: require('../../../assets/vent/rekup_afreez.jpg'),
					['4']: require('../../../assets/vent/recircul.jpg'),
					['5']: require('../../../assets/vent/elektr.jpg'),
				},
				contourTwo: {
					['0']: '',
					['1']: require('../../../assets/vent/1_cont.jpg'),
					['2']: require('../../../assets/vent/ohl.jpg'),
					['3']: require('../../../assets/vent/ohl_freon.jpg'),
					['4']: require('../../../assets/vent/recircul.jpg'),
					['5']: require('../../../assets/vent/elektr.jpg'),
				},
				contourThree: {
					['0']: '',
					['1']: require('../../../assets/vent/2_cont.jpg'),
					['2']: require('../../../assets/vent/ohl.jpg'),
					['3']: require('../../../assets/vent/ohl_freon.jpg'),
				},
				contourFour: {
					['0']: '',
					['1']: require('../../../assets/vent/2_cont.jpg'),
					['2']: require('../../../assets/vent/uvl2.jpg'),
					['3']: require('../../../assets/vent/uvl.jpg'),
				},
				contourFive: {
					['0']: '',
					['1']: require('../../../assets/vent/2_cont.jpg'),
					['2']: require('../../../assets/vent/uvl2.jpg'),
					['3']: require('../../../assets/vent/uvl.jpg'),
				},
				frequencyСonverter: require('../../../assets/vent/v_chp.png'),
			},
		};
	},

	methods: {
		setInput(event) {
			this.$store.commit(mutations.SET_SUPPLY_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			});
		},
	},

	computed: {
		ventUnit() {
			return this.$store.getters.ventSupplyUnit;
		},

		fcCheckbox() {
			return this.$store.getters.ventSupplyUnit['C5'];
		},

		contourOneSelect() {
			return this.$store.getters.ventSupplyUnit['C11'];
		},

		contourTwoSelect() {
			return this.$store.getters.ventSupplyUnit['C21'];
		},

		contourThreeSelect() {
			return this.$store.getters.ventSupplyUnit['C31'];
		},

		contourFourSelect() {
			return this.$store.getters.ventSupplyUnit['C41'];
		},

		contourFiveSelect() {
			return this.$store.getters.ventSupplyUnit['C51'];
		},

		frequencyСonverterSelect() {
			return this.fcCheckbox ? 'frequencyСonverter' : '';
		},
	},
};
</script>

<style scoped>
.schemeContainer {
	width: 934px;
	height: 250px;
	position: relative;
	background-repeat: no-repeat;
	background-color: white;
}

.schemeBgImg1 {
	background-image: url('../../../assets/vent/main_1.jpg');
}

.schemeBgImg2 {
	background-image: url('../../../assets/vent/main_2.jpg');
}

.contoureImg {
	width: 64px;
	height: 162px;
	position: absolute;
	top: 28px;
}

.contourOne {
	left: 160px;
}

.contourTwo {
	left: 305px;
}

.contourThree {
	left: 450px;
}

.contourFour {
	left: 590px;
}

.contourFive {
	left: 730px;
}

.frequencyСonverter {
	position: absolute;
	height: 69px;
	width: 58px;
	top: 105px;
	left: 838px;
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
