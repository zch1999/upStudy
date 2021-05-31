/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-08 21:53:04
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-26 15:20:57
 */

/** 格式化给乘除加括号 2+1*2*4-2/4 ->2+(1*2*4)-(2/4) */
function format(str) {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "*" || str[i] === "/") {
			let tmpStr = str[i];
			i++;
			while (i < str.length && str[i] !== "+" && str[i] !== "-") {
				tmpStr += str[i];
				i++;
			}
			let stackTop = "";
			while (!isNaN(stack[stack.length - 1])) {
				stackTop = stack.pop() + stackTop;
			}
			stack.push(`(${stackTop}${tmpStr})${i < str.length ? str[i] : ""}`);
		} else {
			stack.push(str[i]);
		}
	}
	return stack.join("");
}

console.log(format("11+2-3*4+5/2*4+10/5"));
let a = [];
