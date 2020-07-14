import Vue from 'vue'
import Vuex from 'vuex'

import { mutations, defaultSupplyUnit } from './constants'

Vue.use(Vuex)
/* eslint-disable no-unused-vars */
export default new Vuex.Store({
	state: {
		currentSupply: 'R1',
		currentExhaust: 'R11',
		ventUnits: {
			R1: {
				...defaultSupplyUnit,
			},
		},
		supplyCount: 1,
		exhaustCount: 1,
	},
	mutations: {
		[mutations.SET_FIELD](state, payload) {
			state.ventUnits[state.currentSupply][payload.unit] = payload.data
		},

		[mutations.SELECT_CURRENT_SUPPLY](state, payload) {
			state.currentSupply = payload.currentSupply
		},

		[mutations.REMOVE_CURRENT_SUPPLY](state) {
			if (state.supplyCount === 1) {
				state.currentSupply = 'R1'
				state.ventUnits = {
					R1: {
						...defaultSupplyUnit,
					},
				}
			} else {
				const {[state.currentSupply]: currentSupply, ...rest } = state.ventUnits
	
				state.ventUnits = {
					...rest
				}
	
				state.currentSupply = Object.keys(state.ventUnits)[0]
				state.supplyCount = state.supplyCount - 1 
			}
		},

		[mutations.CREATE_SUPPLY_UNIT](state, payload) {
			const newCurrentSupply = `R${state.supplyCount + 1}`

			state.ventUnits = {
				...state.ventUnits,
				[newCurrentSupply]: {
					...state.ventUnits[state.currentSupply],
					C1: payload.name,
				},
			}

			state.currentSupply = newCurrentSupply
			state.supplyCount = state.supplyCount + 1
		},
	},
	actions: {},
	modules: {},
	getters: {
		ventUnits: (state) => state.ventUnits,
		ventSupplyUnit: (state) => state.ventUnits[state.currentSupply],
		ventExhaustUnit: (state) => state.ventUnits[state.currentExhaust],
		ventUnitsNames: (state) => {
			const ventUnits = Object.keys(state.ventUnits)
			const ventUnitsNames = ventUnits.map((unit) => state.ventUnits[unit]['C1'])

			return ventUnitsNames
		},
	},
})
