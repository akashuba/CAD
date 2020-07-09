<template>
	<div class="ventUnitsListContainer">
        <div>{{title}}</div>
		<div class="fieldsWrapper">
            
			<div class="configItem">
				<label class="inputLabel" for="C2">ток (А)</label>
				<b-form-input
					id="C2"
					name="C2"
					size="sm"
					:value="ventUnit['C2']"
					@input.native="setInput"
					class="custom-input"
				></b-form-input>
			</div>
			<div class="configItem">
				<label class="inputLabel" for="C3">мощн. (кВт)</label>
				<b-form-input
					id="C3"
					name="C3"
					size="sm"
					:value="ventUnit['C3']"
					@input.native="setInput"
					class="custom-input"
				></b-form-input>
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
	width: 230px;
}

.configItem {
	/* display: flex;
	align-items: center; */
	text-align: left;
	margin-bottom: 10px;
}

.fieldsWrapper {
	display: flex;
	font-size: 12px;
}

.inputLabel {
	/* white-space: nowrap; */
	padding-left: 10px;
}

.custom-input {
	width: 50px;
	font-size: 12px;
	padding: 2px 4px;
}
</style>
