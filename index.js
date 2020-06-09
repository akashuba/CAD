
function dynamicallyLoadScript(src, callback) {
	const script = document.createElement('script');
	script.src = src;

	script.onreadystatechange = callback;
	script.onload = callback;

	document.body.appendChild(script);
}

dynamicallyLoadScript('./xmlParser.js', function () {
	xmlParser().initialize('fileChooser');
});

function foo(event) {
	event.preventDefault();

	let myForm = document.getElementById('myForm');
	let formData = new FormData(myForm);

	console.log(myForm);
	console.log(Array.from(formData));


};






