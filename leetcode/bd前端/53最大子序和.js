/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-13 01:11:21
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-13 01:11:42
 */
var maxSubArray = function (nums) {
	let res = nums[0];
	let tmp = 0;
	for (let i of nums) {
		if (tmp > 0) {
			tmp += i;
		} else {
			tmp = i;
		}
		res = Math.max(tmp, res);
	}
	return res;
};
