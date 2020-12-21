// 防抖就是事件触发需要等待,例如电梯关门

function debounce(func, time) {
	let timer;
	return function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			func.apple(this, arguments);
		}, time);
	};
}
