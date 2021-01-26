/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-26 17:32:45
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-26 17:32:59
 */

// 动态规划
var numWays = function (n) {
	if (n < 2) return 1;
	let dp = Array(n).fill(0);
	dp[0] = 1;
	dp[1] = 1;
	for (let i = 2; i <= n; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
	}
	return dp[n];
};
