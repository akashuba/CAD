import Vue from 'vue'
import Vuex from 'vuex'

import { mutations, defaultSupplyUnit } from './constants'

Vue.use(Vuex)
/* eslint-disable no-unused-vars */
export default new Vuex.Store({
	state: {
		currentSupplyName: 'R1',
		currentExhaustName: 'R11',
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
			state.ventUnits = {
				...state.ventUnits,
				[state.currentSupplyName]: {
					...state.ventUnits[state.currentSupplyName],
					[payload.unit]: payload.data,
				}
			}
		},

		[mutations.SELECT_CURRENT_SUPPLY](state, payload) {
			state.currentSupplyName = payload.currentSupplyName
		},

		[mutations.REMOVE_CURRENT_SUPPLY](state) {
			if (state.supplyCount === 1) {
				state.currentSupplyName = 'R1'
				state.ventUnits = {
					R1: {
						...defaultSupplyUnit,
					},
				}
			} else {
				const { [state.currentSupplyName]: currentSupply, ...rest } = state.ventUnits
	
				state.ventUnits = {	...rest	}
				state.currentSupplyName = Object.keys(state.ventUnits)[0]
				state.supplyCount = state.supplyCount - 1 
			}
		},

		[mutations.CREATE_SUPPLY_UNIT](state, payload) {
			const newCurrentSupplyName = `R${state.supplyCount + 1}`
			const newCurrentSupplyConfig = payload?.template ? state.ventUnits[payload?.template] : defaultSupplyUnit

				state.ventUnits = {
					...state.ventUnits,
					[newCurrentSupplyName]: {
						...newCurrentSupplyConfig,
						C1: payload.name,
					},
				}

			state.currentSupplyName = newCurrentSupplyName
			state.supplyCount = state.supplyCount + 1
		},
	},
	actions: {},
	modules: {},
	getters: {
		ventUnits: (state) => state.ventUnits,
		ventSupplyUnit: (state) => state.ventUnits[state.currentSupplyName],
		ventExhaustUnit: (state) => state.ventUnits[state.currentExhaustName],
		ventUnitsNames: (state) => {
			const ventUnits = Object.keys(state.ventUnits)
			const ventUnitsNames = ventUnits.map((unit) => state.ventUnits[unit]['C1'])

			return ventUnitsNames
		},
		currentSupplyName: (state) => state.currentSupplyName,
		currentExhaustName: (state) => state.currentExhaustName,
	},
})
