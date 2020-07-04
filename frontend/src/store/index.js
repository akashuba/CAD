import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentSupply: 'R1',
		currentExhaust: 'R10',
		ventUnits: {
			R1: {
				C1: '',
				C2: false,
				C3: null,
				C5: false,
				C8: false,
				C9: false,
				C10: false,
				C11: '0',
				C15: '0',
				C20: false,
				C21: '0',
				C25: '0',
				C31: '0',
				C41: '0',
				C45: '0',
				C51: '0',
				C55: '0',
			},
		},
	},
	mutations: {
		[mutations.SET_FIELD](state, payload) {
			state.ventUnits[state.currentSupply][payload.unit] = payload.data
		},
	},
	actions: {},
	modules: {},
	getters: {
		ventUnits: state => state.ventUnits,
		ventSupplyUnit: state => state.ventUnits[state.currentSupply],
		ventExhaustUnit: state => state.ventUnits[state.currentExhaust],
	},
})
