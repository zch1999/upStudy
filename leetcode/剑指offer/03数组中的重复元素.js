/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-26 15:47:57
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-26 16:08:51
 */
var findRepeatNumber = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		while (nums[i] !== i) {
			if (nums[i] == nums[nums[i]]) {
				return nums[i];
			}
			let tmp = nums[i];
			nums[i] = nums[tmp];
			nums[tmp] = tmp;
		}
	}
};

findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
