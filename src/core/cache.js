import store from 'store'

exports.get = function (options) {
  return store.get(options.cacheKey)
}

exports.set = function (options) {
  return store.set(options.cacheKey, options.resp, new Date().getTime() + options.expire)
}
