# 前端跨域

- 什么是跨域呢？<br/>
跨域就是浏览器为了安全而做出的限制策略，我们知道浏览器的请求必须遵循同源策略，既同域名，同端口，同协议，当请求违反了同源策略时，就产生了跨域。

- 那么怎么解决跨域呢？**无论是怎样的跨域资源获取方案，本质上都需要服务器端的支持**

    1. CORS（跨域资源共享）
    2. jsonp跨域
    3. nodejs中间件代理跨域
    4. nginx代理跨域
    5. postMessage跨域
    6. document.domain + iframe跨域
    7. location.hash + iframe
    8. window.name + iframe跨域
    9. WebSocket协议跨域

## CORS(跨域资源共享)<br/>
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

- 什么时候需要用到cors？<br/>
跨域资源共享标准（ cross-origin sharing standard ）允许在下列场景中使用跨域 HTTP 请求：

    - 前文提到的由 XMLHttpRequest 或 Fetch 发起的跨域 HTTP 请求。
    - Web 字体 (CSS 中通过 @font-face 使用跨域字体资源), 因此，网站就可以发布 - - TrueType 字体资源，并只允许已授权网站进行跨站调用。
    - WebGL 贴图
    - 使用 drawImage 将 Images/video 画面绘制到 canvas

### 简单请求
浏览器将cors的请求分为简单请求和非简单请求：<br/>
- 同时满足一下条件就是简单请求:<br/>
Methods: HEAD, GET, POST(方法只能为这三个)<br/>
HTTP的头信息不超出以下几种字段：<br/>
1. Accept
2. Accept-Language
3. Content-Language
4. Last-Event-ID
5. Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

- 服务器处理属性
1. Access-Control-Allow-Origin 设置哪个源可以访问我
2. Access-Control-Allow-Headers 允许携带哪个头访问我
3. Access-Control-Allow-Methods 允许哪个方法访问我
4. Access-Control-Allow-Credentials 允许携带 cookie，若是开启，前端的.withCredentials 也必须设置为 true;如果要发送cookie，Access-Control-Allow-Origin就不能设置为*，必须是相对应的域名
5. Access-Control-Max-Age 预检的存活时间
6. Access-Control-Expose-Headers 允许返回的头，把响应头暴露出去给前端

### 非简单请求
除了简单请求外的就是非简单请求。<br/>
它在请求之前会增加一次HTTP查询请求，叫“预检”的过程，浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。

## postMessage
postMessage 是 HTML5 XMLHttRequest Level 2 中的 API，允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递<br/>
otherWindow.postMessage(message, targetOrigin, [transfer])<br/>

otherWindow：其他窗口的一个引用<br/>
message：将要发送到其他窗口的信息
targetOrigin：指定哪些窗口能接收到消息事件
transfer：可选，一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权
## websocket
webSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了，因此可以跨域

WebSocket 协议本质是一个基于 TCP 的协议，为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，其中附加头信息 "Upgrade:WebSocket"，表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息，状态码101返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接

Socket.io
前端：
new webSocket()
socket.onopen()
socket.onmessage()
后端：
new WebSocket.Server({port})
on('connection')
ws.on('message')

## node中间件代理(两次跨域)
实现原理: 同源策略是浏览器需要遵循的标准,而如果是服务器向服务器请求就无需遵循同源策略。

接收客户端请求
将请求转发给服务器
拿到服务器响应数据
将响应转发给客户端
#Nginx 反向代理
即所有客户端的请求都必须先经过 nginx 的处理，nginx 作为代理服务器再讲请求转发给 node 或者 java 服务，这样就规避了同源策略

## document.domain + iframe
该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com，只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域，两个页面都通过 js 强制设置 document.domain 为基础主域，就实现了同域

## location.hash + iframe
原理就是改变URL的hash部分来进行双向通信
a.html 要和 c.html 跨域相互通信，通过中间页 b.html 来实现。 三个页面，不同域之间利用 iframe 的 location.hash 传值，相同域之间直接 js 访问来通信

缺点：
数据直接暴露在了url中，数据容量和类型都有限等

## window.name + iframe
window 对象有 name 属性，该属性有个特征：即在一个窗口(window)的生命周期内，窗口载入的所有的页面都是共享一个 window.name，每个页面对 window.name 都有读写的权限，window.name 是持久存在一个窗口载入过的所有页面中的，在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值，可以利用这个特点进行跨域

