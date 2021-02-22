/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-22 17:17:09
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-22 17:18:18
 */
let A = {
	b: function () {
		console.log(this);
	},
};

let a = new A();
a.b();
