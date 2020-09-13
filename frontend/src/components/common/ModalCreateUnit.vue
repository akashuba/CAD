<template>
	<div class="modalCreateUnitContainer">
		<div class="unitName">
			<div class="configItem">
				<label class="inputLabel" for="unitName">
					<label class="nameLabel">
						Название установки
					</label>
					<b-form-input
					id="unitName"
					name="unitName"
					size="sm"
					:value="ventUnitName"
					@input.native="onVentUnitNameChangeLocaly"
					class="customInput"
					placeholder="Введите название установки"
					autofocus
				></b-form-input>
				</label>
			</div>
		</div>
		<div class="optionsSelector">
			<div class="byTemplate">
				<label class="tamplateLabel">Выберите шаблон</label>
				<div class="unitsList">
					<b-form-select
						class="mb-3 custom-select"
						id="unitsList"
						name="unitsList"
						:value="selectedTemplate"
						size="sm"
						:options="extendedOptions"
						@change.native="onSelectConfig"
						:select-size="5"
					>
					</b-form-select>
				</div>
			</div>
		</div>

		<div class="footer">
			<b-button
				:disabled="isButtonDisabled"
				class="mt-3"
				variant="primary"
				@click="onAddButtonClick"
				>Добавить</b-button
			>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ModalCreateUnit',

	props: {
		options: Array,
		createVentUnit: Function,
	},

	data() {
		return {
			selectedOption: null,
			ventUnitName: '',
			selectedTemplate: '',
		}
	},

	methods: {
		onVentUnitNameChangeLocaly(event) {
			this.ventUnitName = event.target.value
		},

		onSelectConfig() {
			this.selectedTemplate = event.target.value
			this.selectedOption = event.target.value
		},

		onSelectClick() {
			this.selectedTemplate = event.target.value
			this.selectedOption = event.target.value
		},

		onAddButtonClick() {
			this.createVentUnit(this.ventUnitName, this.selectedTemplate)
		},
	},

	computed: {
		isButtonDisabled() {
			return this.ventUnitName.length < 1
		},

		extendedOptions() {
			return [{ value: '', text: 'новая конфигурация' }, ...this.options]
		},
	},
}
</script>
<style scoped>
.modalCreateUnitContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.optionsSelector {
	width: 100%;
}

.byTemplate {
	align-self: center;
	border: 1px solid transparent;
	border-radius: 3px;
}

.configItem {
	display: flex;
	align-items: center;
	text-align: left;
}

.inputLabel {
	width: 100%;
	margin-bottom: 0;
}

.unitName {
	width: 100%;
	text-align: center;
	margin-bottom: 20px;
}

.footer {
	text-align: center;
}

.tamplateLabel,
.nameLabel {
	font-size: 14px;
}
</style>
