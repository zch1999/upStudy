# 面试记录

- 简历不要作死，不熟的就别写，很多面试官看着简历问的,下面回答不全，建议自己找答案。

## 雨花石一面

1. var let const
   let，const 产生块级作用域，不能重复声明,不会绑定全局对象，var 会绑定全局对象，var 会变量提升，let,const 变量提升后会处于一个暂时性死区，
2. 深浅拷贝
   浅拷贝如果拷贝的是基本数据类型就直接拷贝值，如果拷贝的是对象，是拷贝一个指向对象堆内存的地址指针。也就是说它们引用的还是同一个对象，浅拷贝例如

   - Object.assign()
   - Array.slice(),Array.concat()
     深拷贝，简单来说就是拷贝一个一样的全新的对象，它和被拷贝对象没有关联

3. 谈谈 promise，promise 的优缺点
4. jsonp 的原理及缺点
   script 可以跨域，通过回调里携带参数，请求服务器后，服务器给到相应的参数，就可以请求了
   缺点： 只能用 get，安全问题(容易受到 xss 攻击)
5. 一道算法题
6. vue 和 react 在技术层面上你更喜欢哪个？(个人认为可以转化为挑一个框架，说说区别和优势)

## 纷享销客一二面

- 一

1. 内联标签和块标签分别有那些
   内联标签： a b span img strong input button label select textarea
   块标签：p div ul li h1~6
2. 说说 em，rem, px

- px 是虚拟长度单位，Windows 系统默认是 96dpi，Apple 系统默认是 72dpi。
- em 是相对单位，通常 1em = 16px，声明 Font-size=62.5%，这就使 em 值变为 16px\*62.5%=10px, 这样 12px=1.2em, 10px=1em, 也就是说只需要将你的原来的 px 数值除以 10，然后换上 em 作为单位就行了。
- rem 也是相对长度单位， 它是相对于 html 根元素的大小来的

3. nextTick
4. 事件委托

- 二

1. 项目做了那些性能优化？(例如京东 618 界面如何优化)

- 减少 http 请求
  1. js/css 打包
  2. 图标使用 iconfont
  3. 使用 base64 格式的图片
- 减少静态资源的体积
  1. 静态资源的压缩
  2. 服务端开启 gzip 压缩，如果部署 express 作服务器的话，使用中间件 compression 即可开启 gzip 压缩
  3. 使用缓存，express.static()
     。。。。

2. 遇到了什么安全性问题？
3. express 的缓存了解吗
   express.static
4. promise 解决异步的原理 async 的了解
5. 排序算法，复杂度怎么分析
   快排平均时间复杂度 O(nlogn),空间复杂度 O(logn)
6. xss 攻击怎么造成的，crsf 攻击
   xss 跨域脚本攻击，存储型，反射型，DOM，
7. http1.0 1.1 2.0 了解吗
8. 深拷贝怎么解决循环引用的问题

- 用个 map 记录一下，因为 map 的 key 允许为对象

9. osi 七层模型

- 应用层
- 表示层
- 会话层 DNS
- 传输层 tcp/udp
- 网络层 ip
- 数据链路层
- 物理层
  TCP/IP 四层
- 应用层
- 传输层
- 网络层
- 网络接口层
  五层模型
- 应用层 http，DNS
- 传输层 tcp/udp
- 网络层 ip
- 数据链路层
- 物理层

6. 伪类和伪元素

- 伪类是 DOM 元素的一种特殊状态，例如:hover,
  :disabled 选择禁用的表单元素
  :checked 选择被选中的表单元素
  :nth-child(n) 匹配父元素下指定子元素，在所有子元素中排序第 n
  :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第 n，从后向前数
- 伪元素，
  ::after 已选中元素的最后一个子元素
  ::before 已选中元素的第一个子元素
  ::first-letter 选中某个款级元素的第一行的第一个字母
  ::first-line 匹配某个块级元素的第一行

7. 为什么会有微任务

## 大管加

1. 原型和原型链

- 每个函数都有一个 prototype 属性，它指向函数的原型对象。
- 当用 new 创建一个实例时，那么这个函数就是构造函数了，实例上有一个隐式原型*proto*，它指向构造函数的原型对象
  实例._proto_ -> 原型对象 原._proto_ -> 父级原型对象 -> Object -> null
  这样一条链条即使原型链
  hasOwnPrototype()检查对象自身是否含有某个对象

2. 作用域和作用域链
   作用域分为全局作用域，块级作用域， 函数作用域，作用域就是函数或变量可访问的范围
   作用域链就是查找变量从当前作用域查找，找不到就往父级作用域查找，依次往外查找，这样形成的一条链条就是作用域链
3. this 指向
   默认绑定，隐式绑定，显式（硬）绑定， new 绑定
4. vue 生命周期
   before\* create, mounted, update, destory
5. 异步请求有哪些
   fetch, ajax, promise, 回调函数， setTimeout， genertor

## 微医集团

1. 介绍一下项目
2. egg 的进程你了解吗
   worker master agent

- 进程崩了出了问题怎么办？

3. nextTick 你觉得可以用什么来实现(个人 promsie,setTimeout)
   nextTick 就是异步的获取一个 DOM 节点，用 mutationObserver+ 事件循环来实现
4. 微任务 宏任务

## 罗辑思维

1. 介绍项目
2. tarnsform 怎么使用
3. 分页请求怎么做，url 中携带参数

- 后端没分页怎么办
  时间分片，长列表渲染

4. http1.0 1.1
5. 状态码
6. ip 地址改变了怎么办？DNS 查询的方法
7. MD5 之类的加密算法了解吗，用户名密码怎么做加密
8. webpack 配置流程

