<template>
	<b-form @submit="onSubmit">
		<div role="group" class="field">
			<label for="input-user-name">Ваше имя:</label>
			<b-form-input
				id="input-user-name"
				v-model="form.name"
				aria-describedby="input-user-name-help input-user-name-feedback"
				required
				autofocus
				trim
			></b-form-input>
			<!-- <b-form-invalid-feedback id="input-user-name-feedback">
				Не меньше 3 символов
			</b-form-invalid-feedback> -->
			<!-- <b-form-text id="input-user-name-help">Your full name.</b-form-text> -->
		</div>
		<div role="group" class="field">
			<label for="input-user-email">Почта:</label>
			<b-form-input
				id="input-user-email"
				v-model="form.email"
				aria-describedby="input-user-email-help input-user-email-feedback"
				type="email"
				required
				trim
			></b-form-input>
			<!-- <b-form-invalid-feedback id="input-user-email-feedback">
				Не меньше 3 символов
			</b-form-invalid-feedback> -->
			<b-form-text id="input-user-email-help">Для отправки готовых чертежей</b-form-text>
		</div>
		<div role="group" class="field">
			<label for="input-project-name">Название проекта:</label>
			<b-form-input
				id="input-project-name"
				v-model="form.projectName"
				aria-describedby="input-project-name-help input-project-name-feedback"
				required
				trim
			></b-form-input>
			<!-- <b-form-invalid-feedback id="input-project-name-feedback">
				Не меньше 3 символов
			</b-form-invalid-feedback> -->
			<b-form-text id="input-project-name-help"
				>Для сохранения ваших конфигураций.</b-form-text
			>
		</div>

		<div class="footer">
			<b-button type="submit" class="mt-3" variant="primary">Отправить</b-button>
		</div>
	</b-form>
</template>
<script>
export default {
	name: 'UserDataModal',

	data() {
		return {
			form: {
				name: '',
				email: '',
				projectName: '',
			}
		};
	},

	computed: {
		// nameState() {
		// 	return this.name.length > 2 ? true : false;
		// },

		isButtonDisabled() {
			if (this.name.length > 3 && this.email.length > 3) {
				return false;
			}

			return true;
		},
	},

	methods: {
		onSubmit(event) {
			event.preventDefault();
			this.$emit('getDrawings', this.form);
		},
	},
};
</script>
<style scoped>
.field {
	margin-bottom: 15px;
}

.footer {
	display: flex;
	justify-content: center;
	border-top: 1px solid rgb(206, 206, 206);
}
</style>
