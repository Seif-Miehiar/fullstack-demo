import React, { useState, useEffect } from "react";
import "./App.css";
import APIHelper from "../APIHelper";
// import ReactDOM from "react-dom";
// import axios from "axios";

const API_URL = "http://localhost:3004/todos/";

function App() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	useEffect(() => {
		const fetchTodoAndSetTodos = async () => {
			const todos = await APIHelper.getAllTodos();
			setTodos(todos);
		};
		fetchTodoAndSetTodos();
	}, []);

	const createTodo = async (e) => {
		e.preventDefault();
		if (!todo) {
			alert("please enter something");
			return;
		}
		if (todos.some(({ task }) => task === todo)) {
			alert(`Task: ${todo} already exists`);
			return;
		}
		const newTodo = await APIHelper.createTodo(todo);
		console.log(newTodo);
		setTodos([...todos, newTodo]);
	};

	const deleteTodo = async (e, id) => {
		try {
			e.stopPropagation();
			await APIHelper.deleteTodo(id);
			setTodos(todos.filter(({ _id: i }) => id !== i));
		} catch (err) {}
	};

	const updateTodo = async (e, id) => {
		e.stopPropagation();
		const payload = {
			completed: !todos.find((todo) => todo._id === id).completed,
		};
		const updatedTodo = await APIHelper.updateTodo(id, payload);
		setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
	};

	return (
		<div className="App">
			<div>
				<input
					type="text"
					value={todo}
					onChange={({ target }) => setTodo(target.value)}
					placeholder="Enter a todo"
				/>
				<button type="button" onClick={createTodo}>
					Add
				</button>
			</div>

			<ul>
				{todos.length ? (
					todos.map(({ _id, task, completed }, i) => (
						<li
							key={i}
							onClick={(e) => updateTodo(e, _id)}
							className={completed ? "completed" : ""}
						>
							{task} <span onClick={(e) => deleteTodo(e, _id)}>X</span>
						</li>
					))
				) : (
					<p>No Todos Yet :(</p>
				)}
			</ul>
		</div>
	);
}

export default App;
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
