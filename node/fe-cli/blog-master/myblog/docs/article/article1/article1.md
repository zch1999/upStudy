# node读取一个文件的过程
  - 上层API层
    调用弄得的API层fs模块相关功能
  - node.js Bindings
  - node.js底层 基于事件机制的node event loop stream 流操作 libuv
  - libuv 是一个高性能，事件驱动的I/O库，并且提供了跨平台的API，异步，时间驱动变成风格，核心使命是提供了event loop定时器，基于I/O和其他使劲按回调函数，非阻塞的网络支持，异步文件系统访问，子进程