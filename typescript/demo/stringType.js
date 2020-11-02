"use strict";
exports.__esModule = true;
/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-23 21:30:05
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-30 18:44:49
 */
// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum(o) {
    return o.reduce(function (res, key) {
        res[key] = key;
        return res;
    }, Object.create(null));
}
// 创建 K: V
var Direction = strEnum(["North", "South", "East", "West"]);
console.log(Direction, typeof Direction);
