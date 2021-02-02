/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-02 18:05:13
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-02 19:23:10
 */

/**
 * 现已知一个字符串是由正整数和加减乘除四个运算符(+ - * /)组成。
 * 例如存在字符串 const str = '11+2-3*4+5/2*4+10/5'，现在需要将高优先级运算，用小括号包裹起来，
 * 例如结果为 '11+2-(3*4)+(5/2*4)+(10/5)'。注意可能会出现连续的乘除运算，需要包裹到一起。
 */

function sum(str) {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "*" || str[i] === "/") {
			let tempStr = str[i];
			i++;

			while (i < str.length && str[i] !== "+" && str[i] !== "—") {
				tempStr += str[i];
				i++;
			}
			let num = "";
			while (!isNaN(stack[stack.length - 1])) {
				num = stack.pop() + num;
			}
			let temp = `(${num}${tempStr})${i < str.length ? str[i] : ""}`;
			stack.push(...temp);
			// i++
		} else {
			stack.push(str[i]);
		}
	}
	return stack.join("");
}

console.log(sum("11+2-3*4+5/2*4+10/5"));
