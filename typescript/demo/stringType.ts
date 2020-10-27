import { type } from "os";

/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-23 21:30:05
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-23 22:24:13
 */
const x = <T extends Readonly<T>>(x: Readonly<T>) => {
	return x;
};

const m = x({ a: "3" }).a;

let y: Readonly<{ a: "3" }> = { a: "3" };

let z = y.a;
