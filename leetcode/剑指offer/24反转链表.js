/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-27 21:09:41
 * @LastEditors: zch1999
 * @LastEditTime: 2021-01-27 21:10:26
 */

// 递归法
var reverseList = function (head) {
	if (!head || !head.next) return head;
	let tmp = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return tmp;
};

// 迭代法
var reverseList = function (head) {
	let res = null;
	while (head) {
		let tmp = head.next;
		head.next = res;
		res = head;
		head = tmp;
	}
	return res;
};
