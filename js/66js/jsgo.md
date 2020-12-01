<!--
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-17 22:23:01
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-12-01 20:21:31
 -->

1. 介绍一下 js 的数据类型有哪些,值是如何存储的

   - 基本数据类型和饮用数据类型，基本数据类型：number， string， undefined， null， boolean， bigInt， symbol
     引用数据类型： object
   - bigInt：大数
   - symbol：独一无二的数
   - typeof null : object, typeof 根据底层二进制类判断，前三位为 0 判断为 object，null 符合条件
   - 存储：基本数据类型存在栈中
     引用数据类型实体存在堆中，定义的属性名存在栈中，它存储了指向堆中数据指针

2. && 、 ||和!! 运算符分别能做什么

   - 逻辑与(返回操作数中第一个虚值表达式，或最后一个真值表达式)，逻辑或（返回操作数中第一个真值表达式），布尔转换

3. js 的数据类型的转换

   - 转换为布尔值
   - 转换为数字 []转为数字 0，数组里有一个元素且为数字或字符数字转换为对应数字
   - 转换为字符串 对象-> [Object,Object]

4. JS 中数据类型的判断（ typeof，instanceof，constructor，Object.prototype.toString.call())

   - typeof 原始类型除了 null 都能判断出相应的类型，引用类型除了 function 其余都是 object， typeof 判断是根据底层数据类型二进制表示来判断的，null 的后三位刚好为 000 所以也被判断为 object
   - instanceof 根据实例是否处于原型链上来判断，注意只有实例才能判断，例如**1 instanceof Number // false；new Number(1) instanceof Number //true**
   - constructor 主要是利用原型上的 prototype.constructor 指向实例的构造函数来判断， **console.log('1'.constructor === String); // true； console.log(new Number(1).constructor === Number); // true**, null,undefined 没有 constructor，当改写 function 对象的 prototype 后，原有的 constructor 引用丢失，默认为 Object
   - Object.prototype.toString.call() 通过 call 改变指向，来实现类型判断，Object.prototype.toString() // [Object,Object]; Object.prototype.toString.call([]) // [Object,Array];

5. 介绍 js 有哪些内置对象？

   - array，string, Date, Regexp, Map, Set。。。

6. undefined 与 undeclared 的区别？

   - 在作用域中已声明未赋值，未声明

7. null 和 undefined 的区别？

   - null 表示一个空值，undefined 表示未定义

8. {} 和 [] 的 valueOf 和 toString 的结果是什么？

   - {} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

   - [] 的 valueOf 结果为 [] ，toString 的结果为 ""

   - 一般来说，用操作符+，-之类的对对象进行转换的话 valueOf 优先级高于 toString。

9. Javascript 的作用域和作用域链？

   - 作用域一般来说就是定义变量的一个区域，他有一套访问变量的规则，一般来说就是沿着作用域链来查找变量

10. javascript 创建对象的几种方式？

    - new Object.create()

11. JavaScript 继承的几种实现方式？

12. 寄生式组合继承的实现？

13. 谈谈你对 this、call、apply 和 bind 的理解

14. JavaScript 原型，原型链？有什么特点？

    - js 对象都有一个原型即*proto*,它指向原型对象的 prototype 属性，prototype 属性包括了 constroctor 指向实例的构造函数，prototype 的*proto*又指向它的原型对象

15. js 获取原型的方法？

    - p.proto

    - p.constructor.prototype

    - Object.getPrototypeOf(p)

16. 什么是闭包，为什么要用它？

    - 保存变量的函数

    - 作用：1. 在函数外部可以访问到函数内部的变量 2. 保存执行完的函数中的变量

17. 什么是 DOM 和 BOM？

    - DOM 是文档对象，核心 document

    - BOM 浏览器对象，核心 window

18. 三种事件模型是什么？

    - DOM0

    - IE， 事件冒泡

    - DOM2， 事件捕获

19. 事件委托是什么？

    - 事件委托原理是根据事件冒泡的机制，通过父节点绑定事件来处理子节点的事件，这种在子节点很多却相同时比较高效，不需要为每个子节点绑定事件

20. 什么是事件传播?

    - 实际上就是事件触发后,事件不完全发生在那个元素节点上，它会有冒泡或是捕获事件，

    - 事件传播的三个阶段：

    1. 事件冒泡，从目标元素传播到 window 的过程
    2. 事件到达 target
    3. 事件捕获，从 window 到 target 元素的过程

21. 什么是事件捕获？

- 事件捕获，目标元素触发事件，事件流从 window 流向目标元素的一个过程，这个过程中，如果经过的节点也有绑定事件，也会被触发

22. 什么是事件冒泡？

    - targt -> window

23. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？

- 创建

  1. createElement // 普通一个具体节点
  2. createTextNode // 文本节点
  3. createDocumentfragment //创建一个节点片段

- 添加、移除、替换、插入

  1. appendChild
  2. removeChild
  3. replaceChild(new, old)
  4. insertBefore(new, old)

- 查找

  1. getElementById
  2. getElementByName
  3. getElementByClassName
  4. getElementByTagName
  5. querySelect
  6. querySelectAll

- 属性操作

  1.  getAttribut(key)
  2.  setAttribute(key, value)
  3.  hasAttribute(key)
  4.  removeAttribute(key)

24. js 数组和对象有哪些原生方法,列举一下
25. 常用的正则表达式
26. Ajax 是什么? 如何创建一个 Ajax？
27. js 延迟加载的方式有哪些？
28. 谈谈你对模块化开发的理解？
29. js 的几种模块规范？
30. AMD 和 CMD 规范的区别？
31. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。
32. requireJS 的核心原理是什么？
33. 谈谈 JS 的运行机制
34. arguments 的对象是什么？
35. 为什么在调用这个函数时，代码中的`b`会变成一个全局变量?. 36.简单介绍一下 V8 引擎的垃圾回收机制

36. 哪些操作会造成内存泄漏？

37. ECMAScript 是什么？

38. ECMAScript 2015（ES6）有哪些新特性？

39. `var`,`let`和`const`的区别是什么？

40. 什么是箭头函数？

41. 什么是类？

42. 什么是模板字符串？

43. 什么是对象解构？

44. 什么是`Set`对象，它是如何工作的？

45. 什么是 Proxy？

———— 高能预警分割线 ⚡—————

47. 写一个通用的事件侦听器函数，为什么要用它？

48. 什么是函数式编程? JavaScript 的哪些特性使其成为函数式语言的候选语言？

49. 什么是高阶函数？

50. 为什么函数被称为一等公民？

51. 手动实现`Array.prototype.map 方法`

52. 手动实现`Array.prototype.filter`方法

53. 手动实现`Array.prototype.reduce`方法

54. js 的深浅拷贝

55. 手写 call、apply 及 bind 函数

56. 函数柯里化的实现

57. js 模拟 new 操作符的实现

58. 什么是回调函数？回调函数有什么缺点

59. Promise 是什么，可以手写实现一下吗？

60. `Iterator`是什么，有什么作用？

61. `Generator`函数是什么，有什么作用？

62. 什么是 `async/await`及其如何工作,有什么优缺点？

63. instanceof 的原理是什么，如何实现

64. js 的节流与防抖

65. 什么是设计模式？

66. 9 种前端常见的设计模式
