# 430. 扁平化多级双向链表
[leetcode链接](https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/)
## 题目
多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。

给你位于列表第一级的头节点，请你扁平化列表，使所有结点出现在单级双链表中。

>示例 1：<br/>
输入：head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]<br/>
输出：[1,2,3,7,8,11,12,9,10,4,5,6]

![avatar](https://user-images.githubusercontent.com/38604634/83972169-3a8bcc80-a911-11ea-86b5-7584e8063e50.png)

## 个人理解
从头遍历链表，遇到有子链表的就先将子链表头和父节点相连，然后再以相同方法遍历子链表，如果遍历完了，就把子链表尾和父节点的next节点相连
这个理解是先连接头部的

### 代码
```js
var flatten = function(head) {
    function dfs(target) {
        let pre = null, last = null
        while(target) {
            let next = target.next, child = target.child
            if(child) {//判断是否有子链表
                target.next = child
                child.prev = target
                last = dfs(child)//获取子链表的最后一个节点
                last.next = next
                pre = last // 防止刚好是最后一个节点，所以把当前pre节点更新
                target.child = null
                if(next) next.prev = last
            } else {
                pre = target
            }
            target = next
        }
        return pre
    }
    dfs(head)
    return head
};
```

### 先连接后面的
```js
const flatten = (head, next) => {
  let curr = head
  while (curr && (curr.next || curr.child)) {
    if (curr.child) {
      curr.next = flatten(curr.child, curr.next)
      curr.child = null
      curr.next.prev = curr
    }
    curr = curr.next
  }
  if (next) {
    next.prev = curr
    curr.next = next
  }
  return head
}
```