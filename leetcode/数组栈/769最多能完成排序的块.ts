/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-12 15:54:30
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-12 17:02:38
 */

// 数组arr是[0, 1, ..., arr.length - 1]的一种排列
// 思路：因为数组arr是上述特殊结构的，所以当在for循环中局部最大值 == i则表明是一个块

// function maxChunksToSorted1(arr: number[]): number {
// 	let tmp = 0;
// 	let count = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		tmp = Math.max(tmp, arr[i]);
// 		if (tmp == i) count++;
// 	}
// 	return count;
// }

const maxChunksToSorted1 = function(arr: number[]) {
	let maxNumber = arr[0];
	let resultNumber = 0;
	arr.forEach((i, index) => {
		if (i > maxNumber) maxNumber = i;
		if (maxNumber < Math.min(...arr.slice(index + 1))) {
			resultNumber++;
			maxNumber = arr[index + 1];
		}
	});
	return resultNumber;
};
console.log(maxChunksToSorted1([4, 3, 2, 1, 5]));
