export const parseTextAsXml = (xmlRawText) => {
	const parser = new DOMParser()

	return parser.parseFromString(xmlRawText, 'text/xml')
}

export const getXmlElement = (xmlDom, tagName) => {
	return xmlDom.getElementsByTagName(tagName)[0]
}

export const flattenStoreBranch = (storeBranch) => {
	let result = []
	const arrayFromBranch = Object.entries(storeBranch)
	const objForNormalize = arrayFromBranch.map((item) => {
		return {
			row: item[0],
			columns: Object.entries(item[1]),
		}
	})

	objForNormalize.map((ventUnit) => {
		ventUnit.columns.map((columnConfig) => {
			result.push([`${ventUnit.row}${columnConfig[0]}`, columnConfig[1]])
		})
	})

	return result
}

export const replaceCheckboxesValue = (normalizeData) => {
	return normalizeData.map((configItem) => {
		return [
			configItem[0],
			configItem[1] === true ? '1' : configItem[1] === false ? '' : configItem[1],
		]
	})
}

export const updateXmlDom = (xmlDom, configs) => {
	let resultXMLDom = xmlDom

	configs.map((config) => {
		const xmlElementForReplace = getXmlElement(resultXMLDom, config[0])

		if (xmlElementForReplace) {
			xmlElementForReplace.textContent = config[1]
		}
	})

	return resultXMLDom
}

export const serializeXMLDom = (xmlDom) => {
	const XMLS = new XMLSerializer()
	return XMLS.serializeToString(xmlDom)
}

export const uploadXml = (serializedDom) => {
	const downloadLink =  document.createElement('a');
	let xmlConfigCounter = 1;
	const bb = new Blob([serializedDom], {
		type: 'text/plain',
	});

	downloadLink.setAttribute('href', window.URL.createObjectURL(bb));
	downloadLink.setAttribute('download', `ventConfigXml${xmlConfigCounter}.xml`);
	downloadLink.dataset.downloadurl = ['text/plain', downloadLink.download, downloadLink.href]
		.join(':');
	downloadLink.click();
	xmlConfigCounter++;
}
