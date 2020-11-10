# 739.每日温度
请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

>例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

## 个人理解
### 双重for循环
主要的思路就是先建立一个res结果数组存放结果，然后用**for循环数组中的每一个元素都和其后面的元素比较**，并用count计数，直到找到比它大的数，就将count数值push到res结果数组中，如果循环完了都没有找到，那就给他push一个0，记住数组的最后一个也要push一个0哦，具体代码如下：
```js
var dailyTemperatures = function(T) {
    let res = []
    for(let i= 0; i< T.length; i++) {
        let count = 0
        for(let j = i+1; j< T.length; j++){
            if(T[j] > T[i]){
                count++
                res.push(count)
                break
            }
            count++
            if(j == T.length - 1){
                res.push(0)
            }
        }
        if(i == T.length - 1){
            res.push(0)
        }
    }
    return res
};
```
优化一下：不用count计数，直接用下标相减即可
```js
var dailyTemperatures = function(T) {
    let res = new Array(T.length).fill(0)
    for(let i= 0; i< T.length; i++) {
        for(let j = i+1; j< T.length; j++){
            if(T[j] > T[i]){
                res[i] = j - i
                break
            }
        }
    }
    return res
};
```

### 单调栈
可以运用一个堆栈 stack 来快速地知道需要经过多少天就能等到温度升高。
从头到尾扫描一遍给定的数组 T，如果当天的温度比堆栈 stack 顶端所记录的那天温度还要高，那么就能得到结果。

![avatar](./739.gif)
```js
var dailyTemperatures = function(T) {
    let res = new Array(T.length).fill(0)
    let stack = []
    for(let i= 0; i< T.length; i++) {
        while(stack && T[i] > T[stack[stack.length - 1]]) {
            res[stack[stack.length - 1]] = i - stack[stack.length - 1]
            stack.pop()
        }
        stack.push(i)
    }
    return res
};
```

- 模板套用
当前项向左找第一个比自己大的位置 —— 从左向右维护一个单调递减栈
当前项向左找第一个比自己小的位置 —— 从左向右维护一个单调递增栈
当前项向右找第一个比自己大的位置 —— 从右向左维护一个单调递减栈
当前项向右找第一个比自己小的位置 —— 从右向左维护一个单调递增栈

