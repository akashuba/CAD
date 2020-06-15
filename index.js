const downloadXML = document.getElementById("downloadXML");
const unloader = xmlParser();
const store = mainStore();
const serialize = new XMLSerializer();
store.gatherFields("myForm");
const emptyXMLTemplate =
  '<?xml version="1.0" encoding="Windows-1251"?><root></root>';

unloader.initialize("fileChooser", store.putToStore.bind(store));

downloadXML.addEventListener("click", (event) => {
  const domXML = unloader.createXML(emptyXMLTemplate, store.getFromStore());
  console.log("domXML ", domXML);

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
