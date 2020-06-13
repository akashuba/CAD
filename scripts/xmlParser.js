function xmlParser() {

	let fileChooserInput;
	// let file;
	let storeMethod;

	return {
		initialize(elementId, putToStore) {
			fileChooserInput = document.getElementById(elementId);
			fileChooserInput.addEventListener('change', this.putDataToStore.bind(this, event), false);
			storeMethod = putToStore;

			console.log('initialized in ', fileChooserInput);
		},

		async readFile(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();

				reader.readAsText(file);

				reader.onerror = () => {
					console.log(reader.error)
					reject(reader.error)
				};

				reader.onload = () => {
					resolve(reader.result)
				}

			})
		},

		parseTextAsXml(xmlRawText) {
			const parser = new DOMParser();

			return parser.parseFromString(xmlRawText, "text/xml");
			// console.log('xmlDom ', xmlDom);
		},

		async putDataToStore(event) {

			const file = fileChooserInput?.files[0]
			if (file) {
				const fileRead = await this.readFile(file);

				if (fileRead) {
					const xmlDom = this.parseTextAsXml(fileRead);
					const root = xmlDom.getElementsByTagName("root")[0];
					const normalizedFieldsArray = Array.from(root.childNodes).filter((item) => item.nodeType !== 3);

					if (normalizedFieldsArray && normalizedFieldsArray.length > 0) {
						storeMethod(normalizedFieldsArray);
					}
				}
			}
		},

		createXML(template, store) {
			
			const domXML = this.parseTextAsXml(template);
			const root = domXML.getElementsByTagName("root")[0];
			const xmlNodes = [];

			if (store?.fields) {
				
				Object.entries(store.fields).forEach(element => {
					const xmlNode = domXML.createElement(element[0]);

					xmlNode.textContent = element[1].value;
					xmlNodes.push(xmlNode);
				})
			}
			root.append(...xmlNodes);
			
			return domXML;
		}
	}

};
