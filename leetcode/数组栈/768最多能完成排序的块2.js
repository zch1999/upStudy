/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-12 15:47:25
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-12 15:47:51
 */

// 思路
// 确定局部的最大值，局部数量最小为1，将局部最大值入栈，当遇到比栈顶小的元素，说明栈中最小的大于或等于该元素到局部+栈顶元素为一个局部，没有遇到说明栈顶可以为数量为1的局部，最后数组长度为局部块数量

var maxChunksToSorted = function(arr) {
	let tmp = [];
	for (let i of arr) {
		if (!tmp.length) {
			tmp.push(i);
			continue;
		}
		if (i >= tmp[tmp.length - 1]) {
			tmp.push(i);
		} else {
			let flag = tmp.pop();
			while (tmp.length && i < tmp[tmp.length - 1]) {
				tmp.pop();
			}
			tmp.push(flag);
		}
	}
	return tmp.length;
};
