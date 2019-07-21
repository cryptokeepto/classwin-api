const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3001;

app.use(bodyParser.json());

app.get("/api", (req, res) => {
	return res.end("ok"); 
})

app.listen(PORT, () => {
	console.log("Api is running");
})
