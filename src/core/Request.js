import 'regenerator-runtime/runtime'
import dispatchRequest from './dispatchRequest'
// import RequestCore from './core/Request'
const types = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch']
function Request3 (instanceConfig) {
  this.defaults = instanceConfig
}

Request3.prototype.request = async function request (options) {
  return await dispatchRequest(Object.assign({}, this.defaults, options))
}

// 为 request3 动态添加所有方法
types.forEach(type => {
  Request3.prototype[type] = async options => await this.request(Object.assign({}, options, { type }))
})

window.Request3 = Request3
