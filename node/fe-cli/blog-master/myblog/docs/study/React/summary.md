# React面试题总结
## React组件如何通信
## JSX的本质是什么？
可以同过对比vue的模板编译来讲
## context是什么，有何用途？
## shouldConponentUpdate的用途
## 描述redux单项数据流
## setState是同步还是异步？
## this的绑定
1. 可以再constructor中绑定this
2. 使用箭头函数定义函数
## event参数
event.preventDefault()//阻止默认行为
event.stopPropagation()//阻止冒泡
- event不是原生的event，我们打印它可以看到，_proto_.constructor 是syntheticEvent(组合事件)  原生的是MouseEvent
react原生event是event.nativeEvent
原生的currentTarget指向触发的document

1. event是SyntheticEvent,模拟出DOM事件的所有能力
2. event.navtiveEvent是原生事件
3. 所有的事件都被挂载到document上
4. 和DOM事件不一样，和vue事件也不一样

## 受控组件

## setState

不可变值
### setState可能是异步更新
- 直接使用setState后还需要异步渲染，如果在ssetState之后立马拿值只能拿到更新前的值，要拿到值怎么办呢？我们可以在setState中添加第二个参数，设置一个回调来用，vue $nexttick。
- setTimeout中调用又是同步的
- 自己定义的DOM事件，也是同步的

### setState会被合并
- 类似
```js
this.setState({
  count: this.state.count + 1
})
this.setState({
  count: this.state.count + 1
})
```
这种会被合并，Object.assign({count: this.state.count + 1},{count: this.state.count + 1})
- setState中传入函数不能被合并，函数是可执行的，会被立马执行

## 组件生命周期
- 挂载时：
  初始化constructor
  渲染 render  
  componentDidMount -> vue mounted  一般ajax就放在这个阶段请求
- 更新时
  shouldComponentUpdate 我们可以控制它在更新后是否要继续渲染
  render
  componentDidUpdate
- 卸载时
  componentWillUnmount 可以在这里卸载自定义事件，定时器之类的  -> vue beforeDestroy

## ref

react中的ref是用React.createRef()创建出来，
如 this.nameInputRef = React.createRef(),然后在组件中就可以<input defaultValue={this.state.name} ref={this.nameInputRef}>

## 非受控组件
必须手动操作DOM元素的，setState实现不了
例如文件上传<input type="file">,富文本编辑器

## Portals(传送门)
组件默认会按照既定层次嵌套渲染
- 如何让组件渲染到父组件以外？
例如fixed定位的盒子，最好放在最外层，但是他又是个嵌套组件，怎么办？可以使用ReactDOM.creactPortal(html,渲染位置DOM节点)

- 使用场景
1. 父组件设置了overflow:hidden
2. 父组件z-index太小
3. fixed需要放在body第一层

## vdom和diff算法
ceateElement创建一个虚拟dom，ceateElement(type,props,children)
然后通过render函数，第一步创建一个child节点，通过for in 遍历dom，通过key和setArrt去做相关节点的属性的设置
setArrt(node,key,dom.props[key])-> switch(key) 去做相应的属性设置
obj.foreach() -> 判断是否是虚拟dom 如果是就递归render，如果不是就创建真实节点，并插入到child中
renderDom(el,target) 实际使用就像 renderDom(el, document.getElementById('root')

- diff算法
首先就是用一个patch对象记录补丁，调用写好的walk函数，walk(oldTree, newTree, index, patches);
walk函数就是先创建一个current记录数组，判断是否又新节点：
  - 没有if(!newNode) -> current.push ->  type:REMOVE
  - 判断是否是文本，是就判断文本值是否改变，current.push -> type: text + newNode
  - 判断属性是否改变 调用diffAttr
    - diffAttr 就是返回小补丁patch -> for..in 改变和新增的放入补丁
    把属性改变放入current记录，判断是否有子结点，有就做walk
  - 有新节点替换，current.push-> type: replace+ newNode
  - 把current给到patch

## context
公共信息(语言，主题)的传递传递到每个组件
用props太繁琐
用redux小题大做

创建一个context对象，最外层通过context.Provider来生产这个数据，class子组件怎么消费数据呢？子组件名.contextType = Context, 就可以使用this.context,React会往上找最近的Provider。
函数组件没有实例，子组件名.contextType = Context后，可以直接用子组件名.Consumer

## 异步加载组件
vue 中import
react React.lazy
react React.Suspense

## 性能优化
- shouldComponentUpdate
```js
shouldComponentUpdate(nextProps, nextState) {
  if(nextState.count !== this.state.count) {
    return true //可以渲染
  }
  return false // 不重复渲染
}
```
### 为什么scu可定制化
因为父组件更新了，子组件也会无条件更新，即使子组件没发生变化，scu返回值默认为true，所以有的就需要自己选择
- PureComponent 和 React.memo
  PureComponent,SCU中实现了浅比较
  memo，函数组件中的PureComponetent
- 不可变值immutable.js


及时销毁不用的函数，避免内存泄露
异步加载组件