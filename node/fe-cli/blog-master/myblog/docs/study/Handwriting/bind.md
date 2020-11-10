# 手写bind

## apply,call和bind的作用

>apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数<br/>
call基本和apply作用一样，只是第二个参数不一样，它可以有多个参数,它和apply都会立即执行<br/>
bind是接受多个参数，并返回一个函数，它并不会立即执行

## 手写apply
```js
Function.prototype.apply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');

  delete context.fn
  return result;
}
```
## 手写call
```js
Function.prototype.call = function (context, ...args) {
  let context = context || window;
  let fn = new Symbol('fn');
  context.fn = this;

  let result = eval('context.fn(...args)');

  delete context.fn
  return result;
}
```
## 手写bind

```js
Function.prototype.myBind = function(objThis, ...params) { // 先传一部分参数
  const thisFn = this; //  存储源函数的this
  let fToBind = function(...secondParams) { //  最后还是要执行的
    const isNew = this instanceof fToBind // new 调用
    const context = isNew ? this : Object(objThis) ; // this 覆盖为上下文对象
    return thisFn.call(context, ...params, ...secondParams); // 
  }
  if (thisFn.prototype) {
    fToBind.prototype = Object.create(thisFn.prototype);
  }
  
  return fToBind; 
}
```