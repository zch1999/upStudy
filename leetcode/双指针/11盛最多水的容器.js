/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-01 19:35:33
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-01 19:38:25
 */

// 根据观察可知，盛水的容积就等于左右两边柱子中低的 * （右边柱子下标-左边柱子下标），利用双指针遍历数组，只保留最大值即可

function maxArea(height) {
	let count = 0;
	let slow = 0;
	let fast = height.length - 1;
	// let maxLeft = 0, maxRight = 0;
	while (slow < fast) {
		if (height[slow] <= height[fast]) {
			// if(height[slow] > maxLeft) {
			count = Math.max((fast - slow) * height[slow], count);
			// maxLeft = height[slow];
			// }
			slow++;
		} else {
			// if(height[fast] > maxRight) {
			count = Math.max((fast - slow) * height[fast], count);
			// maxRight = height[fast];
			// }
			fast--;
		}
	}
	return count;
}
