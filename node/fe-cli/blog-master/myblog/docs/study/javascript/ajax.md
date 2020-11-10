# AJAX
>AJAX即“Asynchronous JavaScript and XML”（异步的JavaScript与XML技术），指的是一套综合了多项技术的浏览器端网页开发技术。

1. Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发送异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。
2. XMLHttpRequest是ajax的核心机制，是一种支持异步请求的技术。简单的说，也就是javascript可以及时向服务器提出请求和处理响应，而不阻塞用户。达到无刷新的效果。

传统的网页如果要更新网页的某部分，需要将页面全部重载，而使用ajax则可以异步地请求服务器，得到请求结果后，通过javascript实现部分更新。

## 请求方式地区别
- 传统请求方式：<br/>
传统请求：同步请求机制，当客户端向服务端发出一个请求后，在这段时间内，所有代码停止执行，等待请求返回地结果，获得返回的结果后才执行之后的步骤。
- ajax请求：<br/>
异步请求机制：Ajax采取了异步交互避免了用户请求-等待-应答交互方式的缺点。异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率

## XMLHttpRequest 
### 方法
- .open()：准备启动一个AJAX请求；
- .setRequestHeader()：设置请求头部信息；
  1. Accept：浏览器能够处理的内容类型；
  2. Accept-Charset: 浏览器能够显示的字符集；
  3. Accept-Encoding：浏览器能够处理的压缩编码；
  4. Accept-Language：浏览器当前设置的语言；
  5. Connection：浏览器与服务器之间连接的类型；
  6. Cookie：当前页面设置的任何Cookie；
  7. Host：发出请求的页面所在的域；
  8. Referer：发出请求的页面URI；
  9. User-Agent：浏览器的用户代理字符串；
- .send()：发送AJAX请求；
- .getResponseHeader(): 获得响应头部信息；只能拿到这六种：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma
- .getAllResponseHeader()：获得一个包含所有头部信息的长字符串；
- .abort()：取消异步请求；

### 常见属性
1. onreadystatechange 属性存有处理服务器响应的函数。(回调函数)
>下面的代码定义一个空的函数，可同时对 onreadystatechange 属性进行设置：
```js
xmlHttp.onreadystatechange = function() {
    //我们需要在这写一些代码
}
```

2. readyState 属性
readyState 属性存有服务器响应的状态信息。每当 readyState 改变时，onreadystatechange 函数就会被执行。
readyState 属性可能的值：<br/>

|  状态   | 描述  |
|  ----  | ----  |
|0	|请求未初始化（在调用 open() 之前）|
|1	|请求已提出（调用 send() 之前）|
|2	|请求已发送（这里通常可以从响应得到内容头部）|
|3	|请求处理中（响应中通常有部分数据可用，但是服务器还没有完成响应）|
|4	|请求已完成（可以访问服务器响应并使用它）|

>我们要向这个 onreadystatechange 函数添加一条 If 语句，来测试我们的响应是否已完成(意味着可获得数据)：<br/>
```js
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
        //从服务器的response获得数据
    }
}
```
3. responseText 属性
可以通过 responseText 属性来取回由服务器返回的数据。
>在我们的代码中，我们将把时间文本框的值设置为等于 responseText：
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
        document.myForm.time.value = xmlHttp.responseText;
    }
}

### 流程
为了方便理解，我给AJAX统一了一个流程，要想实现AJAX，就要按照以后步骤走：

>创建XMLHttpRequest对象。
设置请求方式。
调用回调函数。
发送请求。

### 发送请求
```js
// 发送AJAX请求！
const xhr = new XMLHttpRequest()//创建XMLHttpRequest对象
xhr.open("get", "example.php", false)//设置请求方式,第三个参数是选择是否是异步模式
xhr.setRequestHeader("myHeader", "goodHeader")//设置请求头
xhr.send(null)//传向服务器地参数，不能不设置，不传时为null

```

### 处理相应
处理一个同步的GET请求响应：<br/>
```js
const xhr = new XMLHttpRequest()
xhr.open("get", "example.php", false)
xhr.setRequestHeader("myHeader", "goodHeader")
xhr.send(null)
// 由于是同步的AJAX请求，因此只有当服务器响应后才会继续执行下面的代码
// 因此xhr.status的值一定不为默认值
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.responseText)
} else {
    alert("Request was unsuccessful: " + xhr.status)
}
```

处理一个异步请求响应：<br/>
```js
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    if (xhr.readystate == 4) {//请求完成状态
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText)
        } else {
            alert("Request was unsuccessful: " + xhr.status)
        }
    }
}
xhr.open("get", "example.php", true)
xhr.send(null)
```

## 实现一个ajax
```js
function ajax({
  url = '',
  method = 'get',
  headers = {},
  data = ''
}){
  return new Promise((resolve, reject) => {
    var xhr;
    if (window.XMLHttpRequest) { // code for IE7+, firefox, Chrome, Opera, Safari
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHttp'); // code for IE6, IE5
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <300 || xhr.status === 304) {
          try {
            var response = JSON.parse(xhr.responseText); // 获取数据
            resolve(response);
          } catch (e) {
            reject(e);
          }
        } else {
          reject(new Error('Request failed: ' + xhr.statusText));
        }
      }
    }
    xhr.open(method, url, true); // 同步或异步请求：默认为 true(true 异步, false 同步)
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.send(JSON.stringify(data));
  })
}
```


## 常见问题
常见问题：
1. IE浏览器下面的缓存问题(url加时间戳，或者用post)
4. Ajax对象属性的大小写问题(统一用ready**S**tate， response**T**ext，response**XML**就对了)

## 异步ajax地应用场景
- 表单驱动的交互
- 普通的文本输入提示和自动完成的场景