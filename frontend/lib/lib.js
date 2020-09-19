export const parseTextAsXml = (xmlRawText) => {
	const parser = new DOMParser()

	return parser.parseFromString(xmlRawText, 'text/xml')
}

export const getXmlElement = (xmlDom, tagName) => {
	return xmlDom.getElementsByTagName(tagName)[0]
}

export const flattenStoreBranch = (storeBranch) => {
	let result = [];
	const arrayFromBranch = Object.entries(storeBranch);
	const objForNormalize = arrayFromBranch.map((item) => {
		return {
			row: item[0],
			columns: Object.entries(item[1])
		}
	})

	objForNormalize.map((ventUnit) => {
		ventUnit.columns.map((columnConfig) => {
			result.push([`${ventUnit.row}${columnConfig[0]}`, columnConfig[1]])
		})
	})

	return result;
}

export const replaceCheckboxesValue = (normalizedData) => {
//  To do
}