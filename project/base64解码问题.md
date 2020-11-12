<!--
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-11 16:50:37
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-11 16:52:24
 -->

使用场景：后台传来经过 base64 编码的字符串(含有中文), 需要在前端进行解码。

代码一：

```js
getUserName: (str) => {
	return decodeURIComponent(atob(str));
};
```

bug：中文解码后，出现乱码。
原因：js 中的 atob 函数(拉丁字符集)不支持 unicode 字符集。

解决：

```js
getUserName: (str) => {
	return decodeURIComponent(escape(atob(str)));
};
```

使用 escape 对拉丁字符串进行编码,将拉丁字符集翻译成对应的十六进制符号；
使用 decodeURIComponent(utf-8 字符集)解析,把十六进制符号翻译成 utf-8 字符集中对应的字符!

```js
// 使用utf-8字符集进行base64编码
function utoa(str) {
	return btoa(unescape(encodeURIComponent(str)));
}
// 使用utf-8字符集解码base64字符串
function atou(str) {
	return decodeURIComponent(escape(atob(str)));
}
```
