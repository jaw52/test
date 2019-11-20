import Vue from 'vue';
import VueRouter from 'vue-router'
import store from "@/store"

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: "/user",
		name: "User",
		component: () => import('@/pages/User'),
		meta: {
			title: "个人主页",
			isLogin: true
		}
	}, {
		path: "/browse",
		name: "Browse",
		component: () => import('@/pages/Browse'),
		meta: {
			title: "热门"
		}
	}, {
		path: "/follow",
		name: "Follow",
		component: () => import('@/pages/Follow'),
		meta: {
			title: "关注",
			isLogin: true
		}
	}, {
		path: "/login",
		name: "Login",
		component: () => import('@/pages/Login'),
		meta: {
			title: "登录"
		}
	}, {
		path: '/registerone',
		name: "RegisterOne",
		component: () => import('@/pages/RegisterOne'),
		meta: {
			title: "注册"
		}
	},
	{
		path: '/registertwo',
		name: "RegisterTwo",
		component: () => import('@/pages/RegisterTwo'),
		meta: {
			title: "注册"
		}
	}, {
		path: '/',
		name: "HomePage",
		component: () => import('@/pages/HomePage'),
		meta: {
			title: "主页"
		}
	},
	]
})

/* 
	注册全局钩子用来拦截导航
	to: Route: 即将要进入的目标路由对象
	from: Route: 当前导航正要离开的路由
	next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 */
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title //更改游览器网页标题
	}

	if (localStorage.getItem('token')) {
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

export default router
