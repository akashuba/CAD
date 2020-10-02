<template>
	<div class="container">
		<div class="checkboxes">
			<b-form-checkbox
				class="checkbox"
				id="C2"
				name="C2"
				:checked="!!settings['C2']"
				@change.native="setCheckbox"
			>
				Два ввода
			</b-form-checkbox>
			<b-form-checkbox
				class="checkbox"
				id="C3"
				name="C3"
				:checked="!!settings['C3']"
				@change.native="setCheckbox"
			>
				ИБП
			</b-form-checkbox>
			<!-- <b-form-checkbox class="checkbox" id="reserve_1" name="reserve_1">
				Обратный сигнал заслонок
			</b-form-checkbox>
			<b-form-checkbox class="checkbox" id="reserve_2" name="reserve_2">
				Обратный сигнал клапанов
			</b-form-checkbox> -->
		</div>

		<b-form-group label="Питание клапанов">
			<b-form-radio-group
				@change.native="setRadio"
				id="valve_voltage"
				name="C9"
				:checked="settings['C9']"
			>
				<b-form-radio value="24">~24V</b-form-radio>
				<b-form-radio value="220">~220V</b-form-radio>
			</b-form-radio-group>
		</b-form-group>
	</div>
</template>
<script>
import { mutations } from '../../../../store/constants';

export default {
	name: 'GeneralSettings',

	data() {
		return {
			selected: '220',
		};
	},

	computed: {
		settings() {
			return this.$store.getters.generalSettings;
		},
	},

	methods: {
		setCheckbox(event) {
			this.$store.commit(mutations.SET_GENERAL_CONFIG, {
				unit: event.target.name,
				data: event.target.checked,
			});
		},

		setRadio(event) {
			this.$store.commit(mutations.SET_GENERAL_CONFIG, {
				unit: event.target.name,
				data: event.target.value,
			});
		},
	},
};
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
