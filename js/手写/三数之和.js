/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-17 00:03:05
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-17 00:04:03
 */
var threeSum = function (nums, target) {
	let res = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (i !== 0 && nums[i] == nums[i - 1]) continue;
		let slow = i + 1;
		let fast = nums.length - 1;
		while (slow < fast) {
			let sum = nums[i] + nums[fast] + nums[slow];
			if (sum === target) {
				res.push([nums[i], nums[slow], nums[fast]]);
				while (slow < fast && nums[fast] == nums[fast - 1]) fast--;
				while (slow < fast && nums[slow] == nums[slow + 1]) slow++;
				slow++;
				fast--;
			} else if (sum > target) {
				fast--;
			} else {
				slow++;
			}
		}
	}
	console.log(res);
};

threeSum([-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0], 2);
