<template>
	<div class="supplyContainer">
		<MotorCheckboxes />
	</div>
</template>

<script>
import MotorCheckboxes from './components/MotorCheckboxes.vue'

export default {
	name: 'Supply',
	// props: {
	// 	msg: String,
	// },
	components: {
		MotorCheckboxes,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
