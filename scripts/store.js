const Store = function () {
	let store;

	return {
		putToStore(data) {
			store = [...data];
			console.log('store data ', store);
			
		},

		getFromStore() {
			return store;
		},
	}
}