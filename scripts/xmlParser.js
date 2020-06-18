function xmlParser() {
  let fileChooserInput;
  let storeMethod;

  return {
    initialize(elementId, putToStore) {
      fileChooserInput = document.getElementById(elementId);
      fileChooserInput.addEventListener(
        "change",
        this.putDataToStore.bind(this, event),
        false
      );
      storeMethod = putToStore;

      console.log("initialized in ", fileChooserInput);
    },

    async readFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsText(file);
        reader.onerror = () => {
          console.log(reader.error);
          reject(reader.error);
        };
        reader.onload = () => {
          resolve(reader.result);
        };
      });
    },

    parseTextAsXml(xmlRawText) {
      const parser = new DOMParser();

      return parser.parseFromString(xmlRawText, "text/xml");
    },

    async putDataToStore(event) {
      const file = fileChooserInput?.files[0];

      if (file) {
        const fileRead = await this.readFile(file);

        if (fileRead) {
          const xmlDom = this.parseTextAsXml(fileRead);
          const root = xmlDom.getElementsByTagName("root")[0];
          const normalizedFieldsArray = Array.from(root.childNodes).filter(
            (item) => item.nodeType !== 3
          );

          if (normalizedFieldsArray && normalizedFieldsArray.length > 0) {
            storeMethod(normalizedFieldsArray);
          }
        }
      }
    },

    createXML(template, store) {
      const domXML = this.parseTextAsXml(template);
      const root = domXML.getElementsByTagName("root")[0];
      const elements = root.childNodes;
      if (elements.length > 0) {
        Array.from(elements).forEach((element) => {
          if (element.nodeType === 3) {
            element.remove();
          } else {
            if (store.fields[element.nodeName]) {
              element.textContent = store.fields[element.nodeName].value;
            }
          }
        });
      }

      return domXML;
    },
  };
}
