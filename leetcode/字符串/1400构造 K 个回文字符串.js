/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-04 18:21:19
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-04 18:23:34
 */

// 通过计算字符串中的奇数字符个数，奇数字符数就是至少的回文数，如果奇数字符数小于k且s的长度大于k则符合题意返回true

var canConstruct = function (s, k) {
	let obj = {};
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]]) {
			delete obj[s[i]];
		} else {
			obj[s[i]] = 1;
		}
	}
	return Object.keys(obj).length <= k && s.length >= k;
};
