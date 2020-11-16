/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-16 22:17:30
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-16 22:18:11
 */
// 使用一个数组来记录最近最久未使用即可
class LRUCache {
	public stack: number[];
	public flag: { [key: number]: number };
	constructor(public capacity: number) {
		this.stack = [];
		this.flag = {};
	}

	get(key: number): number {
		if (!this.flag[key]) {
			return -1;
		} else {
			this.stack.splice(this.stack.indexOf(key), 1);
			this.stack.push(key);
			return this.flag[key];
		}
	}

	put(key: number, value: number): void {
		if (!this.flag[key]) {
			if (this.stack.length >= this.capacity) {
				delete this.flag[this.stack[0]];
				this.stack.splice(0, 1);
			}
		} else {
			this.stack.splice(this.stack.indexOf(key), 1);
		}
		this.stack.push(key);
		this.flag[key] = value;
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
