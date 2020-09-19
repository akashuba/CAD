<template>
	<div class="generalConfigWrapper">
		<div class="generalConfig">
			<b-button size="sm" variant="outline-dark" class="button" @click="showModal"
				>общие настройки</b-button
			>
		</div>
		<div class="exportImport">
			<b-button size="sm" variant="outline-dark" class="button"
				>Импортировать конфигурации</b-button
			>
			<b-button size="sm" variant="outline-dark" class="button" @click="saveConfigs"
				>Сохранить конфигурации</b-button
			>
			<b-button size="sm" variant="outline-dark" class="button"
				>Очистить конфигурации</b-button
			>
		</div>
		<b-modal
			ref="modalGeneralConfig"
			id="modalGeneralConfig"
			title="Общие настройки"
			ok-title="сохранить"
			cancel-title="закрыть"
			hide-footer
			size="lg"
		>
			<b-tabs content-class="mt-3">
				<b-tab title="Общие настройки" active>
					<GeneralSettings />
				</b-tab>
				<b-tab title="Теги обозначений"><p>I'm the second tab</p></b-tab>
				<b-tab title="Комплектующие"><p>I'm the third tab</p></b-tab>
			</b-tabs>
			<div class="footer">
				<b-button
					class="mt-3"
					variant="primary"
					@click="onOkClick"
					>Закрыть</b-button
				>
			</div>
		</b-modal>
	</div>
</template>
<script>
import GeneralSettings from './components/GeneralSettings/GeneralSettings.vue'
import { parseTextAsXml, getXmlElement, flattenStoreBranch } from '../../../lib/lib'

export default {
	name: 'GeneralConfig',

	components: {
		GeneralSettings,
	},

	methods: {
		showModal() {
			this.$refs['modalGeneralConfig'].show()
		},

		onOkClick() {
			this.$refs['modalGeneralConfig'].hide()
		},

		saveConfigs() {
			const xmlDom = parseTextAsXml(window.XMLTemplate);
			const xmlElement = getXmlElement(xmlDom, 'R1C4');
			const storeObj = JSON.parse(JSON.stringify(this.$store.getters.state))

			console.log(xmlElement);
			console.log(storeObj);
			console.log(flattenStoreBranch(storeObj.ventUnitsSupply));
		}
	},
}
</script>
<style scoped>
.generalConfigWrapper {
	display: flex;
	width: 100%;
	padding-top: 5px;
	justify-content: flex-end;
}

.generalConfig {
	margin-right: 20px;
}

.exportImport {
	display: flex;
	flex-direction: column;
}

.button {
	margin-bottom: 5px;
	min-width: 215px;
}

.footer {
	display: flex;
	justify-content: center;
	border-top: 1px solid rgb(206, 206, 206);
}
</style>
