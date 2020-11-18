const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
	{
		// userName: {
		// 	type: String,
		// 	required: true,
		// },
		todoName: {
			type: String,
			required: true,
		},
		todoDescription: {
			type: String,
			required: true,
		},
		// todoPriority: {
		// 	type: Number,
		// 	min: 1,
		// 	max: 3,
		// 	required: true,
		// },
		// todoCheck: {
		// 	type: Boolean,
		// 	required: true,
		// },
	},
	{ timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

//exporting the schema to require in our server.js file
module.exports = Todo;
// module.exports = mongoose.model("Note", NoteSchema);
