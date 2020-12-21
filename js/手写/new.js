/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-17 14:56:55
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-21 16:39:33
 */

/**
 *  new
 * 创建一个全新的对象
 * this指向新创建的对象
 * 如果构造函数返回的是引用数据类型，则返回运行后的结果,否则返回新创建的obj
 */
function myNew(func, ...args) {
	if (typeof func !== "function") {
		throw "not function";
	}
	let obj = {};
	obj.__proto__ = Object.create(func.prototype);
	let tmp = func.apply(obj, args);
	let isObj = typeof tmp === "object" && tmp !== null;
	let isFunction = typeof tmp === "function";
	return isFunction || isObj ? result : obj;
}
