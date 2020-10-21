/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-22 00:00:44
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-22 00:01:26
 */
class CustomStack1 {
	public stack: number[];
	public max: number;
	constructor(maxSize: number) {
		this.stack = [];
		this.max = maxSize;
	}

	push(x: number): void {
		if (this.stack.length < this.max) {
			this.stack.push(x);
		}
	}

	pop(): number {
		if (this.stack.length) {
			let tmp = this.stack.pop();
			if (tmp) {
				return tmp;
			}
			return -1;
		} else {
			return -1;
		}
	}

	increment(k: number, val: number): void {
		let min = Math.min(this.stack.length, k);
		for (let i = 0; i < min; i++) {
			this.stack[i] += val;
		}
	}
}
