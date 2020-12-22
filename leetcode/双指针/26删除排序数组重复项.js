/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-22 23:25:46
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-22 23:27:06
 */
// **思路**
// 快慢指针

var removeDuplicates = function (nums) {
	let slow = 0;
	let fast = 0;
	while (fast < nums.length) {
		if (nums[slow] !== nums[fast]) {
			slow++;
			nums[slow] = nums[fast];
		}
		fast++;
	}
	return slow + 1;
};

// 普通遍历
var removeDuplicates = function (nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
			i = i - 1;
		}
	}
	return nums.length;
};
