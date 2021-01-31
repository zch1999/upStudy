/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-31 17:50:24
 * @LastEditors: zch1999
 * @LastEditTime: 2021-01-31 19:14:08
 */

// 面向对象的三大特性：封装，继承， 多态

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	running() {
		console.log("running");
	}
}

class Student extends Person {
	constructor(name, age, sno) {
		super(name, age);
		this.sno = sno;
	}
}

const stu = new Student("1", 12, 12);
stu.running();

class Teacher extends Person {
	constructor() {}
}
