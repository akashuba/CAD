const downloadXML = document.getElementById("downloadXML");
const unloader = xmlParser();
const store = mainStore();
const serialize = new XMLSerializer();
store.appendInputHandler("myForm");
// const emptyXMLTemplate = `<?xml version="1.0" encoding="Windows-1251"?><root><R1C1></R1C1><R1C2></R1C2><R1C3></R1C3><R1C4></R1C4></root>`;

unloader.initialize("fileChooser", store.putToStore.bind(store));

downloadXML.addEventListener("click", (event) => {
  const domXML = unloader.createXML(xmlTemplateToString, store.getFromStore());

  const bb = new Blob([serialize.serializeToString(domXML)], {
    type: "text/plain",
  });

  downloadXML.setAttribute("href", window.URL.createObjectURL(bb));
  downloadXML.setAttribute("download", "file.xml");
  downloadXML.dataset.downloadurl = [
    "text/plain",
    downloadXML.download,
    downloadXML.href,
  ].join(":");
});
