const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
	{
		// userName: {
		// 	type: String,
		// 	required: true,
		// },
		todoName: {
			// field1: task
			type: String, // task is a string
			unique: true, // it has to be unique
			required: true, // it is required
		},
		// completed: {
		// 	// field2: completed
		// 	type: Boolean, // it is a boolean
		// 	default: false, // the default is false
		// },
		// todoDescription: {
		// 	type: String,
		// 	required: true,
		// },
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

// creating the model from the schema
const todoModel = mongoose.model("Todo", todoSchema);

//exporting the schema to require in our server.js file
module.exports = todoModel;
