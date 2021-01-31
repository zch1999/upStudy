/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-31 21:28:11
 * @LastEditors: zch1999
 * @LastEditTime: 2021-01-31 21:46:24
 */

// 先按子数组中第一个大小排序数组，然后后一项的第一个对比前一项的第二个，如果小于则需要合并区间
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	for (let i = 0; i < intervals.length - 1; i++) {
		if (intervals[i + 1][0] <= intervals[i][1]) {
			// 前一项第一个是否大于后一项第一个
			if (intervals[i][0] > intervals[i + 1][0])
				intervals[i][0] = intervals[i + 1][0]; // 大于则赋值
			// 前一项第二个是否小于后一项第二个
			if (intervals[i][1] < intervals[i + 1][1])
				intervals[i][1] = intervals[i + 1][1]; //小于则赋值
			intervals.splice(i + 1, 1);
			i--;
		}
	}
	return intervals;
};
