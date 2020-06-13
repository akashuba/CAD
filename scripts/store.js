function mainStore () {
	let store = {
		fields: {},
	};

	return {
		gatherFields(formId) {
			const form = document.getElementById(formId);
			const confFields = form.querySelectorAll('input, select');
		
			confFields.forEach(field => {
				field.onchange = this.onInputChange.bind(this);
				
				if (field?.id) {
					store.fields[field.id] = field;
				}
			})
		},

		putToStore(data) {
			this.resetFields();

			data.forEach(incomeField => {
				if (store.fields[incomeField?.nodeName]) {
					store.fields[incomeField?.nodeName].value = incomeField?.textContent;
				}
			})
		},

		getFromStore() {
			return store;
		},

		resetFields() {
			for (const key in store?.fields) {
				if (store.fields[key].type === 'text') {
					store.fields[key].value = '';	
				}
				if (store.fields[key].type === 'select-one') {
					store.fields[key].value = 0;	
				}
			}
		},

		onInputChange(event) {
			const changedField = event.currentTarget;

			if (store.fields[changedField?.id]) {
				store.fields[changedField?.id].value = changedField.value;
			}
		}
	}
}
