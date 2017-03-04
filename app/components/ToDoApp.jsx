var React = require('react');
var ToDoList = require('ToDoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Do the loundry',
					completed: false
				},
				{
					id: uuid(),
					text: 'Fuck girl hardly',
					completed: true
				},
				{
					id: uuid(),
					text: 'Do 100 pushups',
					completed: true
				},
				{
					id: uuid(),
					text: 'Gain the world',
					completed: false
				}
			]
		};
	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	handleToggle: function (id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		})

		this.setState({todos: updatedTodos});
	},
	render: function() {
		var { todos } = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<ToDoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo handleAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = ToDoApp;