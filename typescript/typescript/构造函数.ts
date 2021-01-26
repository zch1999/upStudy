/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-09-14 16:40:44
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-04 21:36:56
 */

// 子类构造函数必须调用父类构造函数 super（）
class Person1 {
	// public name: string;
	// constructor( name: string) {
	// 	this.name = name;
	// }
	constructor(public name: string) {}
}

class Teacher extends Person1 {
	constructor(public age: number) {
		super("hong");
	}
}

const person1 = new Person1("ming");
const teacher2 = new Teacher(12);

console.log(teacher2.age);
