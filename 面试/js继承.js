/**
 * @file: js继承
 * @author: zhongconghai
 * @Date: 2021-02-24 15:35:53
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-24 16:42:33
 */
// 最推荐的写法
function Parent5() {
	this.name = "parent5";
	this.play = [1, 2, 3];
}
function Child5() {
	Parent5.call(this);
	this.type = "parent5";
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;

// 借助call
function Parent() {
	this.name = "parent1";
}

function Child1() {
	Parent.call(this);
	this.type = "child1";
}

// 借助原型链
function Parent2() {
	this.name = "parent2";
	this.play = [1, 2, 3];
}
function child2() {
	this.type = "child2";
}

Child1.prototype = new Parent2();
