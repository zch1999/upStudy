/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-22 17:17:09
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-23 01:26:44
 */
// "use strict";
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo,
};
console.log(obj.foo());
var bar = obj.foo;
