import request from "@/utils/request"

// 练习老张前端二次封装axios
// login登录
export function logintest(params){
    return request({
        method:"get",
        url:"/api/test3"
    })
}