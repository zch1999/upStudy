/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-07 23:44:40
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-07 23:44:41
 */
// 统计当前网页h开头元素
function countStartWithH() {
	const countObj = {};
	findH(document.documentElement, countObj);
	return countObj;
}
function findH(node, countObj) {
	let count = 0;
	if (node === null) {
		return null;
	}
	const nodeName = node.nodeName;
	if (nodeName.toLowerCase().charAt(0) === "h") {
		// 当前对象中没有这个nodename
		if (!countObj[nodeName]) {
			countObj[nodeName] = 1;
		} else {
			// 已经有了
			countObj[nodeName] += 1;
		}
	}
	// 当前元素有子元素
	if (node.children.length !== 0) {
		// 遍历子元素
		for (let i = 0; i < node.children.length; i++) {
			findH(node.children[i], countObj);
		}
	}
}
