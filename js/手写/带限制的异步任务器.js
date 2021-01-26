/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-12 17:07:48
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-12 17:22:18
 */

/** 创建任务 */
function createTask(t) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(t);
		}, t);
	});
}

/** promise.all */
function limitTask(tasks, limit) {
	return new Promise((resolve, reject) => {
		let total = 0; /** 记录任务总数 */
		let i = 0;
		let running = 0; /** 正在运行的任务 */
		let res = []; /** 任务结果 */
		function run() {
			if (total >= tasks.length) {
				resolve();
			}
			if (running >= limit) {
				return;
			}
			let task = tasks[i];
			task.then((r) => {
				running--;
				res[i] = r;
			});
			running++; /** 运行任务数+1 */
			i++;
			run();
		}
		run();
	});
}

limitTask([createTask(1000), createTask(1000), createTask(1000)], 2).then(
	(res) => {
		console.log(res);
	}
);
