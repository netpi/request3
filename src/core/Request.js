import 'regenerator-runtime/runtime'
import dispatchRequest from './dispatchRequest'
import InterceptorManager from './InterceptorManager'
import cache from './cache'
// import RequestCore from './core/Request'
const types = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch']

function Request3 (instanceConfig) {
  this.defaults = instanceConfig
  this.interceptors = {
    request: new InterceptorManager().use(cache.get), // 注册中间件
    response: new InterceptorManager().use(cache.set)
  }
}

Request3.prototype.request = function request (options) {
  // 挂载拦截器
  let promise = Promise.resolve(options)
  const chain = [dispatchRequest, undefined] // 拦截器链 注册 请求转发器

  // request 的拦截注入
  this.interceptors.request.forEach(function unshiftRequestInterceptors (interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected)
  })
  // response 的拦截注入
  this.interceptors.response.forEach(function pushResponseInterceptors (interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected)
  })

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift())
  }

  return promise
}

// 为 request3 动态添加所有方法
types.forEach(type => {
  Request3.prototype[type] = async options => await this.request(Object.assign({}, options, { type }))
})

window.Request3 = Request3
