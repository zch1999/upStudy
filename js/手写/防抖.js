/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-17 13:34:45
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-11 21:08:02
 */
// 防抖就是事件触发需要等待,例如电梯关门

function debounce(func, time) {
	let timer;
	return function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, arguments);
		}, time);
	};
}
