/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-26 17:21:28
 * @LastEditors: zch1999
 * @LastEditTime: 2021-04-03 17:05:08
 */
function deepClone(obj) {
	let map = new WeakMap();
	const copy = (obj, map) => {
		if (map.get(obj)) {
			console.log(true);
			return obj;
		}
		map.set(obj, true);
		let newObj = Array.isArray(obj) ? [] : {};
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				newObj[key] =
					typeof obj[key] === "object" ? copy(obj[key], map) : obj[key];
			}
		}
		return newObj;
	};
	return copy(obj, map);
}

let a = {
	b: {
		c: {},
	},
};
a.b.c.d = a;

console.log(deepClone(a));
