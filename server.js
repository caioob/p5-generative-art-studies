const express = require("express");
const app = express();
const path = require("path");

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/libraries")));
app.use(express.static(path.join(__dirname, "/js")));

app.get("/", (req, res) => {
	res.sendFile(__dirname+"/index.html");
});

app.listen(port);
