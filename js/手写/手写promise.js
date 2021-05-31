/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-07 22:38:39
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-07 23:02:57
 */
function myPromise(executor) {
	this.value = null;
	this.error = null;
	this.status = "pending";
	this.onFulfilledCallbacks = [];
	this.onRejectedCallbacks = [];
	const resolve = (value) => {
		if (this.status !== "pending") return;
		this.value = value;
		this.status = "fulfilled";
		this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
	};
	const reject = (error) => {
		if (this.status !== "pending") return;
		this.error = error;
		this.status = "rejected";
		this.onRejectedCallbacks.forEach((callback) => callback(this.error));
	};
	executor(resolve, reject);
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
	if (this.status === "pending") {
		this.onFulfilledCallbacks.push(onFulfilled);
		this.onRejectedCallbacks.push(onRejected);
	} else if (this.status === "fulfilled") {
		onFulfilled(this.value);
	} else {
		onRejected(this.error);
	}
	return this;
};

let p1 = new myPromise((resolve) => {
	setTimeout(() => {
		resolve(122);
	}, 500);
});
p1.then((res) => console.log(res)).then((res) => console.log(res));
