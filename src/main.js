import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import axios from 'axios'
import {Lazyload} from 'vant'
import 'lib-flexible/flexible'
import qs from 'qs'
import store from "./vuex"

Vue.config.productionTip = false

Vue.prototype.axios=axios

Vue.prototype.$qs=qs

Vue.use(Vant)
Vue.use(Lazyload,{
	lazyComponent:true //可以将需要懒加载的组件放在lazy-component标签里
})//懒加载

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

import {ImagePreview} from 'vant'
Vue.prototype.$imagePreview=ImagePreview

/* 
	
	to: Route: 即将要进入的目标路由对象
	from: Route: 当前导航正要离开的路由
	next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 
 */
router.beforeEach((to, from, next) => {

	if (to.meta.title) {
		document.title = to.meta.title //更改游览器网页标题
	}

	let getFlag = localStorage.getItem("Flag") /* 这里是判断用户是否登录过，因为在用户登录后会在localStroage内存储Flag=isLogin */
	if (getFlag == "isLogin") {
		store.state.isLogin = true
		next()
	} else {
		if (to.meta.isLogin) { /* 如果没有登录状态且要去往需要权限的路径时跳转登录页并进行提示 */
			next({
				path: "/login"
			})
			alert("请先登录")

		} else {
			next()
		}
	}
})

router.afterEach(router => {
	window.scroll(0, 0)
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
