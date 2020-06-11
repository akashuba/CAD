function store1 () {
	let store = {
		fields: {},
	};


	return {
		gatherFields(formId) {
			const form = document.getElementById(formId);
			const confFields = form.querySelectorAll('input');
		
			confFields.forEach(field => {
				if (field?.id) {
					store.fields[field.id] = field
				}
			})
		},

		putToStore(data) {
			data.forEach(incomeField => {
				if (store.fields[incomeField?.nodeName]) {
					store.fields[incomeField?.nodeName].value = incomeField?.textContent;
				}
			})
			console.log('put to store ', data);
			console.log('getFromStore ', this.getFromStore());
			
		},

		getFromStore() {
			return store;
		},
	}
}