// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入axios
import axios from 'axios'

// 引入qs
import qs from 'qs'

// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

import 'babel-polyfill'

// 引入echarts
import echarts from 'echarts'

// 注册axios
// axios.defaults.baseURL = 'http://www.allsps.com:82'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
Vue.prototype.$axios = axios

// 注册qs
Vue.prototype.$qs = qs

// 注册elementui
Vue.use(ElementUI)

// 注册echarts
Vue.prototype.$echarts = echarts

// 配置全局变量
// Vue.prototype.sysetApi = () => 'http://szydak.eicp.net:82/ezx_syset'
// Vue.prototype.locationApi = () => 'http://szydak.eicp.net:82/ezx_location'

// 注册请求拦截器
axios.interceptors.request.use((config) => {
  const token = ''
  // const token = 'e3d6defca97efb93f4edea0db2a1143f'
  const userId = 1
  if (token) {
    config.headers.token = token
    config.headers.user_id = userId
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
