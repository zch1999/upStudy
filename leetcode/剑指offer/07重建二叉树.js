/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-26 16:50:32
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-26 16:56:45
 */

/**
 *
 * @param {前序遍历} preorder
 * @param {中序遍历} inorder
 * 思路：前序遍历的第一个节点就是整个树的根节点。找到中序遍历中该节点的下标，前序遍历中从1到该下标(包含)(可按节点数量思考)前的节点就是left节点，
 * 中序遍历中该下标之前的节点就是left节点，递归执行。反之，前序遍历之后的就是right树节点，中序遍历之后的就是right节点。
 */
var buildTree = function (preorder, inorder) {
	if (!preorder.length || !inorder.length) return null;
	let index = inorder.indexOf(preorder[0]);
	let root = new TreeNode(preorder[0]);
	root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
	root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
	return root;
};
