/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-08 17:56:54
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-08 18:11:42
 */

/** 递归写法 */
var inorderTraversal = function (root) {
	let res = [];
	const inorder = (res, root) => {
		if (!root) return null;
		inorder(res, root.left);
		res.push(root.val);
		inorder(res, root.right);
	};
	inorder(res, root);
	return res;
};

/** 迭代 */
var inorderTraversal = function (root) {
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
