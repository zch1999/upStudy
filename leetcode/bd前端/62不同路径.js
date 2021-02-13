/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-13 02:32:39
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-13 02:42:09
 */
// 只能往下或往右移动
var uniquePaths = function (m, n) {
	let dp = new Array(m).fill(new Array(n).fill(1));
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}
	return dp[m - 1][n - 1];
};
