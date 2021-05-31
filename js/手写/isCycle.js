/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-04-02 14:58:52
 * @LastEditors: zch1999
 * @LastEditTime: 2021-04-03 17:07:57
 */
function isCycle(obj) {
	let map = new Map();
	function func(obj, map) {
		// console.log(obj);
		if (map.get(obj)) {
			return true;
		}
		map.set(obj, true);
		for (let i in obj) {
			// if (map.get(i)) return true;
			if (typeof obj[i] === "object") {
				if (func(obj[i], map)) {
					return true;
				}
			}
		}
		return false;
	}
	return func(obj, map);
}

let a = {
	b: {
		c: {},
	},
};
// a.b.c.d = a;

console.log(isCycle(a));
