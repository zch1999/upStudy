/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-16 11:29:54
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-16 11:41:43
 */
// **思路**
// 当我们定义快慢两个指针，一个往后走一步，一个往后走两步，当它们其中一个为null时，表明无环，当它们相遇时，定义一个新指针从链表头部往后移动一步，slow同时移动一步，相遇时就是环头部节点

var detectCycle = function(head) {
	if (!head) return null;
	let slow = head;
	let fast = head;
	while (slow && fast) {
		slow = slow.next;
		fast = fast.next ? fast.next.next : null;
		if (!fast || !slow) return null;
		if (slow === fast) {
			while (head) {
				if (head === slow) return head;
				head = head.next;
				slow = slow.next;
			}
		}
	}
	return null;
};

// 使用set记录链表中的节点，当遇到set中已有的节点，此节点就是环头节点
var detectCycle = function(head) {
	let tmp = new Set();
	while (head) {
		if (tmp.has(head)) {
			return head;
		}
		tmp.add(head);
		head = head.next;
	}
	return null;
};

// **复杂度*
// 时间复杂度：O(n)
// 空间复杂度：O(1)
