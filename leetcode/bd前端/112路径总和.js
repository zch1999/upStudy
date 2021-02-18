/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-13 21:22:49
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-13 21:24:47
 */
var hasPathSum = function (root, targetSum) {
	if (!root) return false;
	// 当到叶子节点后 判断叶子节点的值是否等于target值
	if (!root.left && !root.right) {
		return targetSum == root.val;
	}
	// 左右子树的判断，递归第二个传入的是target值减去当前root值
	return (
		hasPathSum(root.left, targetSum - root.val) ||
		hasPathSum(root.right, targetSum - root.val)
	);
};
