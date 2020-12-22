/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-17 14:49:58
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-21 16:41:31
 */
function throttle(func, time) {
	let oldTime = new Date();
	return function () {
		let newTime = new Date();
		if (newTime - old > time) {
			func();
			oldTime = newTime;
		}
	};
}
