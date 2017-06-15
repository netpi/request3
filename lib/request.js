import './jsRouter'
import ajax from './ajax'
import jsonp from './jsonp'
// import cache from './cache'
import store from './store'
class Request {

  constructor (options) {
    // 全局配置
    this.options = options
  }
  async ajax () {
    this._request({ method: 'ajax', options: Array.from(arguments)[0] })
  }
  async jsonp () {
    this._request({ method: 'jsonp', options: Array.from(arguments)[0] })
  }
  async mobile () {
    this._request({ method: 'mobile', options: Array.from(arguments) })
  }
  _request ({ method, options }) {
    // 覆盖全局
    options = Object.assign({}, this.options, options)
    const success = options.success
    const fail = options.fail
    const expire = options.expire
    const cache = options.cache || false
    // 生成缓存key
    let cacheKey = this._getCacheKey(method, options)
    let that = this
    if (cache) {
      let result = store.get(cacheKey)
      if(result) { // 如果有缓存直接返回结果
        console.log('get [ %s ] cache', cacheKey)
        that._handelResult({result, success, fail, setCache: false, expire, cacheKey})
        return
      }
    }
    if (method === 'ajax') {
      ajax(options, function (err, result) {
        that._handelResult({err, result, success, fail, setCache: cache, expire, cacheKey})
      })
    } else if (method === 'jsonp') {
      jsonp(options, function (err, result) {
        that._handelResult({err, result, success, fail, setCache: cache, expire, cacheKey})
        return
      })
    } else { // app mobile 
      const json = options[0]
      const success = json.success
      delete json.success
      // 吊起 native 方法
      webBridge.request(json, function (err, result) {
        that._handelResult({err, result, success, fail, setCache: cache, expire, cacheKey})
        return
      })
    }
  }
  _getCacheKey(method, options) {
    let data = {}
    if(options.data){
      // 防止参数顺序改变 , 造成缓存未击中
      data = Object.keys(options.data).sort((a, b) => a - b).map( key => options.data[key])
    }
    return `${method}_${options.url}_${options.headers}_${JSON.stringify(data)}_${options.type}_${options.dataType}`
  }
  _handelResult ({err, result, success, fail, setCache, expire = 10000, cacheKey}) {
    if (!err) {
      if (setCache) {
        console.log('set cache .........', cacheKey)
        store.set(cacheKey, result, new Date().getTime() + expire)
      }
      success(result)
    } else if (fail) {
      fail(err)
    }
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Request
} else {
  window.Request = Request
}
