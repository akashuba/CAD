<template>
	<div class="ventUnitsListContainer">
		<div class="title">{{ title }}</div>
		<div class="fieldsWrapper">
			<div class="unitsList">
				<b-form-select
					class="mb-3 custom-select"
					id="unitsList"
					name="unitsList"
					size="sm"
					:value="currentVentUnitName"
					:options="options"
					@change.native="onSelectCurrentUnit"
					:select-size="5"
				>
				</b-form-select>
			</div>
			<div class="controls">
				<b-button
					size="sm"
					variant="outline-dark"
					class="button"
					@click="onAddButtonClick"
					>добавить</b-button
				>
				<b-button
					size="sm"
					variant="outline-danger"
					class="button"
					@click="onRemoveVentUnit"
					>удалить</b-button
				>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	name: 'VentUnitsList',

	props: {
		title: String,
		options: Array,
		currentVentUnitName: String,
		showModal: Function,
		selectCurrentUnit: Function,
		createVentUnit: Function,
		removeVentUnit: Function,
	},

	methods: {
		onSelectCurrentUnit(event) {
			this.selectCurrentUnit && this.selectCurrentUnit(event)
		},

		onCreateVentUnit(name, template) {
			this.createVentUnit && this.createVentUnit(name, template)
		},

		onRemoveVentUnit() {
			this.removeVentUnit && this.removeVentUnit()
		},

		onAddButtonClick() {
			this.showModal && this.showModal()
		},
	},
}
</script>

<style scoped>
.ventUnitsListContainer {
	width: 250px;
}

.configItem {
	display: flex;
	align-items: center;
	text-align: left;
	margin-bottom: 5px;
}

.fieldsWrapper {
	display: flex;
	justify-content: space-between;
	font-size: 12px;
}

.unitsList {
	flex: 0 0 100px;
}

.controls {
	flex: 0 0 115px;
	display: flex;
	flex-direction: column;
}

.title {
	font-size: 14px;
	margin-bottom: 5px;
}

.button {
	margin-bottom: 5px;
}
</style>
