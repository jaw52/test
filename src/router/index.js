import Vue from 'vue';
import VueRouter from 'vue-router'
import User from '@/pages/User'
import Browse from '@/pages/Browse'
import Follow from '@/pages/Follow';
import Login from '@/pages/Login'
import RegisterOne from '@/pages/RegisterOne';
import RegisterTwo from '@/pages/RegisterTwo';
import HomePage from '@/pages/HomePage'

Vue.use(VueRouter)


export default new VueRouter({
	routes: [
		{
			path:"/user",
			name:"User",
			component:User,
			meta: {
				title:"用户",
				isLogin: true
			}
		},{
			path:"/browse",
			name:"Browse",
			component:Browse,
			meta: {
				title:"热门"
			}
		},{
			path:"/follow",
			name:"Follow",
			component:Follow,
			meta: {
				title:"关注",
				isLogin: true
			}
		},{
			path:"/login",
			name:"Login",
			component:Login,
			meta: {
				title:"登录"
			}
		},{
			path: '/registerone',
			name: "RegisterOne",
			component: RegisterOne,
			meta:{
				title:"注册"
			}
		},
		{
			path: '/registertwo',
			name: "RegisterTwo",
			component: RegisterTwo,
			meta:{
				title:"注册"
			}
		},{
			path: '/',
			name: "HomePage",
			component: HomePage,
			meta:{
				title:"关注"
			}
		}
	],
})
