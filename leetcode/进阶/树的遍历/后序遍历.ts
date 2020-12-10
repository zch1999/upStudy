/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-08 17:30:45
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-08 20:24:40
 */

/** 递归 */
var postorderTraversal = function(root) {
	const res = [];
	const inorder = (root, res) => {
		if (!root) return;
		inorder(root.left, res);
		inorder(root.right, res);
		res.push(root.val);
	};
	inorder(root, res);
	return res;
};

/** 迭代 */
var postorderTraversal = function(root) {
	const res = [];
	const tag = [root];
	while (tag.length) {
		let tmp = tag.pop();
		if (tmp) {
			tmp.left & tag.push(tmp.left);
			tmp.right & tag.push(tmp.right);
			res.unshift(tmp.val);
		}
	}
	return res;
};
