/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-17 14:58:14
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-23 20:55:38
 */
Function.prototype.apply = function (context, args) {
	let context = context || window;
	let args = args || [];
	context.fn = this;
	let res = eval("context.fn(...args)");
	delete context.fn;
	return res;
};
