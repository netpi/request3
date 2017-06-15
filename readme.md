Request
---
> send request with ajax jsonp and native request

### 目录结构

``` sh
├── dist
│   └── request.js
├── example
│   └── index.html
├── lib
│   ├── ajax.js
│   ├── jsRouter.js
│   ├── jsonp.js
│   ├── main.js
│   ├── request.js // 核心请求文件
│   └── store.js 
├── package.json
├── readme.md
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

等等 ...

### 