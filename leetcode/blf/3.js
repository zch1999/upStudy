/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-28 19:24:13
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-28 19:44:59
 */

const blf3 = (count, arr) => {
	let dp = new Array(count).fill(0);
	for (let i = 2; i <= count; i++) {
		dp[i] = dp[i - 1] + dp[i];
	}
};
blf3(5, 0);
