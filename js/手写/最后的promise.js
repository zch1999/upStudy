/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-02 18:29:46
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-02 18:29:46
 */
function lastPromise(promiseFunction) {
	return new Promise((resolve) => {
		if (lastPromise.activeIndex === undefined) {
			lastPromise.activeIndex = 0;
		}
		lastPromise.activeIndex++;
		let index = lastPromise.activeIndex;
		promiseFunction().then((res) => {
			if (lastPromise.activeIndex === index) {
				lastPromise.activeIndex = undefined;
				resolve(res);
			}
		});
	});
}
