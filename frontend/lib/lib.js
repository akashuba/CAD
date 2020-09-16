export const parseTextAsXml = (xmlRawText) => {
	const parser = new DOMParser()

	return parser.parseFromString(xmlRawText, 'text/xml')
}

export const getXmlElement = (xmlDom, tagName) => {
	return xmlDom.getElementsByTagName(tagName)[0];
}
