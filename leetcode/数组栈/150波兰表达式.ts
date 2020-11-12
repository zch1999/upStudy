/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-10 20:02:22
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-10 20:53:25
 */

// 利用栈存放数字，遇到+-*/就出栈运算，将运算结果入栈

function evalRPN(tokens: string[]): number {
	let tmp: any[] = [];
	for (let i of tokens) {
		if (!isNaN(parseInt(i))) {
			tmp.push(i);
		} else {
			let a = parseInt(tmp.pop());
			let b = parseInt(tmp.pop());
			switch (i) {
				case "+":
					tmp.push(b + a);
					break;
				case "-":
					tmp.push(b - a);
					break;
				case "*":
					tmp.push(b * a);
					break;
				case "/":
					tmp.push(Math.trunc(b / a));
					break;
			}
		}
	}
	return tmp[0];
}
