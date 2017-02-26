var React = require('react');

var AddTodo = React.createClass({
	addToDo: function(e) {
		e.preventDefault();
		var text = this.refs.text.value;

		if (text.length > 0) {
			this.props.handleAddTodo(text);
			this.refs.text.value = "";
		} else {
			this.refs.text.focus();
		}
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.addToDo}>
					<input type="text" ref="text" placeholder="Enter task to do." />
					<button>Add</button>
				</form>
			</div>
		)
	}
});

module.exports = AddTodo;