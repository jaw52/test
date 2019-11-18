import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"

Vue.use(Vuex)

//定义状态值，用于组件之间共享数据
const state = {
	isLogin: false,//当前登录状态
	nickname: JSON.parse(localStorage.getItem("accountMes")).nickname,//用户名
	headimg: JSON.parse(localStorage.getItem("accountMes")).headimg,//头像
}

export default new Vuex.Store({
	state,
	mutations
})
