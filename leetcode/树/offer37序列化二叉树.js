/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-21 18:05:43
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-21 18:05:43
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
	if (!root) return "null,";
	return root.val + "," + serialize(root.left) + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
	if (!data) return new TreeNode(null);
	let tmp = data.split(",");
	const dfs = (tmp) => {
		const flag = tmp.shift();
		if (flag === "null") return null;
		const root = new TreeNode(flag);
		root.left = dfs(tmp);
		root.right = dfs(tmp);
		return root;
	};
	return dfs(tmp);
	// console.log(data)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
