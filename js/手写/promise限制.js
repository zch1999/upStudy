/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-07 20:42:11
 * @LastEditors: zch1999
 * @LastEditTime: 2021-06-25 17:19:01
 */

function Scheduler() {
	let temp = 0;
	let res = [];
	let len = 0;
	this.add = function (promiseCreator) {
		let myPromise = new Promise((resolve) => {
			temp++;
			if (temp <= 2) {
				resolve(
					promiseCreator().then(function f() {
						if (res.length) {
							let { myresolve, fullfilled } = res.shift();
							myresolve(fullfilled().then(f));
						} else {
							temp = 0;
						}
					})
				);
			} else {
				res.push({ fullfilled: promiseCreator, myresolve: resolve });
			}
		});
		return myPromise;
	};
}

const timeout = (time) =>
	new Promise((resolve) => {
		setTimeout(resolve, time);
	});
const scheduler = new Scheduler();
const addTask = (time, order) => {
	scheduler.add(() => timeout(time)).then(() => console.log(order));
};
addTask(700, "1");
addTask(500, "2");
addTask(300, "3");
addTask(100, "4");
