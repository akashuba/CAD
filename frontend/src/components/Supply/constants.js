export const contourOrder = {
	FIRST: 'first',
	SECOND: 'second',
	THIRD: 'third',
	FROURTH: 'fourth',
	FIFTH: 'fifth',
}

export const contour = {
	first: {
		['0']: null,
		// waterHeater
		['1']: {
			name: 'C12',
			current: 'C13',
			power: 'C14',
			connection: 'C15',
			reservePump: 'C16',
			label: 'насос',
		},
		// rotaryRecuperator
		['2']: {
			name: 'C12',
			current: 'C13',
			power: 'C14',
			connection: 'C15',
			label: 'ПЧ',
		},
		// glycolRecuperation
		['3']: {
			name: 'C12',
			current: 'C13',
			power: 'C14',
			connection: 'C15',
			reservePump: 'C16',
			label: 'насос',
		},
		// recirculation
		['4']: null,
		// electricHeater
		['5']: {
			name: 'C12',
			current: 'C13',
			power: 'C14',
			connection: 'C15',
			label: 'электронагрев',
		},
	},
	second: {
		['0']: null,
		// waterHeater
		['1']: {
			name: 'C22',
			current: 'C23',
			power: 'C24',
			connection: 'C25',
			reservePump: 'C26',
			label: 'насос',
		},
		// waterCooler
		['2']: null,
		// freonCooler
		['3']: null,
		// recirculation
		['4']: null,
		// electricHeater
		['5']: {
			name: 'C22',
			current: 'C23',
			power: 'C24',
			connection: 'C25',
			label: 'электронагрев',
		},
	},
	third: {
		['0']: null,
		// waterHeater
		['1']: null,
		// waterCooler
		['2']: null,
		// freonCooler
		['3']: null,
	},
	fourth: {
		['0']: null,
		// waterHeater
		['1']: null,
		// steamHumidification
		['2']: null,
		// irrigationСamera
		['3']: {
			name: 'C42',
			current: 'C43',
			power: 'C44',
			connection: 'C45',
			label: 'насос',
		},
	},
	fifth: {
		['0']: null,
		// waterHeater
		['1']: null,
		// steamHumidification
		['2']: null,
		// irrigationСamera
		['3']: {
			name: 'C52',
			current: 'C53',
			power: 'C54',
			connection: 'C55',
			label: 'насос',
		},
	},
}
