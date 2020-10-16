const express = require('express');
const path = require('path');
const cors = require('cors');
var multer = require('multer');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './upload');
	},
	filename: function (req, file, cb) {
		if (!file) {
			console.warn('file is not provided');
			return;
		}
		cb(null, file.originalname);
	},
});

var upload = multer({ storage: storage })
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/dist/')));

app.post('/xmlConfig', upload.single('file'), function (req, res) {
	console.log('req body', req.body);
	console.log('req body', req.file);
	res.status(200).json({message: "saved"});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started on ${port}`);
});
