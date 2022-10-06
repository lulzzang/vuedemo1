<template>
	<div class="hello">
		<!-- <h4>helloworld组件</h4> -->
		<el-container class="container">
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>
					header
					<el-progress :percentage="100" status="success"></el-progress>
					<!-- <el-input placeholder="请输入密码" v-model="input" show-password></el-input> -->
				</el-header>
				<el-main
					>
					main
					<el-button @click="get1test" type="primary">点我发送get1请求</el-button>
					<el-button @click="posttest" type="primary">点我发送post2请求</el-button>
	             	<el-button @click="gettest" type="warning">点我测试请求</el-button>
		             <el-button @click="get3test" type="warning">get3请求</el-button>
				</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			input:"666666"
		};
	},
	methods: {
		get1test() {
			this.$axios({
				url: "/api/test1?id=66&&num=77",
				method: "get",
			}).then((res) => {
				console.log(res);
			});
			// axios.get("/api/test1").then(res=>console.log(res))
		},
		posttest() {
			// this.$axios({
			//         method: "post",
			// 		url: "/api/test2",
			// 		data:{
			// 			firstname:"li",
			// 			lastname:"sa"
			// 		}
			// 	}).then(res=>{console.log(res);})
			this.$axios
			    .post("/api/test2", { id: 666 })
				.then((res) => console.log(res));
		},

		gettest() {
			this.$axios({
				url: "/api/test2",
				method: "post",
			}).then((res) => {
				console.log("News==>post", res);
			});
			// axios.get("/api/test1").then(res=>console.log(res))
		},

		async get3test() {
			// request.get("/api/test3").then(res=>{console.log(res);})
			// this.$axios.get("/api/test3").then(res=>{console.log(res);})
          const res=await this.$axios.get("/api/test3")
		  console.log(res);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
	height: 600px;

}
.hello {
	background-color: skyblue;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
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
