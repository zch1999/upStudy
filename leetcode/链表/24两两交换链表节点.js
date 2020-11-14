/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-13 21:24:46
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-13 21:46:53
 */

// **思路**
// 递归到链表尾部，判断单双数，如果是双数就将两个节点交换，并把交换后前面的节点返回，否则就将单个节点返回（这其实就是最后一个节点），这样就可以处理全部节点

var swapPairs = function(head) {
	let res;
	if (head) res = head.next;
	if (head && head.next) {
		let tmp = swapPairs(head.next.next);
		head.next.next = head;
		head.next = tmp;
	}
	return res ? res : head;
};

// **复杂度**

// 时间复杂度：O(N)
// 空间复杂度：O(1)

// 从头交换
// 当前的下一个等于下一次的交换
// 当前的下一个的下一个等于当前
var swapPairs = function(head) {
	if (!head | (head && !head.next)) return head;
	let res;
	if (head) res = head.next;
	let tmp = head.next.next;
	head.next.next = head;
	head.next = tmp ? swapPairs(tmp) : null;
	return res;
};
