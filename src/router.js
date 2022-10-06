import Vue from 'vue'
import Router from 'vue-router'

// 原来的路由引入方式
import News from './components/News.vue'
import HelloWorld from "./components/HelloWorld"
import Login from "./components/Login"
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import Sona from "@/components/home/Sona"
import Sonb from "@/components/home/Sonb"
import Goods from "@/components/Goods"
import Car from "@/components/Car"
import Codelogin from "@/components/Codelogin"
import BScroll from '@/components/Bscroll'
Vue.use(Router)

export default new Router({
    mode: "history",//指定路由为history模式
    routes: [
        {path:"/",redirect:"/login"},
        {path:'/login',name:'Login',component:Login},     
        {path:'/codelogin',name:'Codelogin',component:Codelogin},     
        {path:'/goods',name:'Goods',component:Goods},     
        {path:'/car',name:'Car',component:Car},     
        {path:'/home',name:'Home',component:Home,redirect:"/welcome",
         children:[
            {path:"/welcome",component:Welcome},
            {path:"/sona",component:Sona},
            {path:"/sonb",component:Sonb},
            {path:'/bscroll',name:'Bscroll',component:BScroll},  
            {path:'/helloworld',name:'HelloWorld',component:HelloWorld},
            {path:'/news',name:'News',component:News}, 
         ]
        },   
        
    ]
})










