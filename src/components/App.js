import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import SubmitForm from "./submitForm";
import TodoList from "./todoList";
import { $, jQuery } from "jquery";
export default class App extends React.Component {
	state = {
		tasks: [],
	};

	//ajax request to get data from server.
	fetchTodos = () => {
		$.ajax({
			method: "GET",
			url: "http://localhost:3001/todos",
			success: (data) => {
				console.log(`${data} is successfully fetched!`);
			},
			error: (err) => {
				if (err) throw err;
			},
		});
	};
	handleSubmit = (task) => {
		this.setState({ tasks: [...this.state.tasks, task] });
	};

	handleDelete = (index) => {
		const newArr = [...this.state.tasks];
		newArr.splice(index, 1);
		this.setState({ tasks: newArr });
	};

	render() {
		return (
			<div className="wrapper">
				<div className="card frame">
					<Header numTodos={this.state.tasks.length} />
					<TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
					<SubmitForm onFormSubmit={this.handleSubmit} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
