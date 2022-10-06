// 二次封装axios
import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:8080',
  });

  // 添加请求拦截器(前端给后端的东西  还没到后端呢)
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("aixos请求拦截器@@@@",config);
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器(后端给前端的东西)
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log("axios响应拦截器####",response);
    return response.data.data//这样子写以后。前端方法请求接口的时候就不用再去res.data.data ！！！！！！！！！
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default instance