<template>
	<div class="supplyContainer">
		<Modules options  />
	</div>
</template>

<script>
// import MotorCheckboxes from './components/MotorCheckboxes.vue'
import Modules from './components/Modules.vue'

export default {
	name: 'Supply',

	components: {
		// MotorCheckboxes,
		Modules,
	},
	data() {
		return {
			status: 'not_accepted',
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
