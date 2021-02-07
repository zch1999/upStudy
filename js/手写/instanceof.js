/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-07 22:48:22
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-07 23:13:22
 */
function myInstanceof(left, right) {
	if (typeof left !== "object" && left == null) return false;
	let proto = Object.getPrototypeOf(left);
	while (true) {
		if (proto == null) return false;
		if (proto == right.prototype) return true;
		proto = Object.getPrototypeOf(proto);
	}
}

console.log(myInstanceof(new String("11"), String));
