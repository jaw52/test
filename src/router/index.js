import Vue from 'vue';
import VueRouter from 'vue-router'
import User from '@/pages/User'
import Browse from '@/pages/Browse'
import Follow from '@/pages/Follow';

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path:"/user",
			name:"User",
			component:User
		},{
			path:"/browse",
			name:"Browse",
			component:Browse
		},{
			path:"/",
			name:"Follow",
			component:Follow
		}
		
	],
})
