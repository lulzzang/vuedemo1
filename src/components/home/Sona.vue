<template>
	<div class="sona">
		sona组件
		<el-container>
			<el-header> <el-button plain @click="open1"> 成功 </el-button></el-header>
			<el-main>
				<el-time-select
					v-model="value"
					:picker-options="{
						start: '08:30',
						step: '00:15',
						end: '18:30',
					}"
					placeholder="选择时间"
				>
				</el-time-select>
				<el-rate
					v-model="value"
					disabled
					show-score
					text-color="#ff9900"
					score-template="{value}"
				>
				</el-rate>

				<div class="block">
					<span class="demonstration">有默认值</span>
					<el-color-picker v-model="color1"></el-color-picker>
				</div>
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>

<script>
export default {
	name: "Sona",
	data() {
		return {
			value: "",
			color1: "#ccc",
		};
	},
  methods: {
     open1() {
        this.$notify({
          title: '友情提示',
          message: '学技术不仅仅是爱好,还有梦想',
          type: 'success'
        });
      },
  },
};
</script>

<style>
.sona {
	background-color: #109ad4;
	height: 700px;
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
	/* background-color: #e9eef3; */
	/* color: #333; */
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