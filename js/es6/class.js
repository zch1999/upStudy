/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-30 21:44:15
 * @LastEditors: zch1999
 * @LastEditTime: 2021-01-30 23:17:33
 */

// ES5如何定义类
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.running = function () {
// 	console.log(this.name, this.age);
// };

// var p = new Person("xiaoa", 12);
// p.running();

// ES6 通过class创建类
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// 定义方法
	running() {
		console.log(this.name, this.age);
	}
}

const p = new Person("xiaob", 13);
p.running();
