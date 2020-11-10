# cookie, sessionStorage, localStroage
## cookie
- cookie是服务端发送给客户端的一小块数据，它在下次请求服务器会自动带上。
- cookie一般存放一些个人状态(登录状态)或者个人信息(个性设置)
- cookie一般大小为4k，同一个域名不能超过20个cookie
- cookie有过期时间，一般用expires设置
- 可以httponly来保证安全，原理是拒绝
## sessionStorage
sessionStorage是会话级别的，也就是说关闭浏览器标签页后就会被删除，刷新标签页不会失效。
## localStorage
localStorage按域名存储数据，它的存储是永久级的，子要不手动删除他就会永远存在。