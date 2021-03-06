## UDP

一般是直播，游戏选择 UDP 协议，这样可以获得最新的数据

- 面向无连接，不需要建立连接

  1. 在发送数据时，应用层把数据传到传输层的 UDP 协议，UDP 只是给数据增加一个 UDP 的标识。
  2. 在接收数据时，网络成把数据传到传输层，UDP 只是去除 IP 报文头，就传送给应用层了。

- 不可靠性，不关心数据是否发送成功，是否接收成功，并且它没有网络阻塞的功能，它以一种恒定的速度传送数据，因此当网络不稳定时，可能造成丢包。
- 高效性，udp 头部包括（两个 16 位的端口号，分别是源端口和目标端口。整个数据报文的长度。数据报文验证和 IPV4，该字段用于发现头部信息和数据的错误），因为头部简单开销小，所以传输更加高效。
- 多种传输方式，一对多，多对多，多对一
- 面向报文，数据发送时，UDP 只是对应用层数据报文加个 UDP 表示久传送给网络层，不对数据进行分组，拆分和封装。

## TCP

当查看邮件或者访问网页时，需要完整的资源时就需要使用到 TCP 连接

- 面向连接，需要先建立连接才发送数据

- 仅支持单播传输，tcp 只支持点对点的传输，不支持多播或广播

- 面向字节流，tcp 不保存报文边界的情况下以字节流的形式传输

- 可靠性，tcp 为了保证传输的可靠性给每一个包一个序号，同时也保证传输到接收方的包时按序排序的

- 提供阻塞控制，当网络出现阻塞时，tcp 会减少发送数量和发送速率

- 全双工通信， tcp 允许双方应用程序在任何时候发送数据

### tcp 三次握手
