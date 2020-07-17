<template>
	<div class="modalCreateUnitContainer">
		<div class="unitName">
			<div class="configItem">
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
				<label class="inputLabel" for="unitName">Название установки</label>
			</div>
		</div>
		<div class="optionsSelector">
			<div :class="{highlight: !selectedOption, newOne: true }" @click="onEmptyConfigClick">
				<img width="128" height="128" src="../../assets/new-file.png" />
				<p>Новые конфигурации</p>
			</div>
			<div class="byTemplate">
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
				<p>Выбрать шаблон для конфигураций</p>
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

	// updated() {
	// 	console.log('selectedOption ', this.selectedOption)
	// 	console.log('selectedTemplate ', this.selectedTemplate)
	// },

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

		onEmptyConfigClick() {
			this.selectedOption = null
			this.selectedTemplate = ''
			
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
			return	this.ventUnitName.length < 1 
		},

		extendedOptions() {
			return [{value: '', text: 'новые конфигурации'}, ...this.options]
		},
	}
}
</script>
<style scoped>
.optionsSelector {
	display: flex;
	width: 100%;
}

.newOne,
.byTemplate {
	width: 50%;
	text-align: center;
	padding: 5px;
	border: 1px solid transparent;
	border-radius: 3px;
}

.highlight {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.newOne {
	cursor: pointer;
}

.configItem {
	display: flex;
	align-items: center;
	text-align: left;
	justify-content: center;
}

.customInput {
	width: 50%;
}

.inputLabel {
	margin-left: 10px;
	margin-bottom: 0;
}

.unitName {
	text-align: center;
	margin-bottom: 30px;
}

.unitsList {
	width: 200px;
	margin: auto;
}

.footer {
	text-align: center;
}
</style>
