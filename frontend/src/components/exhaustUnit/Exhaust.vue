<template>
<div class="exhaustUnitContainer">
	<ExhaustScheme />
	<ExhaustCheckboxes />
</div>
</template>
<script>
import ExhaustScheme from './components/ExhaustScheme.vue'
import ExhaustCheckboxes from './components/ExhaustCheckboxes.vue'

export default {
	name: 'Exhaust',

	components: {
		ExhaustScheme,
		ExhaustCheckboxes,
	}
}
</script>
<style scoped>
.exhaustUnitContainer {
	display: flex;
	padding: 10px;
}
</style>