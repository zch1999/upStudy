# ajax&fetch

## ajax

1. ajax 是通过 xhr 对象来实现的，可以无需重新加载页面，局部更新页面的技术

- 过程：
  1. 新建一个 xhr 对象
  2. 通过 open 方法设置方法和 url
  3. 通过 setRequstHeader 来设置相关的请求头信息
  4. 通过 onreadystateChange 来监听状态的变化，一般是通过状态码来监听
  5. 通过 send 发送请求

## fetch

1. fetch 是 js 原生的方法，它只有在网络故障和请求被拒绝是才会返回 reject 的 promise，否则就返回 resolve 的 promise
2. fetch 在 400，500 之类的状态码返回 resolve 的 promise，其中 ok 属性为 false
