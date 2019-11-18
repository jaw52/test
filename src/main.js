import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import axios from 'axios'
import {Lazyload} from 'vant'
import 'lib-flexible/flexible'
import qs from 'qs'
import store from "./store"
import { Toast } from 'vant'
import VueLazyload from 'vue-lazyload'
import infiniteScroll  from 'vue-infinite-scroll';
import {ImagePreview} from 'vant'

Vue.config.productionTip = false
Vue.prototype.axios=axios
Vue.prototype.$qs=qs
Vue.use(Vant)
Vue.use(Lazyload,{
	lazyComponent:true //可以将需要懒加载的组件放在lazy-component标签里
})//懒加载
Vue.use(VueLazyload)
Vue.prototype.$imagePreview=ImagePreview
Vue.use(Toast)
Vue.use(infiniteScroll)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
