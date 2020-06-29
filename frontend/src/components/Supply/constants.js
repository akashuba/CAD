export const contour = {
	first: {
		// waterHeater
		['0']: null,
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
		// electricHeater
		['4']: null,
		['5']: {
			name: 'C12',
			current: 'C13',
			power: 'C14',
			connection: 'C15',
			label: 'электронагрев',
		},
	},
}
