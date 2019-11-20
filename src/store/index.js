import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions";

Vue.use(Vuex)

//定义状态值，用于组件之间共享数据
const state = {
	token:localStorage.getItem('token'),
	userInfo:{},
	loginStatus:false
}

export default new Vuex.Store({
	state,
	mutations,
	actions//异步操作，向后台发送请求获取数据
})
