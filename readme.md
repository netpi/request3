Request
---
> send request with ajax jsonp and native request

### 基本思路图

<image src="https://olxvlcccu.qnssl.com/blog/g4kdu.jpg?imageslim" width=300/>

### 目录结构

``` sh

├── dist
├── example
│   ├── index.html
│   └── request.js
├── lib
│   └── request.js
├── package.json
├── readme.md
├── utils
│   ├── ajax.js
│   ├── jsRouter.js
│   ├── jsonp.js
│   └── store.js
├── webpack.config.js
└── yarn.lock

```

### TODO

> 目前完成以下这些 基本用时6个小时左右吧 (已懵逼)!

- [x] 基础开发环境搭建
- [x] 设计完成 Reuest 类基本结构
- [x] 封装原生ajax 发送请求
- [x] 封装jsonp 发送请求
- [x] 调起 native 方法并handel回调
- [x] 添加全局参数 (局部请求参数优先)
- [x] 抽象出统一请求 (方便加缓存)
- [x] 设计并实现缓存系统 (基于 store.js 库)
- [x] 添加 example 并调试
- [ ] 添加 e2e 测试用例
- [ ] request 支持 promise 
- [ ] 完善错误处理机制
- [ ] 代码目录结构优化
- [ ] 封装成完整可发布的npm库
- [ ] webpack环境配置增强(如代码压缩/热更新/eslint等)
- [x] 修复babel编译bug
等等 ...

### 使用 

> 演示 : https://request3.now.sh/

```js
var request = new Request({
  cache: true // 默认 false
  expire : 5000 //全局缓存过期时间 默认 10000
})
var root = 'https://jsonplaceholder.typicode.com';


request.ajax({
  url: root + '/posts/2',
  method: 'GET',
  cache: true, // 不填继承全局
  expire: 3000, // 单个请求缓存过期时间
  success: function(res) {
    alert(res)
  }
})

request.jsonp({
  url: root + '/posts/1',
  callback: 'callback', // 服务端接受callback的参数名
  cache:true, // 是否缓存
  success:function(res) {
    alert(JSON.stringify(res))
  }
})

// native端需要配合
request.mobile({ // 调起 native 方法
  url: root + '/posts/1',
  cache:true, // 是否缓存
  success: function(errMsg, res) {
    alert(errMsg, res)
  }
})

```

主要参考资料 :

https://github.com/marcuswestin/store.js

http://www.jianshu.com/p/9b52aaff4f5a
