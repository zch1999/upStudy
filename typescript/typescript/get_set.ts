/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-09-14 16:48:04
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-09-14 16:59:34
 */

// get和set都是经过包装的
class Person2 {
	constructor(private _age: number, public readonly sex: string) {}
	get age() {
		return this._age - 3;
	}
	set age(age: number) {
		this._age = age + 1;
	}
}

const a3 = new Person2(18, "男");
a3.age = 15; // setter
// a3.sex = 'n' 只读属性不可更改
console.log(a3.age); // getter

// static类型不用new实例就可以调用
class Girl {
	// sayHello() {
	// 	return "hi";
	// }
	static sayHello() {
		return "hi";
	}
}

// const girl = new Girl();
console.log(Girl.sayHello());
