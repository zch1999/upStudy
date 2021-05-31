/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-01 22:47:56
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-01 22:59:05
 */
function fastSort(nums) {
	const partition = (nums, left, right) => {
		if (left >= right) return;
		let pivot = nums[left];
		let j = left;
		for (let i = left + 1; i <= right; i++) {
			if (nums[i] < pivot) {
				j++;
				[nums[i], nums[j]] = [nums[j], nums[i]];
			}
		}
		[nums[left], nums[j]] = [nums[j], nums[left]];
		partition(nums, left, j - 1);
		partition(nums, j + 1, right);
	};
	partition(nums, 0, nums.length - 1);
	return nums;
}

console.log(fastSort([1, 2, 3, 1, 4, 5, 8, 1, 3, 5, 8]));
