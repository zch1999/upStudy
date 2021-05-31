/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-02 18:08:35
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-02 18:25:20
 */
let arr = [1, [2, 3, [4, 5, [6]]]];

function flan(arr, len) {
	return arr.reduce((acc, cur) => {
		return acc.concat(
			len > 1 ? (Array.isArray(cur) ? flan(cur, len - 1) : cur) : cur
		);
	}, []);
}

console.log(flan(arr, 1));
