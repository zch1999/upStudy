/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-08 17:54:10
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-08 17:56:23
 */
var invertTree = function (root) {
	if (!root) return null;
	// 翻转跟节点的左右子树
	let tmp = root.left;
	root.left = root.right;
	root.right = tmp;
	// 其他的交给递归处理
	invertTree(root.left);
	invertTree(root.right);
	return root;
};

var invertTree = function (root) {
	if (!root) return null;
	// 递归到底部
	invertTree(root.left);
	invertTree(root.right);
	// 翻转二叉树左右节点
	let tmp = root.left;
	root.left = root.right;
	root.right = tmp;
	return root;
};
