/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-26 16:20:46
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-26 16:21:05
 */
var replaceSpace = function (s) {
	// return s.replace(/\s/g, '%20'); // 正则表达式替换
	let res = "";
	for (let val of s) {
		if (val == " ") {
			res += "%20";
		} else {
			res += val;
		}
	}
	return res;
};
