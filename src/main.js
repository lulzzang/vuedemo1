import Vue from 'vue'
// import { version } from 'vue/types/umd'
import App from './App.vue'


import router from "./router"
Vue.use(router)

// 引入axios
import axios from "axios"
Vue.prototype.$axios=axios//跟全局事件总线一个道理，挂原型上就能随时调用发请求了，
// 至于名字随便起,一般都是$开头
Vue.config.productionTip = false

// 全局引入elementui
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

// 导入弹框提示组件
import {Message} from "element-ui"
Vue.prototype.$message=Message

// 引入进度条文件 之前要 npm i xxxxxx
// import "./utils/nprogress"

// 做个测试一下
import request from "./utils/request"
Vue.prototype.$http=request//跟全局事件总线一个道理，挂原型上就能随时调用发请求了，


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
