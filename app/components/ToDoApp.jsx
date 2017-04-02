var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import ToDoList from 'ToDoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var ToDoApp = React.createClass({
	render: function() {
		return (
			<div>
				<h1 className="page-title">Taskozarządzacz</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch/>
							<ToDoList />
							<AddTodo/>
							<p><span>Wykonanie:</span><span>Kamil Nawrocki</span></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = ToDoApp;