# React学习之路
## 写法
class -> className
style 动态style={}
- 原生html
首先我们先定义一个html
然后我们定义一个变量ff = {__html: html}
然后用dangerouslySetInnerHTML={ff},这是要避免xss攻击
- 渲染
  - map 数组的map不hi改变原数组，返回一个新的数组。
  - key 和vue的类似，必填，不能为index