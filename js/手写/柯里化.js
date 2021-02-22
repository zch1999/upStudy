/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-17 15:01:51
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-22 22:59:42
 */
// function sum(...argu) {
// 	console.log(...arguments);
// 	function fn() {
// 		[...arguments].reduce((prev, con) => prev + con);
// 	}
// 	return fn();
// }

// function curry(fn, ...args) {
// 	return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }

function curry(func) {
	return function curried(...args) {
		console.log(func.length, args);
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
}

const sum = (a, b, c) => {
	return a + b + c;
};

let sumA = curry(sum);
sumA(1, 2, 3);
sumA(1)(2)(3);
