/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-17 13:34:45
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-26 16:32:00
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

// 防抖函数的实现
function debounce(func, wait, immediate) {
	let timeout;
	return function () {
		// 改变内部this的指向
		// console.log(this) container调用该函数，
		// 所以this指向container
		let context = this;
		let args = arguments;
		clearTimeout(timeout);
		if (immediate) {
			let callNow = !timeout;
			timeout = setTimeout(() => {
				timeout = null;
			}, wait);
			// 立即执行
			if (callNow) func.apply(context, args);
		} else {
			// 不会立即执行
			timeout = setTimeout(function () {
				func.apply(context, args);
			}, wait);
		}
	};
}
