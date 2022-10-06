
<template>
	<div class="home" style="padding-top:20px">
        <el-button @click="$router.push('/sona')" type="primary">Sona组件</el-button>
        <el-button @click="$router.push('/sonb')" type="primary">后台管理系统</el-button>
		<el-button @click="$router.push('/helloworld')" type="primary">HellowWorld组件</el-button>
		<el-button @click="$router.push('/goods')" type="danger">Goods组件</el-button>
		<el-button @click="$router.push('/car')" type="warning">Car组件</el-button>
		<el-button @click="$router.push('/news')" type="warning">News组件</el-button>
		<el-button @click="$router.push('/bscroll')" type="warning">BScrol组件</el-button>
		<br>
		<router-view></router-view>
	</div>
</template>

<script>
import request from "../../utils/request.js";
export default {
	name: "Login",
	data() {
		return {};
	},
	methods: {
		gohelloworld() {
			this.$router.push("/helloworld");
		},
		
	},
};


</script>

<style scoped lang="scss">


.home{
    /* background-color: blueviolet; */
	width: 100%;
    height: 600px;
	// margin-left: 130px;
}
</style>