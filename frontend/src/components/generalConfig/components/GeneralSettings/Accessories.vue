<template>
	<div class="container">
		<b-container class="bv-example-row">
			<b-row>
				<b-col>
					<div class="selector">
						<div class="selectName">Корпуса щитов:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C10"
							name="C10"
							:options="options.boards"
							:value="settings['C10']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Автоматические выключатели:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C11"
							name="C11"
							:options="options.autoSwitch"
							:value="settings['C11']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Автоматы защиты двигателя:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C12"
							name="C12"
							:options="options.safeSwitch"
							:value="settings['C12']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Контакторы:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C13"
							name="C13"
							:options="options.contactor"
							:value="settings['C13']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Датчики температуры:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C18"
							name="C18"
							:options="options.temperatureSensor"
							:value="settings['C18']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Датчики перепада давления:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C19"
							name="C19"
							:options="options.pressureSensor"
							:value="settings['C19']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Приводы клапанов:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C21"
							name="C21"
							:options="options.valveActuator"
							:value="settings['C21']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
				</b-col>

				<b-col>
					<div class="selector">
						<div class="selectName">Промежуточные реле:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C14"
							name="C14"
							:options="options.relay"
							:value="settings['C14']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Светосигнальная арматура:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C15"
							name="C15"
							:options="options.signalLamp"
							:value="settings['C15']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Клеммы:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C16"
							name="C16"
							:options="options.terminals"
							:value="settings['C16']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Частотные преобразователи:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C17"
							name="C17"
							:options="options.frequencyСonverters"
							:value="settings['C17']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Термостаты:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C22"
							name="C22"
							:options="options.thermostat"
							:value="settings['C22']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
					<div class="selector">
						<div class="selectName">Приводы воздушных заслонок:</div>
						<b-form-select
							class="custom-input"
							size="sm"
							id="C20"
							name="C20"
							:options="options.airDamperDrive"
							:value="settings['C20']"
							@change.native="setSelect"
						>
						</b-form-select>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<script>
import { mutations } from '../../../../store/constants';

export default {
	name: 'Accessories',

	computed: {
		settings() {
			return this.$store.getters.generalSettings;
		},
	},

	methods: {
		setSelect(event) {
			this.$store.commit(mutations.SET_GENERAL_CONFIG, {
				unit: event.target.name,
				data: `${event.target.value}`,
			});
		},
	},

	data: function() {
		return {
			options: {
				boards: [
					{ value: 0, text: 'ПРОВЕНТО' },
					{ value: 1, text: 'ABB' },
					{ value: 2, text: 'Schneider' },
				],
				autoSwitch: [
					{ value: 0, text: 'Schneider' },
					{ value: 1, text: 'ABB' },
					{ value: 2, text: 'IEK' },
					{ value: 3, text: 'DEKraft' },
				],
				safeSwitch: [
					{ value: 0, text: 'Schneider' },
					{ value: 1, text: 'ABB' },
					{ value: 2, text: 'IEK' },
					{ value: 3, text: 'DEKraft' },
				],
				contactor: [
					{ value: 0, text: 'Schneider' },
					{ value: 1, text: 'ABB' },
					{ value: 2, text: 'IEK' },
					{ value: 3, text: 'DEKraft' },
				],
				temperatureSensor: [
					{ value: 0, text: 'ОВЕН' },
					{ value: 1, text: 'Regin' },
					{ value: 2, text: 'Polar Bear' },
				],
				pressureSensor: [
					{ value: 0, text: 'ОВЕН' },
					{ value: 1, text: 'Regin' },
					{ value: 2, text: 'Polar Bear' },
				],
				valveActuator: [
					{ value: 0, text: 'Danfoss' },
					{ value: 1, text: 'Schneider' },
				],
				relay: [
					{ value: 0, text: 'ABB' },
					{ value: 1, text: 'Schneider' },
					{ value: 2, text: 'Finder' },
				],
				signalLamp: [
					{ value: 0, text: 'ABB' },
					{ value: 1, text: 'Schneider' },
					{ value: 2, text: 'IEK' },
					{ value: 3, text: 'MEYERTEC' },
				],
				terminals: [
					{ value: 0, text: 'ABB' },
					{ value: 1, text: 'Schneider' },
					{ value: 2, text: 'Wago' },
					{ value: 3, text: 'MEYERTEC' },
				],
				frequencyСonverters: [
					{ value: 0, text: 'ОВЕН' },
					{ value: 1, text: 'Danfoss' },
				],
				thermostat: [
					{ value: 0, text: 'ОВЕН' },
					{ value: 1, text: 'Polar Bear' },
				],
				airDamperDrive: [
					{ value: 0, text: 'Belimo' },
					{ value: 1, text: 'Polar Bear' },
				],
			},
		};
	},
};
</script>
<style scoped>
.selector {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
}

.custom-input {
	flex-basis: 120px;
}

.selectName {
	font-size: 14px;
}
</style>
