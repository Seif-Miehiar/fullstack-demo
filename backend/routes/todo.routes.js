module.exports = (app) => {
	const Todos = require("../controllers/todo.controller");

	// Create a new Todo
	app.post("/todos", Todos.create);

	// Retrieve all Todos
	app.get("/todos", Todos.findAll);

	// Retrieve a single Todo with todoId
	app.get("/todos/:todoId", Todos.findOne);

	// Update a Todo with todoId
	app.put("/todos/:todoId", Todos.update);

	// Delete a Todo with todoId
	app.delete("/todos/:todoId", Todos.delete);
};
