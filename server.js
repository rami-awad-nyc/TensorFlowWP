import express from "express";
const app = express();

app.get('/', (req, res) => {
	console.log("Test");
	res.render("index");
});

app.listen(3000);
