/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-09 23:36:56
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-09 23:37:22
 */
var sumNumbers = function (root) {
	if (!root) return 0;
	function calc(count, root) {
		if (!root) return 0;
		count = count * 10 + root.val;
		if (!root.left && !root.right) return count;
		return calc(count, root.left) + calc(count, root.right);
	}
	return calc(0, root);
};
