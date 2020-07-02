<template>
	<div class="supplyContainer">
		<Scheme />
		<Modules />
	</div>
</template>

<script>
// import MotorCheckboxes from './components/MotorCheckboxes.vue'
import Modules from './components/Modules.vue'
import Scheme from './components/Scheme.vue'

export default {
	name: 'Supply',

	components: {
		// MotorCheckboxes,
		Modules,
		Scheme,
	},
	data() {
		return {
			status: 'not_accepted',
		}
	},
}
</script>

<style scoped></style>
