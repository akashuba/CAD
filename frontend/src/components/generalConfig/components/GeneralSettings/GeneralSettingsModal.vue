<template>
	<div class="container">
		<b-tabs content-class="mt-3">
			<b-tab title="Общие настройки" active>
				<GeneralSettings />
			</b-tab>
			<b-tab title="Теги обозначений">
				<TagNames />
			</b-tab>
			<b-tab title="Комплектующие">
				<Accessories />
			</b-tab>
		</b-tabs>
		<div class="footer">
			<b-button class="mt-3" variant="primary" @click="onOkClick">Ок</b-button>
		</div>
	</div>
</template>
<script>
import GeneralSettings from './GeneralSettings.vue';
import TagNames from './TagNames.vue';
import Accessories from './Accessories.vue';

export default {
	name: 'GeneralSettingsModal',

	components: {
		GeneralSettings,
		TagNames,
		Accessories,
    },
    
    // props: {
	// 	closeModal: Function,
	// },

	methods: {
		onOkClick() {
			this.$emit('okClick')
		},
	},
};
</script>
<style scoped>
.footer {
	display: flex;
	justify-content: center;
	border-top: 1px solid rgb(206, 206, 206);
}
</style>
