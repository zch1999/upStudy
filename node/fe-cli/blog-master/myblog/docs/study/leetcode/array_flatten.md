# 展平数组
数组中可以嵌套数组，要嵌套多少层都可以，比如[1, 2, [[3], 4]]<br/>
但我们处理它会很麻烦，所以我们要把它展开，只留下一层数组: [1, 2, 3, 4]<br/>

结果：

```js
flatten([1, 2, 3])                // [1, 2, 3]
flatten([1, 2, [3]])              // [1, 2, 3]
flatten([1, 2, [[3], 4]])         // [1, 2, 3, 4]
flatten([1, [2, [[3], [4]]]])     // [1, 2, 3, 4]
```

```js
function Flatten(arr) {
  let result = []
  function flatten(arr) {
    for(let i=0; i< arr.length; i++){
      if(Array.isArray(arr[i])){
        flatten(arr[i])
      }else {
        result(arr[i])
      }
    }
  }
  flatten(arr)
  return result
}
```