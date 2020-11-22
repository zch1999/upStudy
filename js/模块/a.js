/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-22 19:46:29
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-22 20:11:58
 */
// a.js
// import { foo } from "./b";
const { foo } = require("./b");
console.log(foo);
setTimeout(() => {
	console.log(foo);
	import("./b").then(({ foo }) => {
		console.log(foo);
	});
}, 1000);

// b.js
