/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var assign = make_assign()
var create = make_create()
var trim = make_trim()
var Global = (typeof window !== 'undefined' ? window : global)

module.exports = {
	assign: assign,
	create: create,
	trim: trim,
	bind: bind,
	slice: slice,
	each: each,
	map: map,
	pluck: pluck,
	isList: isList,
	isFunction: isFunction,
	isObject: isObject,
	Global: Global,
}

function make_assign() {
	if (Object.assign) {
		return Object.assign
	} else {
		return function shimAssign(obj, props1, props2, etc) {
			for (var i = 1; i < arguments.length; i++) {
				each(Object(arguments[i]), function(val, key) {
					obj[key] = val
				})
			}			
			return obj
		}
	}
}

function make_create() {
	if (Object.create) {
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			return assign.apply(this, [Object.create(obj)].concat(assignArgsList))
		}
	} else {
		function F() {} // eslint-disable-line no-inner-declarations
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			F.prototype = obj
			return assign.apply(this, [new F()].concat(assignArgsList))
		}
	}
}

function make_trim() {
	if (String.prototype.trim) {
		return function trim(str) {
			return String.prototype.trim.call(str)
		}
	} else {
		return function trim(str) {
			return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
		}
	}
}

function bind(obj, fn) {
	return function() {
		return fn.apply(obj, Array.prototype.slice.call(arguments, 0))
	}
}

function slice(arr, index) {
	return Array.prototype.slice.call(arr, index || 0)
}

function each(obj, fn) {
	pluck(obj, function(key, val) {
		fn(key, val)
		return false
	})
}

function map(obj, fn) {
	var res = (isList(obj) ? [] : {})
	pluck(obj, function(v, k) {
		res[k] = fn(v, k)
		return false
	})
	return res
}

function pluck(obj, fn) {
	if (isList(obj)) {
		for (var i=0; i<obj.length; i++) {
			if (fn(obj[i], i)) {
				return obj[i]
			}
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn(obj[key], key)) {
					return obj[key]
				}
			}
		}
	}
}

function isList(val) {
	return (val != null && typeof val != 'function' && typeof val.length == 'number')
}

function isFunction(val) {
	return val && {}.toString.call(val) === '[object Function]'
}

function isObject(val) {
	return val && {}.toString.call(val) === '[object Object]'
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsRouter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsRouter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__jsRouter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ajax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonp__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__jsonp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(6);



// import cache from './cache'

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
    options = Object.assign({}, this.options, options)
    const success = options.success
    const fail = options.fail
    const expire = options.expire
    const cache = options.cache || false
    let cacheKey = this._getCacheKey(method, options)
    let that = this
    if (cache) {
      let result = __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].get(cacheKey)
      if(result) {
        console.log('get [ %s ] cache', cacheKey)
        that._handelResult({result, success, fail, setCache: false, expire, cacheKey})
        return
      }
    }
    
    if (method === 'ajax') {
      __WEBPACK_IMPORTED_MODULE_1__ajax___default()(options, function (err, result) {
        
        that._handelResult({err, result, success, fail, setCache: cache, expire, cacheKey})
      })
    } else if (method === 'jsonp') {
      __WEBPACK_IMPORTED_MODULE_2__jsonp___default()(options, function (err, result) {
        that._handelResult({err, result, success, fail, setCache: cache, expire, cacheKey})
        return
      })
    } else { // app mobile 
      const json = options[0]
      const success = json.success
      delete json.success
      webBridge.request(json, function (err, result) {
        that._handelResult({err, result, success, fail, setCache: cache, expire, cacheKey})
        return
      })
    }
  }
  _getCacheKey(method, options) {
    // 防止参数顺序改变
    let data = {}
    if(options.data){
      data = Object.keys(options.data).sort((a,b)=> a - b).map( key => options.data[key])
    }
    return `${method}_${options.url}_${options.headers}_${JSON.stringify(data)}_${options.type}_${options.dataType}`
  }
  _handelResult ({err, result, success, fail, setCache, expire = 10000, cacheKey}) {
    if (!err) {
      if (setCache) {
        console.log('set cache .........', cacheKey)
        __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].set(cacheKey, result, new Date().getTime() + expire)
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function ajax (options, callback) {
  options = options || {}
  options.type = (options.type || "GET").toUpperCase()
  options.dataType = options.dataType || "json"
  var params = formatParams(options.data)
  //创建 - 非IE6 - 第一步
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest()
  } else { //IE6及其以下版本浏览器
    var xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }

  //接收 - 第三步
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var status = xhr.status
      if (status >= 200 && status < 300) {
        callback(null, xhr.responseText)
      } else {
        callback(new Error(status))
      }
    }
  }

  //连接 和 发送 - 第二步
  if (options.type == "GET") {
    xhr.open("GET", options.url + "?" + params, true)
    xhr.send(null)
  } else if (options.type == "POST") {
    xhr.open("POST", options.url, true)
      //设置表单提交时的内容类型
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send(params)
  }
}
//格式化参数
function formatParams(data) {
  var arr = []
  for (var name in data) {
    arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]))
  }
  arr.push(("v=" + Math.random()).replace("."))
  return arr.join("&")
}

