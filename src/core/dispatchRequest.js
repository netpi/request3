import '../adapter/jsRouter'

const adapters = {
  ajax: require('../adapter/ajax'),
  jsonp: require('../adapter/jsonp'),
  native: webBridge
}
function dispatchRequest (options) {
  const adapter = adapters[options.adapeter || 'ajax']
  return adapter(options)
}
export default dispatchRequest
