<template>
	<div class="ventUnitsListContainer">
		<div class="title">{{ title }}</div>
		<div class="fieldsWrapper">
			<div class="unitsList">
				<b-form-select
					class="mb-3 custom-select"
					id=""
					name=""
					size="sm"
					@change.native="setSelect"
					:select-size="5"
				>
					<b-form-select-option value="0">П1</b-form-select-option>
					<b-form-select-option value="1">П2</b-form-select-option>
					<b-form-select-option value="1">П3</b-form-select-option>
				</b-form-select>
			</div>
			<div class="controls">
				<div class="configItem">
					<b-form-input
						id="C1"
						name="C1"
						size="sm"
						:value="ventUnit['C1']"
						@input.native="setInput"
						class="custom-input"
					></b-form-input>
					<label class="inputLabel" for="C1">название системы</label>
				</div>
				<b-button size="sm" variant="outline-dark" class="button">добавить</b-button>
				<b-button size="sm" variant="outline-dark" class="button">преименовать</b-button>
				<b-button size="sm" variant="outline-danger" class="button">удалить</b-button>
			</div>
		</div>
	</div>
</template>

<script>
import { mutations } from '../../store/constants'
import { mapState } from 'vuex'

export default {
	name: 'VentUnitsList',

	props: {
		title: String,
	},

	computed: mapState({
		currentSupply: (state) => state.currentSupply,
		ventUnit: (state) => state.ventUnits[state.currentSupply],
	}),

	methods: {
		setInput(event) {
			this.$store.commit(mutations.SET_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
		},
		setSelect(event) {
			this.$store.commit(mutations.SET_FIELD, {
				unit: event.target.name,
				data: `${event.target.value}`,
			})
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

.inputLabel {
	padding-left: 10px;
}

.custom-input {
	width: 50px;
	font-size: 12px;
	padding: 2px 4px;
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
}

.button {
	margin-bottom: 5px;
}

</style>
