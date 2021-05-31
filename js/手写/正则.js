/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-08 00:17:38
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-08 00:26:31
 */
let reg = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}/;

console.log(reg.test("2020-03-08"));

let str = "asdf sdfa ds0faaa fasdf";

function findMax(str) {
	let max = 0;
	let temp = 0;
	for (i of str) {
		if (/[a-zA-Z]/.test(i)) {
			temp++;
			max = Math.max(temp, max);
		} else {
			temp = 0;
		}
	}
	console.log(max);
}

findMax(str);
