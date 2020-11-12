/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-12 15:54:30
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-12 15:58:57
 */

// 数组arr是[0, 1, ..., arr.length - 1]的一种排列
// 思路：因为数组arr是上述特殊结构的，所以当在for循环中局部最大值 == i则表明是一个块

function maxChunksToSorted1(arr: number[]): number {
	let tmp = 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		tmp = Math.max(tmp, arr[i]);
		if (tmp == i) count++;
	}
	return count;
}
