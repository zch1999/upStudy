/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-26 17:12:25
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-26 17:20:40
 */
function shallowCopy(obj) {
	if (!obj || typeof obj !== "object") return;
	let newObj = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
