/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-07 18:48:01
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-07 18:52:16
 */

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

/** 迭代 */
function preorderTraversal(root: TreeNode | null): number[] {
	const res: number[] = [];
	const tag: (TreeNode | null)[] = [root];
	while (tag.length) {
		let tmp = tag.pop();
		if (tmp) {
			res.push(tmp.val);
			tmp.right && tag.push(tmp.right);
			tmp.left && tag.push(tmp.left);
		}
	}
	return res;
}

/** 递归 */
// function preorderTraversal(root: TreeNode | null): number[] {
//     const res: number[] = [];
//     const preorder = (root: TreeNode | null, res:number[]) => {
//         if(!root) return;
//         res.push(root.val)
//         preorder(root.left, res)
//         preorder(root.right, res)
//     }
//     preorder(root, res)
//     return res
// };
