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
					text: 'Do the loundry'
				},
				{
					id: uuid(),
					text: 'Fuck girl hardly'
				},
				{
					id: uuid(),
					text: 'Do 100 pushups'
				},
				{
					id: uuid(),
					text: 'Gain the world'
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
					text: text
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