import '../adapter/jsRouter'

const adapters = {
  ajax: require('../adapter/ajax'),
  jsonp: require('../adapter/jsonp'),
  native: webBridge
}
function dispatchRequest (options) {
  const adapter = adapters[options.adapeter || 'ajax']
  // todo adaper具体实现
  // 处理 cache
}
export default dispatchRequest
