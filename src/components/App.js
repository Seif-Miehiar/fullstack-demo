import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
	}

	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

// import Header from "./header";
// import SubmitForm from "./submitForm";
// import TodoList from "./todoList";
// export default class App extends React.Component {
// 	_isMounted = false;
// 	state = {
// 		tasks: [],
// 		todoName: "",
// 		todoDescription: "",
// 	};

// 	componentDidMount() {
// 		this._isMounted = true;

// 		axios.get(`http://localhost:3004/todos`).then((res, err) => {
// 			console.log("get\n", res, "err:\n", err);
// 			const tasks = [...res.data];
// 			console.log(tasks);
// 			if (this._isMounted) {
// 				this.setState([...tasks]);
// 			}
// 		});
// 	}

// 	componentWillUnmount() {
// 		this._isMounted = false;
// 	}
// 	handleChange = (event) => {
// 		console.log(event);
// 		// this.setState({
// 		// 	todoDescription : event.target.todoDescription
// 		// })
// 	};

// 	handleSubmit = (task) => {
// 		// task.preventDefault();
// 		const todos = {
// 			todos: this.state.tasks,
// 		};
// 		// console.log(todo);
// 		axios
// 			.post(
// 				"http://localhost:3004/todos",
// 				{ todos },
// 				{ headers: { "Content-Type": "application/json" } }
// 			)
// 			.then((res) => {
// 				console.log(res);
// 				console.log(res.data);
// 			});

// 		this.setState({ tasks: [...this.state.tasks, task] });
// 	};

// 	handleDelete = (index) => {
// 		axios
// 			.delete(`http://localhost:3004/todos/${this.state.tasks["_id"]}`)
// 			.then((res) => {
// 				// console.log(index);
// 				const tasks = res.data;
// 				const newArr = [...this.state.tasks];
// 				newArr.splice(index, 1);
// 				this.setState({ tasks: newArr });
// 			});
// 	};

// 	render() {
// 		return (
// 			<div className="wrapper">
// 				<div className="card frame">
// 					<Header numTodos={this.state.tasks.length} />
// 					<TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
// 					<SubmitForm
// 						onFormSubmit={this.handleSubmit}
// 						onChange={this.handleChange}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.querySelector("#root"));
