/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-07 18:50:04
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-08 17:32:43
 */

/** 迭代 */
var inorderTraversal = function(root) {
	const res = [];
	const tag = [];
	while (root || tag.length) {
		while (root) {
			tag.push(root);
			root = root.left;
		}
		root = tag.pop();
		res.push(root.val);
		root = root.right;
	}
	return res;
};

/** 递归 */
var inorderTraversal = function(root) {
	const res = [];
	const inorder = (root, res) => {
		if (!root) return;
		inorder(root.left, res);
		res.push(root.val);
		inorder(root.right, res);
	};
	inorder(root, res);
	return res;
};
