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
			<b-button size="sm" variant="outline-dark" class="button"
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
		>
			<div>modal</div>
		</b-modal>
	</div>
</template>
<script>
export default {
	name: 'GeneralConfig',

	methods: {
		showModal() {
			this.$refs['modalGeneralConfig'].show()
		},
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
</style>
