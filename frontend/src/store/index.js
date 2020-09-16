import Vue from 'vue'
import Vuex from 'vuex'

import { mutations, defaultSupplyUnit, defaultExhaustUnit, defaultGeneralSettings } from './constants'

Vue.use(Vuex)
/* eslint-disable no-unused-vars */
export default new Vuex.Store({
	state: {
		currentSupplyName: 'R1',
		currentExhaustName: 'R11',
		currentGeneralSettingsName: 'R24',
		ventUnitsSupply: {
			R1: {
				...defaultSupplyUnit,
			},
		},
		ventUnitsExhaust: {
			R11: {
				...defaultExhaustUnit,
			}
		},
		generalSettings: {
			R24: {
				...defaultGeneralSettings,
			}
		},
		supplyCount: 1,
		exhaustCount: 1,
	},
	mutations: {
		[mutations.SET_SUPPLY_FIELD](state, payload) {
			state.ventUnitsSupply = {
				...state.ventUnitsSupply,
				[state.currentSupplyName]: {
					...state.ventUnitsSupply[state.currentSupplyName],
					[payload.unit]: payload.data,
				}
			}
		},

		[mutations.SET_EXHAUST_FIELD](state, payload) {
			state.ventUnitsExhaust = {
				...state.ventUnitsExhaust,
				[state.currentExhaustName]: {
					...state.ventUnitsExhaust[state.currentExhaustName],
					[payload.unit]: payload.data,
				}
			}
		},

		[mutations.SET_GENERAL_CONFIG](state, payload) {
			state.generalSettings = {
				...state.generalSettings,
				[state.currentGeneralSettingsName]: {
					...state.generalSettings[state.currentGeneralSettingsName],
					[payload.unit]: payload.data,
				}
			}
		},

		[mutations.SELECT_CURRENT_SUPPLY](state, payload) {
			state.currentSupplyName = payload.currentName
		},

		[mutations.SELECT_CURRENT_EXHAUST](state, payload) {
			state.currentExhaustName = payload.currentName
		},

		[mutations.REMOVE_CURRENT_SUPPLY](state) {
			if (state.supplyCount === 1) {
				state.currentSupplyName = 'R1'
				state.ventUnitsSupply = {
					R1: {
						...defaultSupplyUnit,
					},
				}
			} else {
				const { [state.currentSupplyName]: currentSupply, ...rest } = state.ventUnitsSupply
				
				state.ventUnitsSupply = {	...rest	}
				state.currentSupplyName = Object.keys(state.ventUnitsSupply)[0]
				state.supplyCount = state.supplyCount - 1 
			}
		},

		[mutations.REMOVE_CURRENT_EXHAUST](state) {
			if (state.exhaustCount === 1) {
				state.currentExhaustName = 'R11'
				state.ventUnitsExhaust = {
					R11: {
						...defaultExhaustUnit,
					},
				}
			} else {
				const { [state.currentExhaustName]: currentExhaust, ...rest } = state.ventUnitsExhaust
				
				state.ventUnitsExhaust = {	...rest	}
				state.currentExhaustName = Object.keys(state.ventUnitsExhaust)[0]
				state.exhaustCount = state.exhaustCount - 1 
			}
		},

		[mutations.CREATE_SUPPLY_UNIT](state, payload) {
			const newCurrentSupplyName = `R${state.supplyCount + 1}`
			const newCurrentSupplyConfig = payload?.template ? state.ventUnitsSupply[payload?.template] : defaultSupplyUnit

				state.ventUnitsSupply = {
					...state.ventUnitsSupply,
					[newCurrentSupplyName]: {
						...newCurrentSupplyConfig,
						C1: payload.name,
					},
				}

			state.currentSupplyName = newCurrentSupplyName
			state.supplyCount = state.supplyCount + 1
		},

		[mutations.CREATE_EXHAUST_UNIT](state, payload) {
			const newCurrentExhaustName = `R${state.exhaustCount + 11}`
			const newCurrentExhaustConfig = payload?.template ? state.ventUnitsExhaust[payload?.template] : defaultExhaustUnit

				state.ventUnitsExhaust = {
					...state.ventUnitsExhaust,
					[newCurrentExhaustName]: {
						...newCurrentExhaustConfig,
						C1: payload.name,
					},
				}

			state.currentExhaustName = newCurrentExhaustName
			state.exhaustCount = state.exhaustCount + 1
		},
	},
	actions: {},
	modules: {},
	getters: {
		state: (state) => state,
		ventUnits: (state) => {
			return {
				...state.ventUnitsSupply,
				...state.ventUnitsExhaust,
			}
		},
		ventUnitsSupply: (state) => state.ventUnitsSupply,
		ventUnitsExhaust: (state) => state.ventUnitsExhaust,
		generalSettings: (state) => state.generalSettings[state.currentGeneralSettingsName],
		ventSupplyUnit: (state) => state.ventUnitsSupply[state.currentSupplyName],
		ventExhaustUnit: (state) => state.ventUnitsExhaust[state.currentExhaustName],
		ventSupplyUnitNames: (state) => {
			const ventUnits = Object.keys(state.ventUnitsSupply)
			const ventUnitsNames = ventUnits.map((unit) => state.ventUnitsSupply[unit]['C1'])

			return ventUnitsNames
		},
		ventUnitsExhaustNames: (state) => {
			const ventUnits = Object.keys(state.ventUnitsExhaust)
			const ventUnitsNames = ventUnits.map((unit) => state.ventUnitsExhaust[unit]['C1'])

			return ventUnitsNames
		},
		currentSupplyName: (state) => state.currentSupplyName,
		currentExhaustName: (state) => state.currentExhaustName,
	},
})
