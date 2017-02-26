var React = require('react');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: 'Do the loundry'
				},
				{
					id: 2,
					text: 'Fuck girl hardly'
				},
				{
					id: 3,
					text: 'Do 100 pushups'
				},
				{
					id: 4,
					text: 'Gain the world'
				}
			]
		};
	},
	render: function() {
		var { todos } = this.state;

		return (
			<ToDoList todos={todos} />
		)
	}
});

module.exports = ToDoApp;