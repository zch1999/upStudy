# 380. 常数时间插入、删除和获取随机元素
**设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。**

[力扣地址](https://leetcode-cn.com/problems/insert-delete-getrandom-o1/submissions/)
insert(val)：当元素 val 不存在时，向集合中插入该项。
remove(val)：元素 val 存在时，从集合中移除该项。
getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。

示例 :

```js
// 初始化一个空的集合。
RandomizedSet randomSet = new RandomizedSet();

// 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomSet.insert(1);

// 返回 false ，表示集合中不存在 2 。
randomSet.remove(2);

// 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomSet.insert(2);

// getRandom 应随机返回 1 或 2 。
randomSet.getRandom();

// 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomSet.remove(1);

// 2 已在集合中，所以返回 false 。
randomSet.insert(2);

// 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
randomSet.getRandom();
```

## 思路
首先我们看初始化，这道题我们可以用一个map来记录数组的元素和下标的键值对，一个数组result来存放元素，<br/>
插入insert，由于我们事先用map记录了数组元素，我们再插入前可以使用map.has查询该元素是否已经存在，存在则返回false，不存在就插入，并用map记录下来<br/>
remove移除，我们先查找map中是否有这个值，没有就返回false，否则我们将该值得下标赋给一个变量，同时pop出数组最后一个数，用这个数替换哟啊remove的数，最后我们将map中的键值对删除即可<br/>
返回随机数，用Math.random()乘以数组result长度，再取整，然后得到一个下标，return出对应的值就行了

## 具体实现代码
```js
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    //使用map存储val-length键值对
    this.map = new Map()
    this.values = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false
    this.map.set(val,this.values.length)
    this.values.push(val)
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false
    let tmplen = this.map.get(val)
    let tmpval = this.values.pop()
    if(tmplen == this.values.length) {
        this.map.delete(val)
        return true
    }else {
        this.values[tmplen] = tmpval //remove的元素的位置值置为tmpval
        this.map.delete(val)
        this.map.set(tmpval,tmplen)
        return true
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if(!this.values.length) return null
    return this.values[Math.floor(Math.random() * this.values.length)]
};
```