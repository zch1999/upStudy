/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-17 14:57:28
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-23 21:22:28
 */
Function.prototype.bind = function (func, ...args) {
	if (typeof this !== "function") {
		throw new TypeError("not a function");
	}
	let fn = this;
	function newFunc(...args1) {
		let allArgs = args.concat(args1);
		if (this instanceof newFunc) {
			return fn.apply(this, allArgs);
		}
		return fn.apply(func, allArgs);
	}
	newFunc.prototype = Object.create(fn.prototype);
	return newFunc;
};

function Animal(name, color) {
	this.name = name;
	this.color = color;
}

Animal.prototype.say = function () {
	return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.bind(null, "cat");
const cat = new Cat("white");
if (
	cat.say() === "I'm a white cat" &&
	cat instanceof Cat &&
	cat instanceof Animal
) {
	console.log("success");
}
