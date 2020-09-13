<template>
	<div class="container">
		<div class="checkboxes">
			<b-form-checkbox
				class="checkbox"
				id="C2"
				name="C2"
				:checked="ventUnit['C2']"
				@change.native="setCheckbox"
			>
				Два ввода
			</b-form-checkbox>
			<b-form-checkbox
				class="checkbox"
				id="C3"
				name="C3"
				:checked="ventUnit['C3']"
				@change.native="setCheckbox"
			>
				ИБП
			</b-form-checkbox>
			<b-form-checkbox
				class="checkbox"
				id="reserve_1"
				name="reserve_1"
			>
				Обратный сигнал заслонок
			</b-form-checkbox>
			<b-form-checkbox
				class="checkbox"
				id="reserve_2"
				name="reserve_2"
			>
				Обратный сигнал клапанов
			</b-form-checkbox>
		</div>

		<b-form-group label="Питание клапанов">
			<b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
				<b-form-radio value="24">~24V</b-form-radio>
				<b-form-radio value="220">~220V</b-form-radio>
			</b-form-radio-group>
		</b-form-group>
	</div>
</template>
<script>
export default {
	name: 'GeneralSettings',

	data() {
		return {
			selected: '220',
		}
	},

	computed: {
		ventUnit() {
			return this.$store.getters.ventSupplyUnit
		},
	},

	methods: {
		setCheckbox(event) {
			console.log(event)
			// this.$store.commit(mutations.SET_SUPPLY_FIELD, {
			// 	unit: event.target.name,
			// 	data: event.target.checked,
			// })
		},
	},
}
</script>
<style scoped>
.container {
	padding: 10px;
}

.checkboxes {
	margin-bottom: 20px;
}

.checkbox {
	margin-bottom: 10px;
}

.checkbox:last-child {
	margin-bottom: 0;
}

legend {
	font-weight: 600;
}
</style>
