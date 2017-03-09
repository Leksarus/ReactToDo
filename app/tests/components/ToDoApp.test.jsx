var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
	it('should exist', () => {
		expect(ToDoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		var text = 'Example text';
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(text);

		expect(todoApp.state.todos[0].text).toBe(text);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
		// Expect createdAt to be a number
	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('should set completedAt to undefined when handleToggle called', () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: true,
			createdAt: 0,
			completedAt: 'JAN 2nd, 12:34 PM'
		};
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
		todoApp.setState({todos: [todoData]});

		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toBe(undefined);
	});
});