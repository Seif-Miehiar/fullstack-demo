const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
module.exports.Todo = require("./models/todo.model");

// create express app
const app = express();
const path = require("path");

DATABASE_URL = `mongodb://localhost:27017/todo`;
const PORT = process.env.PORT || 3004;
app.use(cors());
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../build")));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
// app.get("/", (req, res) => {
// 	res.json({
// 		message:
// 			"Welcome to Todo fullstack Demo application. Take a todo quickly. Organize and keep track of all your todos.",
// 	});
// });

// Connecting to the database
mongoose
	.connect(DATABASE_URL, {
		// connecting to the mongodb database name: "DATABASE_URL" locally
		keepAlive: true, // keeping the connection alive
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

// enabling debugging information to be printed to the console for debugging purposes
mongoose.set("debug", true);

// setting mongoose's Promise to use Node's Promise
mongoose.Promise = global.Promise;

//including the routes in server from the routes directory.
require("./routes/todo.routes.js")(app);

// listen for requests
app.listen(PORT, () => {
	console.log(
		`Server is listening on port ${PORT}\n`,
		`http://localhost:${PORT}`
	);
});
