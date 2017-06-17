import 'es6-promise/auto'
import 'regenerator-runtime/runtime'
import RequestCore from './core/Request'
import defaultConfig from './default'

const request3 = new RequestCore(defaultConfig.defaultOptions)

window.Request3 = request3
