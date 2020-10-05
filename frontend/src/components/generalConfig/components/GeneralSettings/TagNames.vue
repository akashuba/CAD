<template>
	<div class="container">
		<b-form-group label="Обозначение устройства">
			<div class="inputString">
				система
				<b-form-input
					name="C6"
					size="sm"
					:value="settings['C6']"
					@input.native="setInput"
					class="custom-input"
				></b-form-input>
				обозначение устройства
			</div>
		</b-form-group>
		<b-form-group label="Обозначение кабеля">
			<div class="inputString">	
				<b-form-input
					name="C7"
					size="sm"
					:value="settings['C7']"
					@input.native="setInput"
					class="custom-input string-start"
				></b-form-input>
				система
				<b-form-input
					name="C8"
					size="sm"
					:value="settings['C8']"
					@input.native="setInput"
					class="custom-input"
				></b-form-input>
				обозначение устройства
			</div>
		</b-form-group>
	</div>
</template>
<script>
import { mutations } from '../../../../store/constants';

export default {
	name: 'TagNames',

	computed: {
		settings() {
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
    .inputString {
        display: flex;
        align-items: center;
    }
    
    .custom-input {
        flex-basis: 75px;
        margin-right: 10px;
        margin-left: 10px;
    }

    .string-start {
        margin-left: 0;
    }
</style>
