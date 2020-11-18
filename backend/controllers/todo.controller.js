const Todo = require("../models/todo.model.js");

// Create and Save a new Todo
exports.create = (req, res) => {
	// Validate request
	console.log(req.body);
	if (!req.body) {
		return res.status(400).send({
			message: "Todo content can not be empty",
		});
	}

	// Create a Todo
	const todo = new Todo({
		userName: req.body.userName || "Untitled Todo",
		todoName: req.body.todoName,
		todoDescription: req.body.todoDescription,
		todoPriority: req.body.todoPriority,
		todoCheck: req.body.todoCheck,
	});

	// Save Todo in the database
	todo
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the Todo.",
			});
		});
};

// Retrieve and return all Todos from the database.
exports.findAll = (req, res) => {
	Todo.find()
		.then((todos) => {
			// console.log(todos);
			if (todos) {
				res.send(todos);
			} else {
				res.send("No todos available, add one!");
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving todos.",
			});
		});
};

// Find a single Todo with a todoId
exports.findOne = (req, res) => {
	Todo.findById(req.params.todoId)
		.then((todo) => {
			if (!todo) {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.todoId,
				});
			}
			res.send(todo);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.todoId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving todo with id " + req.params.todoId,
			});
		});
};

// Update a Todo identified by the todoId in the request
exports.update = (req, res) => {
	// Validate Request

	if (!req.body) {
		return res.status(400).send({
			message: "Todo content can not be empty",
		});
	}

	// Find todo and update it with the request body
	Todo.findByIdAndUpdate(
		req.params.todoId,
		loopOverData(req.body),
		//The {new: true} option in the findByIdAndUpdate() method is used to
		// return the modified document to the then() function instead of the original.
		{ new: true }
	)
		.then((todo) => {
			if (!todo) {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.todoId,
				});
			}
			res.send(todo);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.todoId,
				});
			}
			return res.status(500).send({
				message: "Error updating todo with id " + req.params.todoId,
			});
		});
};

// Delete a Todo with the specified todoId in the request
exports.delete = (req, res) => {
	Todo.findByIdAndRemove(req.params.todoId)
		.then((todo) => {
			if (!todo) {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.todoId,
				});
			}
			res.send({ message: "Todo deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.todoId,
				});
			}
			return res.status(500).send({
				message: "Could not delete Todo with id " + req.params.todoId,
			});
		});
};

const loopOverData = (req) => {
	let data = req;
	let objectOfKeys = {};
	let arrayOfKeys = Object.keys(data);

	for (var i = 0; i < arrayOfKeys.length; i++) {
		var test = arrayOfKeys[i];
		objectOfKeys[test] = data[test];
	}

	return objectOfKeys;
};
