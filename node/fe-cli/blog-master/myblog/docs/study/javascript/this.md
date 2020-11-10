# javascript 的this指向

## 调用位置
函数在代码中被调用的位置，真的的调用位置决定了this的绑定。注意：箭头函数没有 this，也不能绑定 this。箭头函数的 this 会指向当前最近的非箭头函数的 this，找不到就是 window(严格模式下是 undefined)

## 默认绑定
在全局上下文中，不带任何修饰的函数被调用，应用的就是默认绑定。<br/>
在非严格模式下，将全局对象用于默认绑定，在严格模式下，this会绑定到undefined上<br/>
我们可以从一下几个例子看出：
```js
function foo() {
  console.log(this.a)
}
var a = 2
foo() //2
```
```js
function foo() {
  "use strict"
  console.log(this.a)
}
var a = 2
foo() //TypeError: this a is undefined
```
但这里需要注意的是，foo运行在严格模式下并补影响默认绑定
```js
function foo() {
  console.log(this.a)
}
var a = 2;
(function(){
  "use strict"
  foo() //2
})()
```

## 隐式绑定
调用位置是否有上下文对象，隐式绑定会把函数调用中的this绑定到这个上下文对象中
```js
function foo(){
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
obj.foo() //2
```
对象属性引用链只有上一层或者最后一层在调用位置中起作用。<br/>
>隐式丢失：<br/>
var bar = obj.foo
bar()
只是对obj.foo的一个引用,实际调用其实是不带任何修饰的函数调用
DOM 事件绑定
onclick 和 addEventListener 中的 this 默认指向绑定事件的元素
IE 比较奇怪，使用 attachEvent，里面的 this 默认执行 window

## 显式绑定
call/apply/bind可以实现硬绑定。具体的定义：<br/>
1. call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
2. apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
3. bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
例如使用call：
```js
function foo() {
  console.log(this.a)
}
var obj = {
  a:2
}
var bar = function() {
  foo.call(obj)
}
bar()//2
// 硬绑定的bar不可能在修改它的this
bar.call(window) // 2
```

## new绑定
### new所做的事
使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作
1. 创建一个新的对象
2. 这个新对象会被执行[[Prototype]]连接(将构造函数的 prototype 赋值给新对象的__proto__)
3. 绑定 this (构造函数中的 this 指向新对象并且调用构造函数)
4. 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象
```js
function foo(a) {
  this.a = a
}
var bar = new foo(2)
console.log(bar.a) //2
```
## 绑定优先级
new绑定 > 显式绑定 > 隐式绑定 > 默认绑定

## 判断this
1. 函数是否在new中调用（new 绑定）？如果是的话this绑定的是新创建的对象。<br/>
    var bar = new foo()
2. 函数是否通过call,apply（显式绑定）或者硬绑定调用？如果是的话，this绑定的就是指定的对象<br/>
    var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用（隐式调用）？如果是的话，this绑定的是那个上下文对象。<br/>
    var bar = obj1.foo()
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到全局对象。
    var bar = foo()


##  ECMASciript 规范下的 this 的指向
```js
var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar()); // 2
// var Reference = {
//   base: foo,
//   name: 'bar',
//   strict: false
// };

//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1
```
因为后三个都调用了getValue()，所以返回的不是 Reference 类型，this 为 undefined，此处是非严格模式，所以指向window
