/**
 * axios二次封装
 */
import axios from "axios"
import {ElMessage} from "element-plus"
import router from "../router/index.js"


const TOKEN_INVALID = 'Token认证失败 请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后再试'


// 创建axios实例对象，添加全局配置
const service = axios.create({
  // 自动根据配置去匹配url
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // 后台管理通常8秒
  timeout: 8000
})

// 请求拦截
service.interceptors.request.use((req) => {
  const headers = req.headers
  const { token } = localStorage.getItem('userInfo')
  if (!headers.Authorization) {
    headers.Authorization = 'Bearer ' + token
  }
  return req;
})

// 响应拦截
service.interceptors.response.use((res) => {
  const {code, data, msg} = res.data
  if (code === 200) {
    // 不需要在每个页面写res.data
    return data;
    // 未登录
  } else if (code === 50001) {
    // 也可以用msg，后端反的，也可以前端自己定义
    ElMessage.error(TOKEN_INVALID)
    // 看完消息再跳转
    setTimeout(() => {
      router.push('/login')
    }, 2000)
    return Promise.reject(TOKEN_INVALID)
  } else {
    // 常规业务报错
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

export const get = (url, data, config) => {
  // console.log(url, data, config);
  return service.get(url, { params: data, ...config });
};
// post请求
export const post = (url, data, config) => {
  // console.log(service.post(url, data, config));
  return service.post(url, data, config);
};
// delete请求
export const del = (url, data, config) => {
  return service.delete(url, { params: data, ...config });
};
// put请求
export const put = (url, data, config) => {
  return service.put(url, data, config);
};
// patch请求
export const patch = (url, data, config) => {
  return service.patch(url, data, config);
};
export default {
  get,
  post,
  del,
  put,
  patch,
};

