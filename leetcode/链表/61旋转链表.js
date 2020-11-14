/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-14 21:22:12
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-14 21:22:32
 */
// **思路**
// 先求余，然后找到尾节点，链到头部，循环余数次

var rotateRight = function(head, k) {
	if (head && !head.next) return head;
	let tmp = head;
	let count = 0;
	while (tmp) {
		count++;
		tmp = tmp.next;
	}
	let time = k % count;
	while (time) {
		tmp = head;
		while (tmp.next.next) {
			tmp = tmp.next;
		}
		tmp.next.next = head;
		head = tmp.next;
		tmp.next = null;
		time--;
	}
	return head;
};

// **复杂度**
// 时间复杂度：O(n)
// 空间复杂度：O(1)
