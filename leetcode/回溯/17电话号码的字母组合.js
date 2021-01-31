/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-31 22:09:30
 * @LastEditors: zch1999
 * @LastEditTime: 2021-01-31 23:16:07
 */

// 回溯
var letterCombinations = function (digits) {
	if (!digits.length) return [];
	let length = digits.length;
	let res = [];
	let digMap = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	};
	const dfs = (tmp, i) => {
		// 递归终止条件，数字的长度刚好
		if (i === length) {
			res.push(tmp);
			return;
		}
		let letter = digMap[digits[i]];
		for (let j of letter) {
			dfs(tmp + j, i + 1);
		}
	};
	dfs("", 0);
	return res;
};
