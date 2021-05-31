# react diff

- 为了降低 diff 的时间复杂度，react 做了相关的一些权衡
  1. react 只会对同级的节点进行对比
  2. 两个不同类型的元素会产生不同的树
  3. 通过 key tag 来复用相关的节点

## 单节点 diff

- 就是 nowChild 为 object, string, number 时就是单节点
- 单节点 diff 流程（先判断 key，再判断 tag 即 type，只有都相同时才会复用节点）

  - 对比 key：
    - key 相同：对比 tag，tag 不同时，即相关的所有节点的类型都不对，所以将当前节点和所有的兄弟节点都标记删除
    - key 不同：仅将 child 当前节点删除，然后 child = child.sibling(等于他的兄弟节点)

## 多节点 diff

- newChild 类型为 array 时，即为多节点

1. 多节点 diff 就分为了节点新增，删除，和更新

2. 会优先判断当前节点是否为更新的，因为更新的操作比新增和删除更为频繁

3. 整体会经历两轮遍历，第一轮为处理更新的节点，第二轮为处理不是更新的节点

- 第一轮遍历：通过 for 循环来遍历，newChildren[i] 和 oldFiber，(i++ & oldFiber = oldFiber.sibling, 直到 i=newChildren.length-1 或 oldfiber.sibling == null)

  1. key 不同，直接跳出遍历
  2. key 相同，type 不同，将 oldfiber 标记为删除，继续当前遍历

- 第二轮遍历
  1. newChildren 和 oldFiber 同时都遍历完了，说明只有更新，diff 结束
  2. newChildren 遍历完，oldFiber 没遍历完，说明有删除节点，遍历 oldFiber，依次标记为删除即可
  3. newChildren 没遍历完，oldfiber 遍历完了，遍历剩下的 newChildren，标记为 placement
  4. 都没遍历完，说明有元素位置发生了移动
  - 首先将 oldfiber 以 key 为 key 存入，oldFiber 为 value 存入 map 当中
  - 移动以什么为对照呢？以剩下的 newChildren 的第一个下标-1 为基准，给 lastPlacedIndex 赋初值
  - 遍历剩下的 newChildren，查找 map 中的 fiber，如果找到，oldIndex 即为该下标值，如果 oldIndex >= lastPlacedIndex,该元素为没有移动，lastPlacedIndex = oldIndex
  - 如果 lastPlacedIndex > oldIndex, 则将给节点标记为移动
    **因为 react 以这种方式记录移动，即移动是元素向下移动，所以尽量少的将节点从后面移动到前面，因为将节点从后面移动到前面在 diff 当中后被判定为所有前面的元素都往后移动了**
