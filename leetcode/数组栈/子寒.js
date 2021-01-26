/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-01-25 21:10:33
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-25 22:05:41
 */
const str = "11+2-3*4+520/256*45+10/5";

function sum(str) {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "*" || str[i] === "/") {
			let index = i;
			while (str[i] !== "+" || (str[i + 2] !== "-" && i < str.length)) {
				i++;
			}
			let num = "";
			while (/[0-9]/.test(stack[stack.length - 1])) {
				num = stack.pop() + num;
			}
			let temp = `(${num}${str.slice(index, i)})`;
			stack.push(...temp);
		} else {
			stack.push(str[i]);
		}
	}
	return stack.join("");
}

console.log(sum(str), "1");
