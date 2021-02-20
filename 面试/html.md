1. 行内元素 块级元素
   行内：span，label，a，em，strong...
   块级：div，h1-h6, p, form, ul, ol

2. src 和 href 的区别
   src 是将文件下载下来，src 会阻塞对文档的处理
   href 是超文本引用，它指向资源的位置，建立联系

3. link 和 import 的区别

   - 页面被加载时，link 会被同时加载，而@import 会在页面加载完毕后加载 css
   - @import 是 css2.1 提出，有兼容性问题，link 是 xhtml 标签，没有兼容问题
   - link 支持 js 操作 DOM 改变样式，@import 不支持

4. h5 有什么新特性

   - video & audio 用于媒介播放
   - 语义化标签，header，footer，nav，acticle，section
   - localStorage 永久存储除非手动删除 & sessionStroage 关闭浏览器后自动删除

5. BFC 是什么？
   - 块级格式化上下文，可以理解为一个隔离了的独立容器，容器内的元素不会影响到容器外的元素
   - 具体作用：
6. alt 和 title 分别有什么作用？
   alt 是图片无法加载是才会显示值， title 是图片正常加载鼠标划上去显示值

7. cookies， session， sessionStroage， localStroage
   session 存储在服务端，一般有个 session_id,它以 cookie 的形式存储在客户端
   cookies 存储在客户端，一般大小不超过 5k，不超过 150 个，一般来说用来存储用户的个人信息，在请求的时候会带上
   sessionStroage
8. defer 和 async

9. cookie 的属性

   - httponly
   - sameSite
   - Domain
   - path

10. 时间委托 时间冒泡

11. js 为什么会阻塞 DOM 解析
