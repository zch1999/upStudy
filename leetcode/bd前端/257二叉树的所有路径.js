/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-13 21:32:52
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-13 21:33:51
 */
var binaryTreePaths = function (root) {
	if (!root) return [];
	let res = [];
	const getRes = (root, tmp, res) => {
		if (!root) return;
		// 将当前值传入临时数组
		tmp.push(root.val);
		// 叶子节点时，将路径格式化后放入结果数组中
		if (!root.left && !root.right) {
			res.push(tmp.join("->"));
		}
		// 递归
		getRes(root.left, [...tmp], res);
		getRes(root.right, [...tmp], res);
	};
	getRes(root, [], res);
	return res;
};
