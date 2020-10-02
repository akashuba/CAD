<template>
	<div class="header">
		<div class="configItem">
			<label class="inputLabel" for="boardName">Щит автоматики</label>
			<b-form-input
				id="boardName"
				name="C1"
				size="sm"
				:value="ventUnit['C1']"
				@input.native="setInput"
				class="custom-input"
			></b-form-input>
		</div>
	</div>
</template>

<script>
import { mutations } from '../../store/constants';

export default {
	name: 'Header',

	computed: {
		ventUnit() {
			return this.$store.getters.generalSettings;
		},
	},

	methods: {
		setInput(event) {
			this.$store.commit(mutations.SET_GENERAL_CONFIG, {
				unit: event.target.name,
				data: `${event.target.value}`,
			});
		},
	},
};
</script>

<style scoped>
.header {
	height: 50px;
	vertical-align: middle;
	line-height: 50px;
}

.configItem {
	display: flex;
	align-items: center;
	margin-left: 350px;
}

.custom-input {
	flex: 0 0 120px;
	margin-left: 10px;
	text-align: center;
	font-weight: 600;
}

.inputLabel {
	margin-bottom: 0;
	font-weight: 600;
}
</style>
