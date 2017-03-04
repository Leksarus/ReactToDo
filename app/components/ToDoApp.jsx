var React = require('react');
var ToDoList = require('ToDoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
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
	handleAddTodo: function (text) {
		var list = this.state.todos;
		var newTodo = {
			id: list.length + 1,
			text: text
		};
		list.push(newTodo);
		this.setState({todos: list});
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function() {
		var { todos } = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<ToDoList todos={todos} />
				<AddTodo handleAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = ToDoApp;