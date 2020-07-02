<template>
	<div class="schemeContainer"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Scheme',
	computed: mapState({}),

	methods: {},
}
</script>

<style scoped>
.schemeContainer {
	width: 1000px;
	height: 250px;
	background-color: white;
	background-image: url('../images/main_1.jpg');
	background-repeat: no-repeat;
}
</style>
