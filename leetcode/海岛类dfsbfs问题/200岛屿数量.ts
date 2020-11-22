/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-20 18:45:16
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-20 18:52:14
 */
/** 思路
 * 一片相邻的导为一个岛屿，那么遍历整个海岛数组，遇到1则岛屿计数count+1，之后通过dfs遍历将这一片岛的code都置为0，遍历完整个海岛数组即可得到岛屿数量
 * 时间复杂度：O(nlog(n))
 * 空间复杂度：O(1)
 */

function numIslands(grid: string[][]): number {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == "0") continue;
			count++;
			toZero(grid, i, j);
		}
	}
	return count;
}

/** 将一片岛屿code置为0 */
function toZero(grid: string[][], i: number, j: number) {
	if (grid[i][j] === "0") return;
	grid[i][j] = "0";
	i - 1 >= 0 && toZero(grid, i - 1, j);
	i + 1 < grid.length && toZero(grid, i + 1, j);
	j - 1 >= 0 && toZero(grid, i, j - 1);
	j + 1 < grid[0].length && toZero(grid, i, j + 1);
}
