/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-13 22:39:36
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-13 22:42:36
 */
// 利用i计数，当i>=k时，q=q.next；
var getKthFromEnd = function (head, k) {
	let p = head,
		q = head;
	let i = 0;

	while (p) {
		// 当i（p）走到第k个位置时，q就可以走了，当p走完时，q刚好就在倒数第k个
		if (i >= k) {
			q = q.next;
		}
		i++;
		p = p.next;
	}
	return i < k ? null : q;
};
