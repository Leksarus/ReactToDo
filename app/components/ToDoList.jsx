var React = require('react');
var {connect} = require('react-redux');
import ToDo from 'Todo';

export var ToDoList = React.createClass({
	render: function() {
		var { todos } = this.props;
		var renderTodos = () => {
			if(todos.length === 0) {
				return (
					<p className="container__message">Nie ma nic do roboty.</p>
				)				
			}
			return todos.map((todo) => {
				return (
					<ToDo key={todo.id} {...todo}/>
				);
			});
		};

		return (
			<div>{renderTodos()}</div>
		)
	}
});

export default connect(
	(state) => {
		return {
			todos: state.todos
		};
	}
)(ToDoList);