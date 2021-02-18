/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-13 22:09:47
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-13 22:11:10
 */
// 迭代 注意第一个节点要指向null即可
var reverseList = function (head) {
	let root = head;
	let temp = null;
	while (root) {
		let pre = root.next;
		root.next = temp;
		temp = root;
		root = pre;
	}
	return temp;
};

// 递归
var reverseList = function (head) {
	if (!head || !head.next) return head;
	let temp = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return temp;
};
