<template>
	<div class="sonb">
		<el-container>
			<!-- 头部 -->
			<el-header class="header">
				<h3 class="ziti">电商后台管理系统</h3>
				<el-button @click="loginout" type="warning">退出</el-button>
			</el-header>

			<!-- 主体部分 -->
			<el-container class="container">
				<!-- 左侧菜单 -->
				<el-aside width="200px">
					<el-menu
						default-active="2"
						class="el-menu-vertical-demo"
                        background-color="#800080"
					    text-color="white"
					    active-text-color="#fff"
                        unique-opened="true"
          	            :default-active="activePath"
					    :router="true"
					>
					  <el-submenu class="submenu" v-for="item in menulist" :key="item.id" :index="item.id+''">
							<template slot="title"><i class="el-icon-location"></i><span>{{item.name}}</span></template>
							<el-menu-item @click="saveNavState(v.path)" v-for="v in item.children" :key="v.id" :index="v.path">
							    <template slot="title"><i class="el-icon-menu"></i><span>{{v.name}}</span></template>
                             </el-menu-item>
					  </el-submenu>
					</el-menu>
				</el-aside>
				<!-- 右侧主体内容 -->
				<el-main class="main">
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
	name: "Sonb",
	data() {
		return {
      // 被激活的链接地址
	     activePath:'',
      menulist:[
        {id:1,path:"/car",name:"菜单1car",children:[{id:11,path:"/car",name:"选项1"}]},
        {id:2,path:"/goods",name:"菜单2goods",children:[{id:12,path:"/goods",name:"选项2"}]},
        {id:3,path:"/news",name:"菜单3news",children:[{id:13,path:"/news",name:"选项3"}]},
        {id:4,path:"/sona",name:"菜单3sona",children:[{id:14,path:"/sona",name:"选项3"},{id:15,path:"/sonb",name:"选项3"}]},
        // {id:3,path:"/sonb",name:"菜单3",children:[{id:13,path:"/sonb",name:"选项3"}]},
        {id:5,path:"/bscroll",name:"菜单3bscroll",children:[{id:16,path:"/bscroll",name:"选项3"}]},
        {id:6,path:"/helloworld",name:"菜单3helloworld",children:[{id:17,path:"/helloworld",name:"选项3"}]},
        {id:7,path:"/codelogin",name:"菜单3codelogin",children:[{id:18,path:"/codelogin",name:"选项3"}]},
      ]
    };
	},
  methods: {
    // 保存链接的激活状态
	saveNavState(activePath){
       window.sessionStorage.setItem("activePath",activePath) 
	   this.activePath=activePath
	},
	loginout(){
			window.sessionStorage.clear();
			this.$router.push("/login");
	}
  },
  created(){
     	this.activePath=window.sessionStorage.getItem("activePath")
  },
};
</script>

<style lang="scss">
.container{
	.main{
		background-color: pink;
		height: 700px;
	}
}
.sonb {
	height: 100vh;
	background-color: aqua;
	.header{
			display: flex;
			justify-content: space-between;
			text-align:center;
			background-color: skyblue;height:60px;
	}
	.container {
		height: 100vh;
    .submenu{
      border: 2px solid black;
    }
	}
}
.content {
	height: 200px;
	width: 100%;
	
}

.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

body > .el-container {
	margin-bottom: 40px;
	
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
</style>