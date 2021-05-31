/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-22 23:02:14
 * @LastEditors: zch1999
 * @LastEditTime: 2021-04-02 15:08:00
 */
// /**
//  * @file: description
//  * @author: zhongconghai
//  * @Date: 2021-03-22 23:02:14
// * @LastEditors: zch1999
// * @LastEditTime: 2021-03-23 22:17:11
//  */
// function fibk  (function fib() {
// 	fib.tag || (fib.tag = 0);
// 	fib.tag++;
// 	if (fib.tag == 1 || fib.tag == 2) return 1;
// 	let a = 1;
// 	let b = 1;
// 	return function () {
// 		let c = a + b;
// 		a = b;
// 		b = c;
// 		return c;
// 	};
// })();

// console.log(fibk());
// console.log(fibk());
// console.log(fibk());
// console.log(fibk());
// console.log(fibk());
// console.log(fibk());

var s = 0;
var i = 0;
var n = 3;
var fn = [];
for (i = 0; i < 3; i++) {
	fn[i] = () => {
		s = s + i * n;
		console.log(s);
	};
}

fn[0]();
fn[1]();
fn[2]();
