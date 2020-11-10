# 常见css题
## 如何减少回流？（浏览器绘制过程）
 1. 使用 transform 替代 top

 2. 不要把节点的属性值放在一个循环里当成循环里的变量

 3. 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局

 4. 把 DOM 离线后修改。如：使用 documentFragment 对象在内存里操作 DOM

 5. 不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className。

## . 如何处理 HTML5 新标签的浏览器兼容问题？
1. IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器
 支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式。

2. 当然也可以直接使用成熟的框架，比如 html5shim ;
      `<!--[if lt IE 9]>
      <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
      <![endif]-->`

      [if lte IE 9]……[endif] 判断 IE 的版本，限定只有 IE9 以下浏览器版本需要执行的语句。

## 