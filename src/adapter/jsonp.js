function jsonp(options, callback) {
  options = options || {}
  if (!options.data) options.data = {}
  if (!options.url || !options.callback) {
    throw new Error("参数不合法")
  }

  //创建 script 标签并加入到页面中
  var callbackName = ('jsonp_' + Math.random()).replace(".", "")
  var oHead = document.getElementsByTagName('head')[0]
  options.data[options.callback] = callbackName
  var params = formatParams(options.data)
  var oS = document.createElement('script')
  oHead.appendChild(oS)

  //创建jsonp回调函数
  window[callbackName] = function(json) {
    oHead.removeChild(oS)
    clearTimeout(oS.timer)
    window[callbackName] = null
    callback && callback(null, json)
  }

  //发送请求
  oS.src = options.url + '?' + params

  //超时处理
  if (options.time) {
    oS.timer = setTimeout(function() {
      window[callbackName] = null
      oHead.removeChild(oS)
      callback && callback({ message: "超时" })
    }, time)
  }
}

//格式化参数
function formatParams (data) {
  var arr = []
  for (let name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }
  return arr.join('&')
}
module.exports = jsonp
