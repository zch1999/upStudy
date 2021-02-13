/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-13 01:18:47
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-13 01:19:48
 */
var maxAreaOfIsland = function (grid) {
	let res = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				res = Math.max(res, dfs(i, j, grid));
			}
		}
	}
	return res;
};

function dfs(i, j, grid) {
	// 退出条件
	if (
		i < 0 ||
		i >= grid.length ||
		j < 0 ||
		j >= grid[0].length ||
		grid[i][j] == 0
	) {
		return 0;
	}
	grid[i][j] = 0;
	let tmp = 1;
	// 计算当前格子相邻为1的数量
	tmp += dfs(i + 1, j, grid);
	tmp += dfs(i - 1, j, grid);
	tmp += dfs(i, j + 1, grid);
	tmp += dfs(i, j - 1, grid);
	return tmp;
}
