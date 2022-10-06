const { defineConfig } = require('@vue/cli-service')
const path=require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//取消eslint
  // Proxy（代理）, 通过启动本地服务器进行代理转发目标服务器。
// 而跨域只针对于浏览器，对于node服务发出的请求是不会出来跨域的，从而解决了跨域的问题。
  // 跨域解决方案，前端配置代理
  devServer:{
    // 自己写的接口：http://localhost:3000/api/test2
    proxy:{
      "/api":{  //代理标识，一般是每个接口前的相同部分
        target:"http://localhost:3000", // 这里写的是访问接口的域名和端口号
        changeOrigin:true,// 允许跨域请求
        pathRewrite:{  // 重写路径，替换请求地址中的指定路径
          "^/api":"/api" // pathRewrite的作用是把请求接口中的 '/api'替换掉,一般是替换为空""
        }
      }
    },
  },
})


