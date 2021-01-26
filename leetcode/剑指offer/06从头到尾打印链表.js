/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-26 16:31:24
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-26 16:32:54
 */

/**
 *
 * @param {*} head
 * 第一种简单易懂，栈的解法，第二种递归，但链表层级过大时不建议，可能造成调用栈溢出。
 */
var reversePrint = function (head) {
	// let res = [];
	// while(head) {
	//     res.unshift(head.val);
	//     head = head.next;
	// }
	// return res;
	if (!head) return [];
	let tmp = head.val;
	let arr = reversePrint(head.next);
	arr.push(tmp);
	return arr;
};
