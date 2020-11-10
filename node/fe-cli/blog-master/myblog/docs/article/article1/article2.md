# 函数式封装防抖节流函数

## 什么是函数式编程
函数式编程就是一种抽象程度很高的编程范式，纯粹的函数式编程语言编写的函数没有变量，因此，任意一个函数，只要输入是确定的，输出就是确定的，这种纯函数我们称之为没有副作用。而允许使用变量的程序设计语言，由于函数内部的变量状态不确定，同样的输入，可能得到不同的输出，因此，这种函数是有副作用的。(从廖雪峰的官方网站引用)

## 什么是防抖？
触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

### 使用场景举例
1.用户填写表单时，检查用户输入格式是否符合规则
2.window触发resize的时候，待用户调整完后触发

### 举个例子
用户在输入框输入时，等待用户输入完成后1秒再打印输入框的值，如果没有防抖，则用户没输入一个后就进行一次打印

### 具体实现函数（针对性简单实现）
```html
<body>
    <input id="input1"></input>
<script>
    let input1 = document.getElementById('input1');
    input1.addEventListener('keyup',debounce(action3,1000));
    function action3(){
        console.log(input1.value)
    }
    function debounce(fn, wait) {
        let timeout = null
        return function() {
            if(timeout !== null){
                clearTimeout(timeout)     
            }
            timeout = setTimeout(fn, wait);
        }
    }
</script>
</body>
```
## 什么是节流
高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

### 使用场景举例
1.鼠标不断的点击触发，单位时间内只触发一次
2.监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断；
### 举个例子
用户点击按钮后,在1秒内连续点击只会执行一次事件<br>
这里我们通过封装好的函数对两个按钮进行了节流操作

### 具体实现函数（针对性简单实现）
```html
<body>
<button id="btn1">1秒点击</button>
<button id="btn2">2秒点击</button>
<script>
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    btn1.addEventListener('click', throttle(action1,1000))
    btn2.addEventListener('click', throttle(action2,2000))
    function action1() {
        console.log('1秒显示一次')
    }
    function action2() {
        console.log('2秒显示一次')
    }
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
</script>
</body>
```

## 总结
通过对两个函数的封装，我们可以在多个地方调用防抖节流函数，我们只需要自定义独特功能就能实现带防抖或是节流的功能

> 个人学习记录，欢迎大佬指点

### 参考
[阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/04/functional_programming.html)
[廖雪峰个人官方网站](https://www.liaoxuefeng.com/wiki/1016959663602400/1017328525009056)