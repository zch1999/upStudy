/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-17 14:59:21
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-23 20:52:00
 */

Function.prototype.call = function (context, ...args) {
	let context = context || window;
	context.fn = this;
	let res = eval("context.fn(...args)");
	delete context.fn;
	return res;
};
