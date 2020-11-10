# 对象

## 语法
一般通过两种形式定义：声明形式和构造形式
1. 声明形式：
```js
var myObj = {
  key: value,
  // ...
}
```
2. 构造形式：
```js
var myObj = new Object()
myObj.key = value
```
两者的区别：在声明形式中可以添加多个键值对，但构造形式中需要逐个添加属性

## 类型

基本数据类型： string,number,null,undefined,bigint,syboml,boolean
引用数据类型： Object
关于typeof null 返回字符串'object',这实际上是语言本身的一个bug

### 内置对象

内置对象：String,Number,Boolean,Object,Function,Array,Date,RegExp,Error
这些内置对象就是一些内置函数，这些内置函数可以当作构造函数来使用，从而可以构造一个对应子类型的新对象。

### 属性描述符


### [[Get]]
```js
var myObject = {
  a: 2
}
myObject.a //2
```

这条语句看起来只是在myObject上查找了a的属性，其实并不是，实际上是实现了[[Get]]操作(有点像函数调用：[[Get]]())。
[[Get]]操作首先在对象中查找是否有名称相同的属性，如果找到就返回这个属性，如果没有找到，[[Get]]会遍历可能存在的[[Prototype]]链。


### [[Put]]
[[Put]]被触发时，实际的行为取决于许多因素，包括对象中是否已经存在这个属性，如果存在，[[Put]]算法大致会检查下面这些内容。
1. 属性是否是访问描述符（参见3.3.9节）？如果是并且存在setter就调用setter。
2. 属性的数据描述符中writable是否是false？如果是，在非严格模式下静默失败，在严格模式下抛出TypeError异常。
3. 如果都不是，将该值设置为属性的值。

### Getter和Setter
