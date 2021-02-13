/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-13 02:42:42
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-13 02:42:42
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	let m = obstacleGrid.length;
	let n = obstacleGrid[0].length;
	let dp = new Array(m);
	for (let i = 0; i < m; i++) {
		dp[i] = new Array(n).fill(0);
	}
	// console.log(dp)
	dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
	// console.log(dp)
	// 如果起点就是障碍物
	if (dp[0][0] == 0) {
		return 0;
	}
	// 第一列
	for (var j = 1; j < n; j++) {
		if (obstacleGrid[0][j] !== 1) {
			dp[0][j] = dp[0][j - 1];
		}
	}
	// 第一行
	for (var r = 1; r < m; r++) {
		if (obstacleGrid[r][0] !== 1) {
			dp[r][0] = dp[r - 1][0];
		}
	}
	// console.log(dp)
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] =
				obstacleGrid[i][j] == 1
					? 0
					: (obstacleGrid[i - 1][j] == 1 ? 0 : dp[i - 1][j]) +
					  (obstacleGrid[i][j - 1] == 1 ? 0 : dp[i][j - 1]);
		}
	}
	return dp[m - 1][n - 1];
};
