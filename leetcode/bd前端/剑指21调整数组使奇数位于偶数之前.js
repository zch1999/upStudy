/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-14 00:12:23
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-14 00:15:25
 */
// 双指针
var exchange = function (nums) {
	let slow = 0,
		fast = nums.length - 1;
	while (slow < fast) {
		// 奇数，slow++
		if (nums[slow] % 2 == 1) {
			slow++;
			continue;
		}
		// 当fast处为偶数，fast--
		if (nums[fast] % 2 == 0) {
			fast--;
			continue;
		}
		// 互换两个数
		let temp = nums[slow];
		nums[slow] = nums[fast];
		nums[fast] = temp;
	}
	return nums;
};
