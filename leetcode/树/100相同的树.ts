/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-17 21:52:37
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-17 21:53:57
 */
// **思路**
// 递归遍历两个树的同一节点，判断结构是否相同，val是否相同

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	// return JSON.stringify(p) === JSON.stringify(q)
	if (!p && !q) {
		return true;
	} else if (!p || !q) {
		return false;
	} else {
		if (p.val !== q.val) return false;
		return isSameTree(p.left, q.left) && isSameTree(q.right, p.right);
	}
}

// **复杂度**
// 时间复杂度：O(n)
// 空间复杂度：O(1)
