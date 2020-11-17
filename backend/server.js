const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Todo = require("./database/db");

// create express app
const app = express();

DATABASE_URL = `mongodb://localhost:27017/node-express-mongodb-server`;
const PORT = 3001;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get("/", (req, res) => {
	res.json({
		message:
			"Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
	});
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
	.connect(DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Successfully connected to the database");
	})
	.catch((err) => {
		console.log("Could not connect to the database. Exiting now...", err);
		process.exit();
	});

// listen for requests
app.listen(PORT, () => {
	console.log(
		`Server is listening on port ${PORT}\n`,
		`http://localhost:${PORT}`
	);
});
