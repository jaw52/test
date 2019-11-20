import Axios from "axios";
import router from "../router";
import qs from "qs";
if (localStorage.getItem('token')) {
  Axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
}
export const instance = Axios.create({
  baseURL: 'http://localhost:8888',
  withCredentials: true,
})
// response拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401://Unauthorized
          router.push('/login')
          break;
        default:
          break;
      }
    }
    return Promise.reject(error.response)
  }
)

export const login = ({ username, password }) => {
  let postData = qs.stringify({
    username: username,
    password: password
  })//转换格式，方便传给后端
  return instance.post('/login', postData)
}

export const getUserInfo = () => {
  return instance.get('/userinfo')
}