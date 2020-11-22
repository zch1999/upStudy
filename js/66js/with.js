/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-18 22:59:13
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-22 16:40:23
 */
({
	x: 10,
	foo: function() {
		function bar() {
			console.log(x);
			console.log(y);
			console.log(this.x);
		}
		with (this) {
			var x = 20;
			var y = 30;
			bar.call(this);
		}
	},
}.foo());
//undefined 30 20
// var obj = {
// 	a: 20,
// };
// with (obj) {
// 	var a = 40;
// 	var b = 90;
// }

// console.log(a); //undefined
// console.log(b); //90

console.log(new Number(1) instanceof Number);

console.log(1 instanceof Number);
