# 128. 最长连续序列
给定一个未排序的整数数组，找出最长连续序列的长度。

*要求算法的时间复杂度为 O(n)。*

>示例:<br/>
输入: [100, 4, 200, 1, 3, 2]<br/>
输出: 4<br/>
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。<br/>

## 理解
我们可以用用nums初始化一个set，算法的复杂度为O(n),既只可遍历一边数组，我们可以再遍历数组的时候，判断set中是否有被遍历数值+1的数，有得话，进入if,我们开始用count计数，我们可以用while判断set是否能够一直加1，具体看代码。


## 具体代码
- 用set的方法
```js
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let max = 0
    for(let i = 0; i < nums.length; i++) {
        let count = 1
        if(set.has(nums[i])){
            let tmp = nums[i]
            //判断set中是否存在tmp+1
            while(set.has(tmp+1)){
                count++
                //毕竟是连续序列，直接加1，while判断即可
                tmp++
            }
        }
        max=Math.max(max,count)
    }
    return max
};
```

- 好理解的先排序 O(2n)
```js
var longestConsecutive = function(nums) {
    nums = nums.sort((a,b) => a-b)
    let max = 0
    let count = 1
    for(let i=0; i<nums.length; i++){
        if(nums[i] == nums[i+1]) continue
        if(nums[i] + 1 == nums[i+1]) {
            count++
        } else {
            count = 1
        }
        max = Math.max(count,max)
    }
    return max
}
```