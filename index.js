const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/on-live-auth", (req, res) => {
	const streamInfo = req.body
	const streamSecretKey = _.get(streamInfo, "name")
	console.log(streamSecretKey);
	console.log(_.get(streamInfo, "call"))
	return res.status(200).json({ lived: true }); 
})

app.post("/api/on-live-done", (req, res) => {
	const streamInfo = req.body
	console.log(_.get(streamInfo, "call"));
	return res.status(200).json({ lived: false });
})

app.listen(PORT, () => {
	console.log("Api is running");
})
