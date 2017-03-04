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
	})

});