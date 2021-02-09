/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-08 15:04:43
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-08 15:09:34
 */
var minSubArrayLen = function (target, nums) {
	let count = Infinity;
	let fast = 0;
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		// 从前往后扩大子数组
		res += nums[i];
		// 当子数组大小大于target值时
		while (res >= target) {
			// 先计算长度，获取最短数，注意要+1
			count = Math.min(count, i - fast + 1);
			// 从前往后缩短子数组
			res -= nums[fast++];
		}
	}
	// 整个数组总和小于target则不存在符合条件的子数组
	return count == Infinity ? 0 : count;
};
