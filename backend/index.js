const express = require('express')
const path = require('path')
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors());

app.use( express.static(path.join(__dirname, '../frontend/dist/')));

const port = 3004;
app.listen(port, () => {
	console.log(`Server started on ${port}`)
})
