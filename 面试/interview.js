/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-22 17:17:09
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-24 00:34:57
 */
// "use strict";
// function foo() {
// 	console.log(this.a);
// }

// var obj = {
// 	a: 2,
// 	foo: foo,
// };
// console.log(obj.foo());
// var bar = obj.foo;

let a = { name: 1 };
let b = a;
a.x = { age: 2 };
a = a.x;
console.log(a, b);

export default a = 123;
export const a = 123;
export class A {}
export default class A {}
