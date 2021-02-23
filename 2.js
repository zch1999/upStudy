/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-23 15:22:42
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-23 15:24:15
 */

function get(nums1, nums2) {
	let res = [];
	let a = nums1,
		b = nums2;
	if (nums1.length < nums2.length) {
		b = nums1;
		a = nums2;
	}
	for (let i = 0; i < b.length; i++) {
		if (a.includes(b[i]) && !res.includes(b[i])) {
			res.push(b[i]);
		}
	}
	return res;
}
let nums1 = [1, 2, 2, 1],
	nums2 = [2, 2];

console.log(get(nums1, nums2));
