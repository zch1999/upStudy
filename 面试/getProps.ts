/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-24 00:40:50
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-24 00:59:51
 */
function getProps<T extends object>(obj: T, key: keyof T): T[keyof T] {
	return obj[key];
}

var obj = {
	name: 1,
	age: 12,
	tt: "2342",
};
type x = keyof typeof obj;
console.log(getProps(obj, "name"));
getProps(obj, 123);
