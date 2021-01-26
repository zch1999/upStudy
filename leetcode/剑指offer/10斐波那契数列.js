/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-26 17:16:07
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-26 17:18:13
 */

// 尾递归，记得取模。
var fib = function (n) {
	let fn = (n, tmp = 1, tmp2 = 1) => {
		if (n <= 1) return n;
		if (n === 2) return tmp2;
		return f(n - 1, tmp2, (tmp + tmp2) % 1000000007);
	};
	return fn(n);
};

// 常规想法
var fib = function (n) {
	if (n < 2) return n;
	let f0 = 0;
	let f1 = 1;
	while (n - 1) {
		let tag = f1;
		f1 = (f1 + f0) % 1000000007;
		f0 = tag;
		n--;
	}
	return f1;
};
