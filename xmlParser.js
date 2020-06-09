console.log('xmlParser imported');


function xmlParser() {

	let fileChooserInput;
	let file;

	return {
		initialize(elementId) {
			fileChooserInput = document.getElementById(elementId);
			fileChooserInput.addEventListener('change', this.readFile.bind(this), false);

			console.log('initialized ', this);	
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
			console.log('xmlDom ', xmlDom);

			// const root = xmlDom.getElementsByTagName("root")[0];
			// root.normalize();
			// console.log('xmlDom ',  root.childNodes);
		},

	}

};
