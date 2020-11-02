import { O_DIRECTORY } from "constants";
import { type } from "os";

/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-23 21:30:05
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-30 18:48:36
 */
// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
	return o.reduce((res, key) => {
		res[key] = key;
		return res;
	}, Object.create(null));
}

const tmp = { North: "North", South: "South", East: "East", West: "West" };

// 创建 K: V
const Direction = strEnum(["North", "South", "East", "West"]);

const test: keyof typeof tmp;

console.log(Direction);
