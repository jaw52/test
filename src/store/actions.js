import { instance, login, getUserInfo } from "../token";
import * as types from "./types";
import { longStackSupport } from "q";

const actions = {
  // 登录
  login({ commit }, info) {//参数解构
    return new Promise((resolve, reject) => {
      login(info).then(res => {
        if (res.status === 200) {
          commit(types.TOKEN, res.data.token)//设置状态值
          commit(types.LOGINSTATUS, true)
          instance.defaults.headers.common["Authorization"] = res.data.token;
          localStorage.setItem('token', res.data.token)//token存储于本地缓存
          resolve(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(res => {
        commit(types.USERINFO,res.data[0])
        resolve(res.data[0])
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 登出
  logout({commit}){
    return new Promise((resolve,reject)=>{
      commit(types.USERINFO,null)
      commit(types.LOGINSTATUS,false)
      localStorage.removeItem('token')
    })
  }
}
export default actions