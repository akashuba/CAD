<template>
	<div class="supplyContainer">
		<div class="sypplyUpperBlock">
			<Scheme />
			<MotorCheckboxes />
		</div>
		<div class="lowerBlock">
			<SensorsCheckboxes />
			<Modules />
			<div>
				<MotorSupply />
				<VentUnitsList title="приточные системы:"/>
			</div>
		</div>
	</div>
</template>

<script>
import MotorCheckboxes from './components/MotorCheckboxes.vue'
import SensorsCheckboxes from './components/SensorsCheckboxes.vue'
import Modules from './components/Modules.vue'
import Scheme from './components/Scheme.vue'
import MotorSupply from '../common/MotorSupply.vue'
import VentUnitsList from '../common/VentUnitsList.vue'

export default {
	name: 'Supply',

	components: {
		MotorCheckboxes,
		Modules,
		Scheme,
		SensorsCheckboxes,
		MotorSupply,
		VentUnitsList,
	},
	data() {
		return {
			status: 'not_accepted',
		}
	},
}
</script>

<style scoped>
.supplyContainer {
	padding: 10px;
}

.sypplyUpperBlock,
.lowerBlock {
	display: flex;
}

.lowerBlock {
	padding-top: 10px;
}
</style>
