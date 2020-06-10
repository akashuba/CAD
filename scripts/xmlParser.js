console.log('xmlParser imported');


function xmlParser() {

	let fileChooserInput;
	let file;
	let storeMethod;

	return {
		initialize(elementId, putToStore) {
			fileChooserInput = document.getElementById(elementId);
			fileChooserInput.addEventListener('change', this.readFile.bind(this), false);
			storeMethod = putToStore;

			console.log('initialized in ', fileChooserInput);
		},

		async readFile() {
			file = fileChooserInput?.files[0]
			const reader = new FileReader();

			reader.readAsText(file);

			reader.onerror = () => {
				console.log(reader.error)
			};

			reader.onload = () => {
				this.parseTextAsXml(reader.result)
			}
		},

		async parseTextAsXml(xmlRawText) {
			const parser = new DOMParser();

			const xmlDom = parser.parseFromString(xmlRawText, "text/xml");
			// console.log('xmlDom ', xmlDom);

			const root = xmlDom.getElementsByTagName("root")[0];
			const normalizedFieldsArray = Array.from(root.childNodes).filter((item) => item.nodeType !== 3);

			storeMethod(normalizedFieldsArray);

			// console.log('xmlDom ', Array.from(root.childNodes).filter((item) =>
			// 	item.nodeType !== 3)
			// );
			// console.log('xmlDom ',  root.childNodes);
		},

	}

};
