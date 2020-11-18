/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-18 22:09:34
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-18 22:16:41
 */
// **思路**
// 队列+循环，层序遍历，从右往左遍历，队列最后一个就是最左的节点

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

function findBottomLeftValue(root: TreeNode | null): number {
	let tmp = [];
	let flag: TreeNode | null | undefined;
	tmp.push(root);
	while (tmp.length) {
		flag = tmp.shift();
		if (flag && flag.right) tmp.push(flag.right);
		if (flag && flag.left) tmp.push(flag.left);
	}
	return flag ? flag.val : 0;
}

// **复杂度**
// 时间复杂度：O(n)
// 空间复杂度：O(n)
