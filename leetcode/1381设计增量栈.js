/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-21 23:50:05
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-22 00:02:11
 */
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
	this.stack = [];
	this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
	if (this.stack.length < this.maxSize) {
		this.stack.push(x);
	}
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
	if (this.stack.length) {
		return this.stack.pop();
	} else {
		return -1;
	}
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */

CustomStack.prototype.increment = function (k, val) {
	let min = Math.min(k, this.stack.length);
	for (let i = 0; i < min; i++) {
		this.stack[i] += val;
	}
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
