/*function add (a, b) {
	return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));*/
/*
var groupA = ['Mirek', 'Zbyszek'];
var groupB = ['Vitkacy'];
var final = [3, ...groupA, ...groupB];

console.log(final);*/

/*var person = ['Andrew', 26];
var personTwo = ['Ziomek', 66];

function hellower(name, age) {
	var greeting = `Hi ${name}, You are ${age}`;
	console.log(greeting);
};
hellower(...personTwo);*/

var names = ['Mike', 'Cyryl', 'Darek'];
var final = ['Kamil', ...names];

function greetingsForEveryone(names) {
	names.forEach(function(el) {
		console.log(`Siema ${el}`);
	})
}

greetingsForEveryone(final);