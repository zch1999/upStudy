/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-26 18:08:37
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-26 18:08:48
 */

// 二分法
var minArray = function (numbers) {
	let min = 0,
		max = numbers.length - 1;
	while (min < max) {
		let mid = (min + max) >> 1;
		if (numbers[mid] < numbers[max]) {
			max = mid;
		} else if (numbers[mid] > numbers[max]) {
			min = mid + 1;
		} else {
			max--;
		}
	}
	return numbers[min];
};
