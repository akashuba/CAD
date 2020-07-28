<template>
	<div class="exhaustCheckboxes">
		<b-form-checkbox
			name="C18"
			size="sm"
			class="exhaustCheckbox"
			:checked="ventUnit['C18']"
			@change.native="setCheckbox"
		>
			датчик влажности
		</b-form-checkbox>
		<b-form-checkbox
			name="C17"
			size="sm"
			class="exhaustCheckbox"
			:checked="ventUnit['C17']"
			@change.native="setCheckbox"
		>
			датчик температуры
		</b-form-checkbox>
		<b-form-checkbox
			name="C9"
			size="sm"
			class="exhaustCheckbox"
			:checked="ventUnit['C9']"
			@change.native="setCheckbox"
		>
			воздушная заслонка
		</b-form-checkbox>
		<b-form-checkbox

			name="C8"
			size="sm"
			class="exhaustCheckbox"
			:checked="ventUnit['C8']"
			@change.native="setCheckbox"
		>
			диф. реле вентилятора
		</b-form-checkbox>
		<b-form-checkbox
			name="C5"
			size="sm"
			class="exhaustCheckbox"
			:checked="ventUnit['C5']"
			@change.native="setCheckbox"
		>
			частотный преобразователь
		</b-form-checkbox>
		<b-form-checkbox
			name="C6"
			size="sm"
			class="exhaustCheckbox"
			:checked="ventUnit['C6']"
			@change.native="setCheckbox"
		>
			резервный двигатель
		</b-form-checkbox>
		<b-form-checkbox
			name="C7"
			size="sm"
			class="exhaustCheckbox"
			:checked="ventUnit['C7']"
			@change.native="setCheckbox"
		>
			выключатель безопасности
		</b-form-checkbox>
	</div>
</template>
<script>
import { mutations } from '../../../store/constants'

export default {
	name: 'ExhaustCheckboxes',

	computed: {
		ventUnit() {
			return this.$store.getters.ventExhaustUnit
		},
	},

	methods: {
		setCheckbox(event) {
			this.$store.commit(mutations.SET_EXHAUST_FIELD, {
				unit: event.target.name,
				data: event.target.checked,
			})
		},
	},
}
</script>
<style scoped>
.exhaustCheckboxes {
	width: 140px;
	padding-left: 10px;
}

.exhaustCheckbox {
	margin-bottom: 5px;
	text-align: left;
}
</style>
