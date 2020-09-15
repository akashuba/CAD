export const parseTextAsXml = (xmlRawText) => {
	const parser = new DOMParser()

	return parser.parseFromString(xmlRawText, 'text/xml')
}
