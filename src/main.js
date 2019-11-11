import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import axios from 'axios'
import {Lazyload} from 'vant'
import 'lib-flexible/flexible'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.axios=axios
Vue.prototype.$qs=qs
Vue.use(Vant)
Vue.use(Lazyload,{
	lazyComponent:true //可以将需要懒加载的组件放在lazy-component标签里
})//懒加载

/* 监听窗口大小，动态改变rem的值 */

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
