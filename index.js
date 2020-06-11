
function dynamicallyLoadScript(src) {

	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = src;
		// script.onreadystatechange = callback; // For old ie 
		document.body.appendChild(script);

		script.onload = () => {
			resolve();
		};

		script.onerror = (error) => {
			reject(error);
		}
	})
};

Promise.all([
	dynamicallyLoadScript('./scripts/xmlParser.js'),
	dynamicallyLoadScript('./scripts/store.js'),
])
	.then(() => {
		const unloader = xmlParser();
		const store = store1();
		store.gatherFields('myForm');
		console.log('store --> ', store.getFromStore());
		

		unloader.initialize('fileChooser', store.putToStore.bind(store));
	})
	.catch((error) => {
		console.log(error);
	});
