/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-14 17:35:17
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-14 17:36:27
 */
// **思路**
// 将链表值存在一个数组里，然后找到数组的中位数，该数就是搜索二叉树的跟节点，之后通过递归构建left，right节点，这里需要注意的是只需要用到数组的一半了。

var sortedListToBST = function(head) {
	let tmp = head;
	let res = [];
	while (tmp) {
		res.push(tmp.val);
		tmp = tmp.next;
	}
	function grow(res, start, end) {
		if (start > end) return null;
		let mid = (start + end) >> 1;
		let root = new TreeNode(res[mid]);
		root.left = grow(res, start, mid - 1);
		root.right = grow(res, mid + 1, end);
		return root;
	}
	return grow(res, 0, res.length - 1);
};

// **复杂度**
// 时间复杂度：O(n)
// 空间复杂度：O(n)
