Request
---
> send request with ajax jsonp and native request

### 基本思路图

<image src="https://olxvlcccu.qnssl.com/blog/g4kdu.jpg?imageslim" width=300/>

### 目录结构

``` sh
.
├── LICENSE
├── lib # 最后打包生成 (es5)
│   ├── request3.js 
│   └── request3.js.map
├── package.json
├── readme.md
├── src # 源文件 (es6)
│   ├── adapter
│   │   ├── ajax.js # ajax 通道 
│   │   ├── jsRouter.js # native 通道 (js 桥接)
│   │   └── jsonp.js # jsonp 通道
│   ├── core
│   │   ├── InterceptorManager.js # 拦截器 AOP的实现
│   │   ├── Request.js # Api 核心
│   │   ├── cache.js # 缓存
│   │   └── dispatchRequest.js # 请求通道分发
│   ├── default.js # 默认配置
│   ├── request3.js # Api 入口
│   └── utils
│       └── store.js
├── test
├── webpack.config.js
└── yarn.lock

```

### TODO

最新TODO (2017.6.17 )

- [x] 重构了架构
  - [x] 完成 拦截器核心代码 => [InterceptorManager.js](https://github.com/netpi/request3/blob/dev/src/core/InterceptorManager.js)
  - [x] 利用Promise 实现 AOP 拦截, 实现了方法可注册, 从而将 `request` `response` 独立出来 => [[Request.js#L18-L34](https://github.com/netpi/request3/blob/dev/src/core/Request.js#L18-L34)]
  - [x] 完成  `dispatchRequest.js` 实现请求通道分发
  - [x] 为request3动态注册 `['delete', 'get', 'head', 'options', 'post', 'put', 'patch']`方法 来支持 `request.get` `request.post` 方式请求, 并且保证通道对web端透明 => [[Request.js#L38-L40](https://github.com/netpi/request3/blob/dev/src/core/Request.js#L38-L40)]
  - [x] 实现了开发环境热更新, 提高开发效率
  - [x] 完善了webpack 环境配置, 支持生产环境 代码压缩 source-map 等

本次重构的优点与特点

* 利用promise 实现了AOP拦截 , 可以方便的在 chain 中注册方法 来实现`request` `response`的拦截, 利用拦截器实现了文件的分工分离.
* 将API独立抽离出来, 动态为request3 注册`['delete', 'get', 'head', 'options', 'post', 'put', 'patch']` 等HTTP方法,支持 `request3.get()` 形式 . 并且实现了 `API` `转发器` `请求通道`的分离
* 利用AOP 将缓存注册在 `request` 请求前后, 灵活控制缓存 
* 完善了工程化流程 : 
  * 清晰了开发架构, 
  * 实现了开发环境的 `热更新`  
  * 生产环境的  `代码压缩` `source-map` 等

---
> 目前完成以下这些 基本用时6个小时左右吧 (已懵逼)! (2017.6.16 凌晨4点)

- [x] 基础开发环境搭建
- [x] 设计完成 Reuest 类基本结构
- [x] 封装原生ajax 发送请求
- [x] 封装jsonp 发送请求
- [x] 用js调起 native 方法 
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

var root = 'https://jsonplaceholder.typicode.com';

request3.get({
  url: root + '/posts/2',
  cache: true, // 不填继承全局
  expire: 3000, // 单个请求缓存过期时间
  adapter:'ajax' // ajax json native ; default 'ajax'
}).then(function(resp){
  console.log(resp)
})


```

主要参考资料 :

https://github.com/marcuswestin/store.js

http://www.jianshu.com/p/9b52aaff4f5a
