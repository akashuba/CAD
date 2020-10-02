export const mutations = {
	SET_SUPPLY_FIELD: 'SET_SUPPLY_FIELD',
	SET_EXHAUST_FIELD: 'SET_EXHAUST_FIELD',
	CREATE_SUPPLY_UNIT: 'CREATE_SUPPLY_UNIT',
	CREATE_EXHAUST_UNIT: 'CREATE_EXHAUST_UNIT',
	SELECT_CURRENT_SUPPLY: 'SELECT_CURRENT_SUPPLY',
	SELECT_CURRENT_EXHAUST: 'SELECT_CURRENT_EXHAUST',
	REMOVE_CURRENT_SUPPLY: 'REMOVE_CURRENT_SUPPLY',
	REMOVE_CURRENT_EXHAUST: 'REMOVE_CURRENT_EXHAUST',
	SET_GENERAL_CONFIG: 'SET_GENERAL_CONFIG',
	UPLOAD_XML: 'UPLOAD_XML',
	RESET_CONFIG: 'RESET_CONFIG',
}

export const defaultSupplyUnit = {
	C1: 'П1',
	C4: '0',
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
}

export const defaultExhaustUnit = {
	C1: 'В1',
	C4: '0',
	C5: false,
	C6: false,
	C7: false,
	C8: false,
	C9: false,
}

export const defaultGeneralSettings = {
	C1: 'ЩАУ-1',
	C2: false,
	C3: false,
	C9: "220",
}
