/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-23 21:47:27
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-25 23:02:05
 */
/**
 * @description
 * 将一个一维数组切分成二维数组，按照第二个参数（数字）的值，来决定二维数组长度
 * @example
 * const originArr = ['a', 'b', 'c', 'd']
 * const result = chunk(originArr, 3);
 * console.log(result) => [['a','b', 'c'], ['b']];
 * const result = chunk(originArr, 2);
 * console.log(result) => [['a','b'], ['c','b']];
 * const result = chunk(originArr, 1);
 * console.log(result) => [['a‘],['b‘],['c‘],['d']];
 *
 * 你需要实现这个 chunk 方法。
 */

//  export const chunk = (originArr, len) => {

// };
function chunk(originArr, len) {
	let arr = [];
	while (originArr.length > len) {
		let arr1 = originArr.splice(0, len);
		// console.log(arr1);
		arr.push(arr1);
	}
	if (originArr.length > 0) {
		arr.push(originArr);
	}
	console.log(arr);
	return arr;
}
console.log(chunk(["a", "b", "c", "d"], 2));

/**
 * @description 装饰器
 * 你需要实现一个装饰器，在调用任意的 request 成功时调用 reqServerLog 方法
 */

const reqServerLog = Promise.resolve({ status: "ok", code: 200 });
const someReqs = new Array(12).fill(() =>
	Math.random() > 0.5
		? Promise.resolve({ status: "ok", code: 200 })
		: Promise.reject({ status: "fail", code: 500 })
);

export function logDecorator(target, name, descriptor) {
	descriptor.value = () => {};
	return descriptor;
}
