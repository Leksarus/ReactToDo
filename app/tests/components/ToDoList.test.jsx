var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {ToDoList} from 'ToDoList';
import ConnectedTodo, {ToDo} from 'ToDo';

describe('ToDoList', () => {
	it('should exist', () => {
		expect(ToDoList).toExist();
	});

	it('should render one ToDo components for each todo item', () => {
		var todos = [{
			id: 1,
			text: 'Text example',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}, {
			id: 2,
			text: 'Another text example',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}];
		var store = configure({
			todos
		});
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList />
			</Provider>
		);
		var toDoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ConnectedTodo);

		expect(todosComponents.length).toBe(todos.length);
	});
});