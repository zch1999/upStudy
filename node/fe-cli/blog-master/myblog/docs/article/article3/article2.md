# 测试
## 什么是防抖？
触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
## 具体实现函数
```js
function throttle(func,wait){
    let time1 = Date.now();
    return function(){
        let time2 = Date.now();
        if(time2 - time1 > wait){
            func();
            time1 = time2;
        }
    }
}
```
## 什么是节流
高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

:::tip 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率