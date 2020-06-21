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
				C3: null
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
	},
})
