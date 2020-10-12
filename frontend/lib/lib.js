import { storeBranches } from './constants';

export const parseTextAsXml = (xmlRawText) => {
	const parser = new DOMParser();

	return parser.parseFromString(xmlRawText, 'text/xml');
};

export const getXmlElement = (xmlDom, tagName) => {
	return xmlDom.getElementsByTagName(tagName)[0];
};

export const flattenStoreBranch = (storeBranch) => {
	let result = [];
	const arrayFromBranch = Object.entries(storeBranch);
	const objForNormalize = arrayFromBranch.map((item) => {
		return {
			row: item[0],
			columns: Object.entries(item[1]),
		};
	});

	objForNormalize.map((ventUnit) => {
		ventUnit.columns.map((columnConfig) => {
			result.push([`${ventUnit.row}${columnConfig[0]}`, columnConfig[1]]);
		});
	});

	return result;
};

export const flattenStore = (store) => {
	let result = [];

	storeBranches.forEach((storeBranchName) => {
		const flattenBranch = flattenStoreBranch(store[storeBranchName]);

		if (flattenBranch) {
			result.push(...flattenBranch);
		}
	});

	return result;
};

export const replaceCheckboxesValue = (normalizeData) => {
	return normalizeData.map((configItem) => {
		return [
			configItem[0],
			configItem[1] === true ? '1' : configItem[1] === false ? '' : configItem[1],
		];
	});
};

export const updateXmlDom = (xmlDom, configs) => {
	let resultXMLDom = xmlDom;

	configs.map((config) => {
		const xmlElementForReplace = getXmlElement(resultXMLDom, config[0]);

		if (xmlElementForReplace) {
			xmlElementForReplace.textContent = config[1];
		}
	});

	return resultXMLDom;
};

export const serializeXMLDom = (xmlDom) => {
	const XMLS = new XMLSerializer();
	return XMLS.serializeToString(xmlDom);
};

function removeTextNodes(xmlDom) {
	const root = xmlDom.getElementsByTagName('root')[0];
	const elements = root.childNodes;

	if (elements.length > 0) {
		Array.from(elements).forEach((element) => {
			if (element.nodeType === 3) {
				element.remove();
			}
		});
	}

	return elements;
}

const prepareObjectToStore = (keyElement, nodes) => {
	const regex = RegExp(`^${keyElement}C`, 'i');
	const arrayOfElements = Array.from(nodes);
	const selectedElements = arrayOfElements.filter((node) => {
		return regex.test(node.nodeName);
	});
	const objectForStore = {};

	selectedElements.forEach((element) => {
		const name = element.nodeName.replace(keyElement, '');
		const content = element.textContent.replace(/\s/g, '');

		objectForStore[name] = content;
	});

	return {
		[keyElement]: { ...objectForStore },
	};
};

export const downloadXml = (storeObj) => {
	const xmlDom = parseTextAsXml(window.XMLTemplate);
	const fileName = storeObj?.generalSettings?.R24?.C1 || 'ventConfigXml';
	const flattenetStore = flattenStore(storeObj);
	const updatedXmlDom = updateXmlDom(xmlDom, replaceCheckboxesValue(flattenetStore));
	const serializedDom = serializeXMLDom(updatedXmlDom);

	const downloadLink = document.createElement('a');
	let xmlConfigCounter = 1;
	const bb = new Blob([serializedDom], {
		type: 'text/plain',
	});

	downloadLink.setAttribute('href', window.URL.createObjectURL(bb));
	downloadLink.setAttribute('download', `${fileName}.xml`);
	downloadLink.dataset.downloadurl = [
		'text/plain',
		downloadLink.download,
		downloadLink.href,
	].join(':');
	downloadLink.click();
	xmlConfigCounter++;
};

export function uploadXml(event, uploadXMLMutation) {
	const xmlFile = event.target.files[0];
	const reader = new FileReader();
	let ventUnitsSupply = {};
	let ventUnitsExhaust = {};
	let generalSettings = {};

	reader.readAsText(xmlFile);
	reader.onload = function() {
		const xmlDom = parseTextAsXml(reader.result);
		const elements = removeTextNodes(xmlDom);

		for (let index = 1; index < 11; index++) {
			const ventUnitName = xmlDom.getElementsByTagName(`R${index}C1`)[0].textContent.replace(/\s/g, '');

			if (ventUnitName) {
				ventUnitsSupply = {
					...ventUnitsSupply,
					...prepareObjectToStore(`R${index}`, elements),
				};
			}
		}

		for (let index = 11; index < 23; index++) {
			const ventUnitName = xmlDom.getElementsByTagName(`R${index}C1`)[0].textContent.replace(/\s/g, '');

			if (ventUnitName) {
				ventUnitsExhaust = {
					...ventUnitsExhaust,
					...prepareObjectToStore(`R${index}`, elements),
				};
			}
		}

		generalSettings = {
			...prepareObjectToStore(`R${24}`, elements)
		}

		uploadXMLMutation({
			ventUnitsSupply,
			ventUnitsExhaust,
			generalSettings,
		});

		event.target.value = '';

	};

	reader.onerror = function() {
		console.log(reader.error);
	};
}
