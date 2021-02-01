/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-01 19:39:23
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-01 20:19:28
 */

// 双指针

var trap = function (height) {
	let slow = 0;
	let fast = height.length - 1;
	let count = 0;
	let maxLeft = 0,
		maxRight = 0;
	while (slow < fast) {
		if (height[slow] <= height[fast]) {
			maxLeft = Math.max(height[slow], maxLeft);
			count += maxLeft - height[slow];
			slow++;
		} else {
			maxRight = Math.max(maxRight, height[fast]);
			count += maxRight - height[fast];
			fast--;
		}
	}
	return count;
};
