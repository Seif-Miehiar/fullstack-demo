import Toast from "react-bootstrap/Toast";
const Todo = (props) => {
	return (
		<div>
			<Toast>
				<Toast.Header>
					<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
					<strong className="mr-auto">todoName</strong>
					<small>Time</small>
				</Toast.Header>
				<Toast.Body>todoDescription</Toast.Body>
			</Toast>
		</div>
		// <div className="list-item">
		// 	{props.content}
		// 	<button
		// 		className="delete is-pulled-right"
		// 		onClick={() => {
		// 			props.onDelete(props.id);
		// 		}}
		// 	></button>
		// </div>
	);
};
export default Todo;
