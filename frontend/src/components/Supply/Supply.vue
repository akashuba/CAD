<template>
	<div class="supplyContainer">
		<div class="sypplyUpperBlock">
			<Scheme />
			<MotorCheckboxes />
		</div>
		<div class="lowerBlock">
		<SensorsCheckboxes />
			<Modules />
		</div>
	</div>
</template>

<script>
import MotorCheckboxes from './components/MotorCheckboxes.vue'
import SensorsCheckboxes from './components/SensorsCheckboxes.vue'
import Modules from './components/Modules.vue'
import Scheme from './components/Scheme.vue'

export default {
	name: 'Supply',

	components: {
		MotorCheckboxes,
		Modules,
		Scheme,
		SensorsCheckboxes,
	},
	data() {
		return {
			status: 'not_accepted',
		}
	},
}
</script>

<style scoped>
	.sypplyUpperBlock, .lowerBlock {
		display: flex;
	}
</style>
