/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-09-15 18:35:27
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-09-16 21:12:07
 */

function createArray<T>(length: number, value: T): Array<T> {
	let result = [];
	return [value];
}

createArray(1, "w");

// 多类型
function swap<U, T>(tuple: [U, T]): [U, T] {
	return [tuple[0], tuple[1]];
}

console.log(swap([1, "w"]));

// 泛型约束
function numbersArr<T>(arg: T): T {
	// console.log(arg.length);  由于类型未知，所以不能随意操作它的属性或方法 error: 'length' not exist on type 'T'
	return arg;
}

interface numArr {
	length: number;
}

function numArrs<T extends numArr>(arg: T): T {
	console.log(arg.length); // T 已经继承了number，所以可以调用该方法
	return arg;
}

// numArrs(7) 报错，7没有length属性
numArrs("7"); // ok

// 泛型类
class GenericNumber<T> {
	value: T;
	add: (x: T, y: T) => T;
}

const myGeneric = new GenericNumber<number>();
myGeneric.value = 1;
myGeneric.add = function (x, y) {
	return x + y;
};

console.log(myGeneric.add(7, 2)); // 9

// 泛型的默认类型
// 当泛型没有在代码中指定类型，从实际值中也无法类型推断出时，就是默认值类型
// 下面的函数无法通过代码看出是什么类型，就使用到了默认string
function createArr<T = string>(length: number, value: T): T[] {
	let result: T[] = [];
	for (let i = 0; i < length; i++) {
		result[i] = value;
	}
	return result;
}
