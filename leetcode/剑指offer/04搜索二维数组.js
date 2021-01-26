/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-26 16:09:07
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-26 16:11:51
 */

/**
 *
 * @param {*} matrix
 * @param {*} target
 * 思路 寻找数组右上角的数字，根据题意，右上角的数字如果大于target，那么target就当前列的之前列，
 * 如果小于，那么target就在当前行的后几行
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */
var findNumberIn2DArray = function (matrix, target) {
	if (!matrix.length) return false;
	let rows = matrix.length,
		cols = matrix[0].length;
	let row = 0;
	let col = cols - 1;
	while (row < rows && col >= 0) {
		if (matrix[row][col] === target) {
			return true;
		} else if (matrix[row][col] < target) {
			row++;
		} else {
			col--;
		}
	}
	return false;
};
