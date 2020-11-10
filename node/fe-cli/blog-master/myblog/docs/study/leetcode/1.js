// function Flatten(arr) {
//   let result = []
//   function flatten(arr) {
//     for(let i=0; i< arr.length; i++){
//       if(Array.isArray(arr[i])){
//         flatten(arr[i])
//       }else {
//         result.push(arr[i])
//       }
//     }
//   }
//   flatten(arr)
//   return result
// }

// console.log(Flatten([1,[ 2,3], [[3], 4]]))

// var longestConsecutive = function(nums) {
//   partition(nums,0,nums.length)
//   console.log(nums)
// };

// function swap(nums,i,j){
//   [nums[j], nums[i]] = [nums[i], nums[j]]
// }

// var partition = function(nums,left,right) {
//   if(left >= right) return
//   let tmp = nums[left]
//   let j = left
//   for(let i=j+1; i< nums.length; i++){
//       if(nums[i] < tmp){
//           j++
//           swap(nums, i ,j)
//       }
//   }
//   swap(nums,left,j)
//   partition(nums,left,j-1)
//   partition(nums,j+1,right)
// }

// longestConsecutive([3,4,1,4,2,5,6,2])

function func(val){
  this.val = val
  return function ff() {
    console.log(1)
  }
}

let a = new func(3)
console.log(a)
//手写new
// 创建一个新的对象
// 继承父类原型上的方法.
// 添加父类的属性到新的对象上并初始化. 保存方法的执行结果.
// 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象。
function _new(obj, ...rest){
  // 基于obj的原型创建一个新的对象
  const newObj = Object.create(obj.prototype);

  // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
  const result = obj.apply(newObj, rest);

  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return typeof result === 'object' ? result : newObj;
}

let b = _new(func,3)
console.log(b)