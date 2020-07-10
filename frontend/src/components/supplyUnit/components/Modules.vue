<template>
	<div class="modulesContainer">
		<Module :options="options.contour1" moduleId="C11" :contourOrder="contourOrder.FIRST" />
		<Module :options="options.contour2" moduleId="C21" :contourOrder="contourOrder.SECOND" />
		<Module :options="options.contour3" moduleId="C31" :contourOrder="contourOrder.THIRD" />
		<Module :options="options.contour4" moduleId="C41" :contourOrder="contourOrder.FROURTH" />
		<Module :options="options.contour5" moduleId="C51" :contourOrder="contourOrder.FIFTH" />
	</div>
</template>

<script>
// import { mutations } from '../../../store/constants'
// import { mapState } from 'vuex'
import Module from './Module.vue'
import { contourOrder } from '../constants'

export default {
	name: 'Modules',
	components: {
		Module,
	},

	created() {
		this.contourOrder = contourOrder
	},

	data: function() {
		return {
			options: {
				contour1: [
					{ value: 0, text: 'нет' },
					{ value: 1, text: 'нагрев 1 конт.' },
					{ value: 2, text: 'рекуп. ротор.' },
					{ value: 3, text: 'рекуп. гликоль' },
					{ value: 4, text: 'рециркуляция' },
					{ value: 5, text: 'электронагрев' },
				],
				contour2: [
					{ value: 0, text: 'нет' },
					{ value: 1, text: 'нагрев 1 конт.' },
					{ value: 2, text: 'охлажд. вода' },
					{ value: 3, text: 'охлажд. фреон' },
					{ value: 4, text: 'рециркуляция' },
					{ value: 5, text: 'электронагрев' },
				],
				contour3: [
					{ value: 0, text: 'нет' },
					{ value: 1, text: 'нагрев 2 конт.' },
					{ value: 2, text: 'охлажд. вода' },
					{ value: 3, text: 'охлажд. фреон' },
				],
				contour4: [
					{ value: 0, text: 'нет' },
					{ value: 1, text: 'нагрев 2 конт.' },
					{ value: 2, text: 'пароувлаж.' },
					{ value: 3, text: 'камера орошен.' },
				],
				contour5: [
					{ value: 0, text: 'нет' },
					{ value: 1, text: 'нагрев 2 конт.' },
					{ value: 2, text: 'пароувлаж.' },
					{ value: 3, text: 'камера орошен.' },
				],
			},
		}
	},
}
</script>

<style scoped>
.modulesContainer {
	width: 655px;
	display: flex;
	margin-right: 40px;
}
</style>
