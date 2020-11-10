<!--
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-09-10 00:00:46
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-09-14 15:18:04
 -->
<!--
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-09-10 00:00:46
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-09-14 15:08:08
 -->

# typescript

## 类型

null & undefined 是所有类型的子类型，因此它们可以赋值给其他部分类型

## 任意值

## 类型注解（ts 自己可以分析出来就不用类型注解 ，可以判断就不需要）

```js
let count: number;
count = 1;
```

## 类型推断

typescript 自己可以推断

```js
let count = 1;
```

## interface 和 type(类型别名)

```js
type a = string;
```

类型别名可以直接为类型
interface 必须为格式

```js
interface a = {
  name: string;
}
```