module.exports = ajax

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function (win) {

  var ua = navigator.userAgent

  function  getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r !== null) return unescape(r[2])
    return null
  }

  function  isAndroid() {
    return ua.indexOf('Android') > 0
  }

  function  isIOS() {
    return /(iPhone|iPad|iPod)/i.test(ua)
  }
  var mobile = {

      /**
       *通过bridge调用app端的方法
       * @param method
       * @param params
       * @param callback
       */
      callAppRouter: function (method, params, callback) {
        var req = {
          'Method': method,
          'Data': params
        }
        if (isIOS()) {
          win.bridge.callRouter(req, function (err, result) {
            var resultObj = null
            var errorMsg = null
            if (typeof(result) !== 'undefined' && result !== 'null' && result !== null) {
              resultObj = JSON.parse(result)
              if (resultObj) {
                resultObj = resultObj['result']
              }
            }
            if (err !== 'null' && typeof(err) !== 'undefined' && err !== null) {
              errorMsg = err
            }
            callback(err, resultObj)
          })
        } else if (isAndroid()) {
          //生成回调函数方法名称
          var cbName = 'CB_' + Date.now() + '_' + Math.ceil(Math.random() * 10)
            //挂载一个临时函数到window变量上，方便app回调
          win[cbName] = function (err, result) {
            var resultObj
            if (typeof(result) !== 'undefined' && result !== null) {
              resultObj = JSON.parse(result)['result']
            }
            callback(err, resultObj)
              //回调成功之后删除挂载到window上的临时函数
            delete win[cbName]
          }
          win.bridge.callRouter(JSON.stringify(req), cbName)
        }
      },
      request: function (params, success) {
        this.callAppRouter('request', params, function (errMsg, res) {
          return success(errMsg, res)
        })
      }
    }
    //将mobile对象挂载到window全局

  win.webBridge = mobile
})(window)

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1)


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var engine = __webpack_require__(9)
var storages = [
  __webpack_require__(11),
  __webpack_require__(10)
]
var plugins = [
  __webpack_require__(7),
  __webpack_require__(8)
]
var store = engine.createStore(storages, plugins)
/* harmony default export */ __webpack_exports__["a"] = (store);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = defaultsPlugin

