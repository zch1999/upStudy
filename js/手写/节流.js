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
