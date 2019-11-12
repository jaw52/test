import Vue from 'vue';
import VueRouter from 'vue-router'
import User from '@/pages/User'
import Browse from '@/pages/Browse'
import Follow from '@/pages/Follow';
import Login from '@/pages/Login'
import RegisterOne from '@/pages/RegisterOne';
import RegisterTwo from '@/pages/RegisterTwo';

Vue.use(VueRouter)


export default new VueRouter({
	routes: [
		{
			path:"/user",
			name:"User",
			component:User,
			meta: {
				isLogin: true
			}
		},{
			path:"/browse",
			name:"Browse",
			component:Browse,
		},{
			path:"/follow",
			name:"Follow",
			component:Follow,
			meta: {
				isLogin: true
			}
		},{
			path:"/login",
			name:"Login",
			component:Login,
		},{
			path: '/registerone',
			name: "RegisterOne",
			component: RegisterOne,
		},
		{
			path: '/registertwo',
			name: "RegisterTwo",
			component: RegisterTwo,
		},
	],
})
