const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Todo = require("./models/todo.model");

// create express app
const app = express();
const path = require("path");

DATABASE_URL = `mongodb://localhost:27017/todo`;
const PORT = 3001;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../build")));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get("/", (req, res) => {
	res.json({
		message:
			"Welcome to Todo fullstack Demo application. Take a todo quickly. Organize and keep track of all your todos.",
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

//including the routes in server from the routes directory.
require("./routes/todo.routes.js")(app);

// listen for requests
app.listen(PORT, () => {
	console.log(
		`Server is listening on port ${PORT}\n`,
		`http://localhost:${PORT}`
	);
});
