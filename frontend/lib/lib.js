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

export const downloadXml = (storeObj) => {
	const xmlDom = parseTextAsXml(window.XMLTemplate);
	const flattenetStore = flattenStore(storeObj);
	const updatedXmlDom = updateXmlDom(xmlDom, replaceCheckboxesValue(flattenetStore));
	const serializedDom = serializeXMLDom(updatedXmlDom);

	const downloadLink = document.createElement('a');
	let xmlConfigCounter = 1;
	const bb = new Blob([serializedDom], {
		type: 'text/plain',
	});

	downloadLink.setAttribute('href', window.URL.createObjectURL(bb));
	downloadLink.setAttribute('download', `ventConfigXml${xmlConfigCounter}.xml`);
	downloadLink.dataset.downloadurl = [
		'text/plain',
		downloadLink.download,
		downloadLink.href,
	].join(':');
	downloadLink.click();
	xmlConfigCounter++;
};

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

export function uploadXml(event) {
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
			// console.log(xmlDom.getElementsByTagName(`R${index}C1`)[0].textContent.replace(/\s/gi, ''))
			if (ventUnitName) {
				ventUnitsSupply = {
					...ventUnitsSupply,
					...prepareObjectToStore(`R${index}`, elements),
				};
			}
		}
		console.log('ventUnitsSupply', ventUnitsSupply);
	};

	reader.onerror = function() {
		console.log(reader.error);
	};
}
