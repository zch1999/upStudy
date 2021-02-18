/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-18 23:35:21
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-18 23:46:40
 */

// 第一步确定链表是否有环，快慢指针，一个走一步，一个走两步，相遇即为有环，
// 第二步找到入口点，因为快指针走的路程是慢指针的两倍，所以从head头节点走到
//相遇时，慢指针走的距离：D+S1
// 假设相遇时快指针已经绕环 n 次，它走的距离：D+n(S1+S2)+S1
// 因为快指针的速度是 2 倍，所以相同时间走的距离也是 2 倍：
// D+n(S1+S2)+S1 = 2(D+S1)
// 即 (n-1)S1+ nS2=D

var detectCycle = function (head) {
	let slow = head,
		fast = head;
	while (slow && fast) {
		slow = slow.next;
		fast = fast.next ? fast.next.next : null;
		if (!fast || !slow) return null;
		if (slow == fast) {
			while (head) {
				if (head == slow) {
					return slow;
				}
				head = head.next;
				slow = slow.next;
			}
		}
	}
	return null;
};
