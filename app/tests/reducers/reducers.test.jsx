var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set search text', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			}
			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			}
			var res = reducers.showCompletedReducer(false, df(action));

			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: 'abc123',
					text: 'Something to do',
					completed: false,
					createdAt: 984621354
				}
			}
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.todo);
		});

		it('should toggle todoItem base on passed id', () => {
			var exampleTodoArray = [
				{
					id: 1,
					text: 'Some text',
					completed: false,
					createdAt: '01.01.2017',
					completedAt: '02.01.2017'
				},
				{
					id: 2,
					text: 'Some text',
					completed: false,
					createdAt: '01.01.2017',
					completedAt: '02.01.2017'
				},
				{
					id: 3,
					text: 'Some text',
					completed: false,
					createdAt: '01.01.2017',
					completedAt: '02.01.2017'
				}
			]

			var action = {
				type: 'TOGGLE_TODO',
				id: 2
			}

			var res = reducers.todosReducer(df(exampleTodoArray), df(action));
			expect(res[1].completed).toEqual(true);
		})
	});
});