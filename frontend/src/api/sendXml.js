import { apiEndpoint } from './constants';

export async function sendXml({ name, email, projectName }, blob, blobName) {
	let formData = new FormData();

	formData.append('name', name);
	formData.append('email', email);
	formData.append('projectName', projectName);
	formData.append('file', blob, blobName);

	let response = await fetch(apiEndpoint.XML_CONFIG, {
		method: 'POST',
		body: formData,
	});

	return response;
}