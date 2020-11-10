/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-09-14 16:27:02
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-09-14 17:08:37
 */

// public 允许在类的内外部调用
// private 只允许在类的内部调用
// protected 只允许在类的内部调用，在继承的类中可以使用

class Person {
	name: string | undefined; //默认是public public name: string
	// private name: string;
	protected age: number = 12;
	public sayHello() {
		console.log(this.name + " hello " + this.age);
	}
}

class teacher extends Person {
	sayHello() {
		console.log(this.name + " helllo teacher " + this.age);
	}
}

const person = new Person();
const teacher1 = new teacher();
person.name = "ming";
person.sayHello();
teacher1.name = "hong";
teacher1.sayHello();
