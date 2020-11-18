import React, { Component } from "react";

export default class SubmitForm extends React.Component {
	state = {
		todo: "",
		todoDescription: "",
	};

	handleChange = (event) => {
		console.log(event);
		// this.setState({
		// 	todoDescription : event.target.todoDescription
		// })
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.todo === "") return;
		this.props.onFormSubmit(this.state.todo);
		this.setState({
			todo: "",
			todoDescription: "",
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="input"
					placeholder="Enter Item"
					value={this.state.todo}
					onChange={(e) => {
						// console.log(e.target.value);
						this.setState({ todo: e.target.value });
					}}
				/>
				<input
					type="text"
					className="input"
					placeholder="Enter Description"
					value={this.state.todoDescription}
					onChange={(e) => this.setState({ todoDescription: e.target.value })}
				/>
				<button className="button">Submit</button>
			</form>
		);
	}
}
