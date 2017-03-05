var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	})

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{
				id: 21,
				text: 'Test text',
				completed: false
			}];
			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		})

		it('should not set valid todos array', () => {
			var invalidTodos = {
				id: 21,
				text: 'Test text',
				completed: false
			};
			TodoAPI.setTodos(invalidTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		})
	});

	describe('getTodos', () => {
		it('should return empty array for bad localstorage data', () => {
			var dummyData = {a: 'b'};
			localStorage.setItem('todos', JSON.stringify(dummyData));
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('should return proper todos array if valid data in localStorage', () => {
			var todos = [{
				id: 21,
				text: 'Test text',
				completed: false
			}];
			localStorage.setItem('todos', JSON.stringify(todos));

			var storagedData = TodoAPI.getTodos();
			expect(storagedData).toEqual(todos);
		})
	});
});