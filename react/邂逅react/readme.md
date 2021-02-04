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
