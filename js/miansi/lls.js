/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-21 14:14:00
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-21 15:05:09
 */
function fn(str, obj) {
	let reg = /{{([0-9a-zA-Z\[\]\.]+)}}/g;
	let temp = str.replace(reg, (match) => {
		let strArr = match.split(".");
		if (strArr.length !== 0) {
			return obj[strArr[0]][strArr[1]];
		}
		return obj[match.slice(2, -2)];
	});
	console.log(temp);
}

fn("这是一个{{a}}, haha{{b.c}},ojoj{{b.a[0]}}", { a: 1, b: { c: 2 } });
