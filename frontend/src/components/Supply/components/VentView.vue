<template>
	<div class="ventViewContainer"></div>
</template>

<script>
import { mutations } from '../../../store/constants'
import { mapState } from 'vuex'

export default {
	name: 'VentView',
	computed: mapState({}),
	// props: {
	// 	msg: String,
	// },
	methods: {},
}
</script>

<style scoped>
	.ventViewContainer {
		width: 1200px;
		height: 320px;
		background-color: white;
	}
</style>
