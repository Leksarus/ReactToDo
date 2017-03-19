var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
	addToDo: function(e) {
		e.preventDefault();
		var {dispatch} = this.props;
		var text = this.refs.text.value;

		if (text.length > 0) {
			this.refs.text.value = "";
			dispatch(actions.addTodo(text));
		} else {
			this.refs.text.focus();
		}
	},
	render: function() {
		return (
			<div className="container__footer">
				<form onSubmit={this.addToDo}>
					<input type="text" ref="text" placeholder="Wpisz zadanie do wykonania." />
					<button className="button expanded">Dodaj</button>
				</form>
			</div>
		)
	}
});

export default connect()(AddTodo);