function defaultsPlugin() {
	var defaultValues = {}
	
	return {
		defaults: defaults,
		get: get
	}
	
	function defaults(_, values) {
		defaultValues = values
	}
	
	function get(super_fn, key) {
		var val = super_fn()
		return (val !== undefined ? val : defaultValues[key])
	}
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var namespace = 'expire_mixin'

module.exports = expirePlugin

function expirePlugin() {
	var expirations = this.namespace(namespace)
	
	return {
		set: expire_set,
		get: expire_get,
		remove: expire_remove
	}
	
	function expire_set(super_fn, key, val, expiration) {
		if (!this.hasNamespace(namespace)) {
			expirations.set(key, expiration)
		}
		return super_fn()
	}
	
	function expire_get(super_fn, key) {
		if (!this.hasNamespace(namespace)) {
			var expiration = expirations.get(key, Number.MAX_VALUE)
			if (expiration <= new Date().getTime()) {
				this.remove(key)
			}
		}
		return super_fn()
	}
	
	function expire_remove(super_fn, key) {
		if (!this.hasNamespace(namespace)) {
			expirations.remove(key)
		}
		return super_fn()
	}
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(0)
var slice = util.slice
var pluck = util.pluck
var each = util.each
var create = util.create
var isList = util.isList
var isFunction = util.isFunction
var isObject = util.isObject

module.exports = {
	createStore: createStore,
}

var storeAPI = {
	version: '2.0.4',
	enabled: false,
	storage: null,

	// addStorage adds another storage to this store. The store
	// will use the first storage it receives that is enabled, so
	// call addStorage in the order of preferred storage.
	addStorage: function(storage) {
		if (this.enabled) { return }
		if (this._testStorage(storage)) {
			this._storage.resolved = storage
			this.enabled = true
			this.storage = storage.name
		}
	},

	// addPlugin will add a plugin to this store.
	addPlugin: function(plugin) {
		var self = this

		// If the plugin is an array, then add all plugins in the array.
		// This allows for a plugin to depend on other plugins.
		if (isList(plugin)) {
			each(plugin, function(plugin) {
				self.addPlugin(plugin)
			})
			return
		}

		// Keep track of all plugins we've seen so far, so that we
		// don't add any of them twice.
		var seenPlugin = pluck(this._seenPlugins, function(seenPlugin) { return (plugin === seenPlugin) })
		if (seenPlugin) {
			return
		}
		this._seenPlugins.push(plugin)

		// Check that the plugin is properly formed
		if (!isFunction(plugin)) {
			throw new Error('Plugins must be function values that return objects')
		}

		var pluginProperties = plugin.call(this)
		if (!isObject(pluginProperties)) {
			throw new Error('Plugins must return an object of function properties')
		}

		// Add the plugin function properties to this store instance.
		each(pluginProperties, function(pluginFnProp, propName) {
			if (!isFunction(pluginFnProp)) {
				throw new Error('Bad plugin property: '+propName+' from plugin '+plugin.name+'. Plugins should only return functions.')
			}
			self._assignPluginFnProp(pluginFnProp, propName)
		})
	},

	// get returns the value of the given key. If that value
	// is undefined, it returns optionalDefaultValue instead.
	get: function(key, optionalDefaultValue) {
		var data = this._storage().read(this._namespacePrefix + key)
		return this._deserialize(data, optionalDefaultValue)
	},

	// set will store the given value at key and returns value.
	// Calling set with value === undefined is equivalent to calling remove.
	set: function(key, value) {
		if (value === undefined) {
			return this.remove(key)
		}
		this._storage().write(this._namespacePrefix + key, this._serialize(value))
		return value
	},

	// remove deletes the key and value stored at the given key.
	remove: function(key) {
		this._storage().remove(this._namespacePrefix + key)
	},

	// each will call the given callback once for each key-value pair
	// in this store.
	each: function(callback) {
		var self = this
		this._storage().each(function(val, namespacedKey) {
			callback(self._deserialize(val), namespacedKey.replace(self._namespaceRegexp, ''))
		})
	},

	// clearAll will remove all the stored key-value pairs in this store.
	clearAll: function() {
		this._storage().clearAll()
	},

	// additional functionality that can't live in plugins
	// ---------------------------------------------------

	// hasNamespace returns true if this store instance has the given namespace.
	hasNamespace: function(namespace) {
		return (this._namespacePrefix == '__storejs_'+namespace+'_')
	},

	// namespace clones the current store and assigns it the given namespace
	namespace: function(namespace) {
		if (!this._legalNamespace.test(namespace)) {
			throw new Error('store.js namespaces can only have alhpanumerics + underscores and dashes')
		}
		// create a prefix that is very unlikely to collide with un-namespaced keys
		var namespacePrefix = '__storejs_'+namespace+'_'
		return create(this, {
			_namespacePrefix: namespacePrefix,
			_namespaceRegexp: namespacePrefix ? new RegExp('^'+namespacePrefix) : null
		})
	},

	// createStore creates a store.js instance with the first
	// functioning storage in the list of storage candidates,
	// and applies the the given mixins to the instance.
	createStore: function(storages, plugins) {
		return createStore(storages, plugins)
	},
}

function createStore(storages, plugins) {
	var _privateStoreProps = {
		_seenPlugins: [],
		_namespacePrefix: '',
		_namespaceRegexp: null,
		_legalNamespace: /^[a-zA-Z0-9_\-]+$/, // alpha-numeric + underscore and dash

		_storage: function() {
			if (!this.enabled) {
				throw new Error("store.js: No supported storage has been added! "+
					"Add one (e.g store.addStorage(require('store/storages/cookieStorage')) "+
					"or use a build with more built-in storages (e.g "+
					"https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)")
			}
			return this._storage.resolved
		},

		_testStorage: function(storage) {
			try {
				var testStr = '__storejs__test__'
				storage.write(testStr, testStr)
				var ok = (storage.read(testStr) === testStr)
				storage.remove(testStr)
				return ok
			} catch(e) {
				return false
			}
		},

		_assignPluginFnProp: function(pluginFnProp, propName) {
			var oldFn = this[propName]
			this[propName] = function pluginFn() {
				var args = slice(arguments, 0)
				var self = this

				// super_fn calls the old function which was overwritten by
				// this mixin.
				function super_fn() {
					if (!oldFn) { return }
					each(arguments, function(arg, i) {
						args[i] = arg
					})
					return oldFn.apply(self, args)
				}

				// Give mixing function access to super_fn by prefixing all mixin function
				// arguments with super_fn.
				var newFnArgs = [super_fn].concat(args)

				return pluginFnProp.apply(self, newFnArgs)
			}
		},

		_serialize: function(obj) {
			return JSON.stringify(obj)
		},

		_deserialize: function(strVal, defaultVal) {
			if (!strVal) { return defaultVal }
			// It is possible that a raw string value has been previously stored
			// in a storage without using store.js, meaning it will be a raw
			// string value instead of a JSON serialized string. By defaulting
			// to the raw string value in case of a JSON parse error, we allow
			// for past stored values to be forwards-compatible with store.js
			var val = ''
			try { val = JSON.parse(strVal) }
			catch(e) { val = strVal }

			return (val !== undefined ? val : defaultVal)
		},
	}

	var store = create(_privateStoreProps, storeAPI)
	each(storages, function(storage) {
		store.addStorage(storage)
	})
	each(plugins, function(plugin) {
		store.addPlugin(plugin)
	})
	return store
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// cookieStorage is useful Safari private browser mode, where localStorage
// doesn't work but cookies do. This implementation is adopted from
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

var util = __webpack_require__(0)
var Global = util.Global
var trim = util.trim

module.exports = {
	name: 'cookieStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var doc = Global.document

function read(key) {
	if (!key || !_has(key)) { return null }
	var regexpStr = "(?:^|.*;\\s*)" +
		escape(key).replace(/[\-\.\+\*]/g, "\\$&") +
		"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"
	return unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"))
}

function each(callback) {
	var cookies = doc.cookie.split(/; ?/g)
	for (var i = cookies.length - 1; i >= 0; i--) {
		if (!trim(cookies[i])) {
			continue
		}
		var kvp = cookies[i].split('=')
		var key = unescape(kvp[0])
		var val = unescape(kvp[1])
		callback(val, key)
	}
}

function write(key, data) {
	if(!key) { return }
	doc.cookie = escape(key) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
}

function remove(key) {
	if (!key || !_has(key)) {
		return
	}
	doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
}

function clearAll() {
	each(function(_, key) {
		remove(key)
	})
}

function _has(key) {
	return (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(doc.cookie)
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(0)
var Global = util.Global

module.exports = {
	name: 'localStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

function localStorage() {
	return Global.localStorage
}

function read(key) {
	return localStorage().getItem(key)
}

function write(key, data) {
	return localStorage().setItem(key, data)
}

function each(fn) {
	for (var i = localStorage().length - 1; i >= 0; i--) {
		var key = localStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return localStorage().removeItem(key)
}

function clearAll() {
	return localStorage().clear()
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);