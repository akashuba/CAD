<template>
	<div class="generalConfigWrapper">
		<div class="generalConfig">
			<b-button size="sm" variant="outline-dark" class="button" @click="showGeneralConfigModal"
				>общие настройки</b-button
			>
		</div>
		<div class="createDrawings">
			<b-button size="sm" variant="outline-dark" class="button" @click="showUserDataModal"
				>Создать чертежи</b-button
			>
		</div>
		<div class="exportImport">
			<input
				accept=".xml"
				style="display: none"
				@change="onUploadXmlClick"
				type="file"
				name="uploadXml"
				id="uploadXml"
			/>
			<b-button size="sm" variant="outline-dark" @click="importClick" class="button"
				>Импортировать конфигурации</b-button
			>
			<b-button size="sm" variant="outline-dark" class="button" @click="saveConfigs"
				>Сохранить конфигурации</b-button
			>
			<b-button size="sm" variant="outline-dark" class="button" @click="resetConfig"
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
			<GeneralSettingsModal @okClick="onOkClick" />
		</b-modal>
		<b-modal
			ref="modalUserData"
			id="modalUserData"
			title="Создать чертежи"
			ok-title="сохранить"
			cancel-title="закрыть"
			hide-footer
			size="md"
		>
			<UserDataModal @getDrawings="onGetDwawingsClick" />
		</b-modal>
	</div>
</template>
<script>
import GeneralSettingsModal from './components/GeneralSettings/GeneralSettingsModal.vue';
import UserDataModal from './components/UserData/UserDataModal.vue';
import { downloadXml, uploadXml } from '../../../lib/lib';
import { mutations } from '../../store/constants';

export default {
	name: 'GeneralConfig',

	components: {
		GeneralSettingsModal,
		UserDataModal,
	},

	methods: {
		showGeneralConfigModal() {
			this.$refs['modalGeneralConfig'].show();
		},

		showUserDataModal() {
			this.$refs['modalUserData'].show();
		},

		onOkClick() {
			this.$refs['modalGeneralConfig'].hide();
		},

		onGetDwawingsClick(data) {
			console.log('onGetDwawingsClick ',JSON.stringify(data));

			this.$refs['modalUserData'].hide();
		},

		saveConfigs() {
			downloadXml(this.$store.getters.state);
		},

		resetConfig() {
			this.$store.commit(mutations.RESET_CONFIG);
		},

		importClick() {
			document.getElementById('uploadXml').click();
		},

		onUploadXmlClick(data) {
			uploadXml(data, this.uploadXMLMutation);
		},

		uploadXMLMutation(payload) {
			this.$store.commit(mutations.UPLOAD_XML, payload);
		},
	},
};
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

.createDrawings {
	display: flex;
	flex-direction: column;
	margin-right: 20px;
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
