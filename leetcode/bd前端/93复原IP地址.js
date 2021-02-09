/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-08 15:56:39
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-08 16:03:12
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
	const res = [];
	// 回溯递归函数
	const dfs = (tmp, start) => {
		// 退出条件，临时数组里已有4个数，且start刚好是的长度，符合题意
		if (tmp.length == 4 && start == s.length) {
			// 将拼接结果入栈
			res.push(tmp.join("."));
			return;
		}
		// 退出条件，临时数组已满且s未切割完
		if (tmp.length == 4 && start < s.length) {
			return;
		}
		// i<=3 i表示切割长度
		for (let i = 1; i <= 3; i++) {
			// 切割起始位置start+ 切割长度i 大于s的长度，
			if (start + i > s.length) return;
			// 0x 0xx 不符合题意 退出
			if (i !== 1 && s[start] == 0) return;
			let subS = s.substring(start, start + i);
			// 不能大于255
			if (i == 3 && +subS > 255) return;
			tmp.push(subS);
			dfs(tmp, start + i);
			tmp.pop();
		}
	};
	dfs([], 0);
	return res;
};