- 二面聊天

## 帷幄（先来四道算法题）

1. 原型和原型链,查看原型链上是否有某个对象
2. redux 的流程了解吗
3. 重排和重绘

- 重绘就是当页面的样式改变，引起的页面部分更新，这样的一个更新就重绘
- 重排就是页面的几何位置发生变化，重新构建布局树的过程
- 重排影响性能，尽量避免重排的触发，多食用一些 transform 类的元素

4. react 的 key 是干嘛的
5. diff 算法具体怎么做的
6. for..in.. for..of

## 快手一面

1. 基本数据类型，引用数据类型
2. null 和 undefined 的区别
   null 代表空值，undefined 代表未定义
3. Object.prototype.toString.call()的原理
4. 能不能重写上面这个？它和 Object.toString()的区别
   可以重写，重写就是在 Function，Array 之类的类型实例上重写，当我们调用具体的实例.toString()时，调用的就是重写后的方法，例如 function 就是返回函数体的字符串，Array 就是数组元素的字符串，所以我们判断类型要用 Object 上的 toString 方法
5. async 本质是个啥？await 后得到的是一个什么值
6. 多用户登录

- session.id 去做判断
  6.1 一台电脑，一个浏览器登录多个用户怎么判断是哪个用户？ 同源策略？
  6.2 跨域相关
  6.3 cors 为什么有非简单请求

7. 为什么有 webpack，devserver 用过没有（webpack 我忘的差不多了，白学了）
8. 闭包的作用
9. redux 的流程，作用，为什么有这个，没有这个怎么传？
10. react 和 vue 组件传值
11. 行内元素和块级元素的区别，他们的 margin 和 padding 怎么样
12. BFC 是什么，作用？
13. 垂直水平居中

### 快手二面

1. 合并两个有序数组，并排序，不能用 cancat(),sort()
2. 斐波那契数列，开头为 1，2。fib(N)，leetcode 有类似题，简单题
3. 百度首页怎么做，底部的 footer 样式怎么写
4. 定位
5. this 指向
6. 5 层模型，具体有什么协议
   ...想不起来了
   n. 你有什么优势？

## 百度

1. 多户用登录 session 怎么处理
2. 垂直居中
3. promise 相关
4. 数组方法自己说
5. react-router 原理
6. redux 流程
   ...忘了

## 面试点

阻止冒泡的方法： w3c - e.Propagation; ie - e.cancelBubble = true

1. vue 中 router 的模式，实现原理是什么
   hash
   history
2. 跨域问题
3. iframe 的了解
4. webpack 的 loader 是怎么打包的
5. 前端性能优化手段
6. CDN 缓存的原理
   京东仓
7. 预加载怎么做
8. SEO 如何优化
9. setState 是同步的还是异步的

## ES6(都看看，promise 绝对的常考题)

### promise

三个状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）
.then 里的回调函数通过状态来执行相应的操作

```js
<script>
  function CutePromise(executor) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    this.onFulfilledCbs = [];   // 数组
    this.onRejectedCbs = [];    //
    // 怎么知道 调用了：
    // resolve  -> fulfilled
    // reject   -> rejected
    let self = this;
    function resolve(value) {
      console.log('resolve called');
      self.status = 'fulfilled';
      self.value = value;
      // console.log('val', value);
      // 让 then onFulfilled 回调调用
      for (let fn of self.onFulfilledCbs) {
        fn(value);
      }
    }
    function reject(reason) {
      self.status = 'rejected';
      self.reason = reason;
      // // 让 then onRejected 回调调用
      for (let fn of self.onRejectedCbs) {
        fn(reason);
      }
    }
    executor(resolve, reject);
  }
  CutePromise.prototype.then = function(onFulfilled, onRejected) {
    let self = this;
    if (self.status === 'fulfilled') {
      onFulfilled(self.value);
    } else if (self.status === 'rejected') {
      onRejected(self.reason);
    } else if (self.status === 'pending') {
      // onFulfilled onRejected 先等着 等着 resolve() reject()
      // 才会执行
      self.onFulfilledCbs.push(onFulfilled);
      self.onRejectedCbs.push(onRejected);
    }
  }
  let p=new Promise((resolve, reject) => {
    // resolve(6666);
    // 成功时候的值 通过 resolve 传给
    // reject('err')
    setTimeout(() => {
      // 2000 => fulfilled
      resolve(6666);
    }, 2000)
  })

  let o =new Promise((resolve, reject) => {
    // resolve(6666);
    // 成功时候的值 通过 resolve 传给
    // reject('err')
    setTimeout(() => {
      // 2000 => fulfilled
      resolve(6);
    }, 1000)
  })
  // .then(() => {
  //   console.log('2th then')
  // })
  Promise.myAll = function (promises){
    return new Promise((resolve,reject) => {
      let count = 0
      let res = []
      for(let i=0;i<promises.length; i++){
        promises[i].then(x => {
          // console.log(x)
          count++
          res[i] = x
          if(count == promises.length){
            resolve(res)
          }
        }).catch(err => {
          console.log(err)
        })
      }
    })
  }
  Promise.myAll([p,o]).then(x => {
    console.log(x)
  })
</script>
```

- 缺点： 一旦创建就无法停止；当 promise 处于 pedding 状态时，无法确定它是成功还是失败；如果不设置回调函数，promise 内部的错误不会反应到外部；then 实际也是返回一个 promise，多次调用耗性能

## 感悟

**失败没关系，多面试多总结，这个很重要** 祝大家拿到心仪的 offer!!!
