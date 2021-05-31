1. jsx 实际上只是 React.CreateElement(type, config, children) 的语法糖,所有的 jsx 都会被转换成 React.CreateElement()的调用
   jsx -> babel -> React.CreateElement()

   - type 当前 ReactElement 的类型,如标签元素字符串表示：'div','h1'等， 组件元素就直接组件的名称

   - config jsx 的属性以 object 的形式存储

   - children 存放在标签中的内容，以 children 数组的形式进行存储

2. children 以多个参数传递，在 CreateElement 函数中一 arugments 第二个参数以后传给 props.children

3. CreateElement 最终 return ReactElement 对象。
   ReactElement(
   type,
   key,
   ref,
   self,
   source,
   ReactCurrentOwner.current,
   props,
   );

4. 创建的 ReactElement 就是 react 的虚拟 DOM

5. jsx -> createElement 函数 -> ReactElement(对象树) -> React.render -> 真实 DOM
   RN jsx -> createElement 函数 -> ReactElement(对象树) -> React.render -> 原生 UI 控件

6. **为什么要使用虚拟 DOM**

- 原生中直接操作 DOM，很难跟踪状态的改变
- 频繁操作真实 DOM 性能底下，DOM 操作会引起浏览器的回流重绘，最好的办法是批量的处理 DOM，（比如使用 DocumentFragment 进行合并）

7. render 函数的**返回值**
   当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型的：

   - ReactElement 对象
   - 数组或 fragments:使得 render 方法可以返回多个元素
   - Portals：可以渲染字节点到不同的 DOM 子树中
   - 返回字符串或是数值类型：渲染为文本节点
   - 布尔类型或 null：什么都不渲染

8. 函数组件

   - 没有 this
   - 没有内部状态

9. ## react 常见的生命周期函数

   阶段：

   - 装载阶段(Mount): 组件第一次在 DOM 树中被渲染的过程
   - 更新阶段(Update): 组件状态发生变化，重新渲染的过程
   - 卸载阶段(Unmount): 组件从 DOM 树中被移除的过程

10. setState 是同步的还是异步的？

    - 原生事件中是同步的，react 事件中是异步的
    - 为什么 setState 是异步的？
      1. 提升性能，react 中可能涉及多多次 state 的更新，通过异步来批量更新
      2. 如果同步更新了 state，但是还没有执行 render，那么 state 和 props 不保持同步，可能会产生很多问题
    - 怎么回去 setState 的最新值：
      1. 通过 setState 的第二个参数，传入回调函数，可以在回调函数中拿到最新值
      2. componentDidupdate 函数中可以获取到

11. react diff

    - 单节点 diff
      1. 当 key 相同，type 不同时，将当前节点和兄弟节点都删除
      2. 当 key 不同时，只将当前节点删除
    - 多节点 diff
      1. 新增，删除，更新三种，会优先更新
      2. 两轮遍历：
         - 处理更新的节点
         - 处理剩下的节点
