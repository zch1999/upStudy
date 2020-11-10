# 排序算法之快速排序

**快排的思想是这样的：在一个数组中，利用分治的思想，首先选择一个基准值，然后将数组分成小于基准值和大于基准值的两部分，然后对这两个部分进行与之前一样的操作，直到元素排序完成，一般我们都用递归来实现快排**
如果要排序数组中下标从p到r之间的一组数据，我们选择p到r之间的任意一个数据作为pivot（分区点一般选用数组的第一个或者是最后一个）
例图：
![avatar](./qs.jpg)
## 

## 具体代码
- 以数组元素最后一个为基准值：
```js
var sortColors = function(nums) {
    partition(nums,0,nums.length-1)
    return nums
};

function swap(nums,i,j){
    [nums[i],nums[j]] = [nums[j],nums[i]]
}
function partition(nums,left,right){
    if(left >= right) return 
    let pivot = nums[right]
    let j = left 
    for(let i = left; i<nums.length; i++){
        if(nums[i] < pivot){
            swap(nums,i,j)
            j++
        }
    }
    swap(nums,j,right)
    partition(nums,left,j-1)
    partition(nums,j+1,right)
}
```
- 以数组元素第一个为基准值：
```js
var sortColors = function(nums) {
    partition(nums,0,nums.length-1)
    return nums
};

function swap(nums,i,j){
    [nums[i],nums[j]] = [nums[j],nums[i]]
}
function partition(nums,left,right){
    if(left >= right) return 
    let pivot = nums[left]
    let j = left 
    for(let i = left+1; i<nums.length; i++){
        if(nums[i] < pivot){
            j++
            swap(nums,i,j)
        }
    }
    swap(nums,left,j)
    partition(nums,left,j-1)
    partition(nums,j+1,right)
}
```