/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-14 21:19:35
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-14 21:20:27
 */
// **思路**
// 用两个指针pa,pb分别指向两个链表，两个指针同时向后移动，判断pa == pb, 两个链表长度相同：指针相等则是有交点直接返回（没交点会最后返回null），两个链表长度不相同：两指针移到末尾后，指向另一链表头，这样长度差异就消除了。

var getIntersectionNode = function(headA, headB) {
	if (!headA || !headB) return null;
	let pa = headA;
	let pb = headB;
	while (pa !== pb) {
		if ((pa == pb) == null) return null;
		pa = pa ? pa.next : headB;
		pb = pb ? pb.next : headA;
	}
	return pa;
};

// **时间复杂度**
// 时间复杂度：O(n)
// 空间复杂度：O(1)
