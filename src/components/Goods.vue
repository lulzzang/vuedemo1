<template>
	<div class="list">
		<!-- 头部==================================================================================== -->
		<header style="background-color:blue">
			<div class="returns" @click="goback">
                 <el-button @click="goback" type="primary" size="mini" style="margin-left:100px">返回</el-button>
			</div>
			<div class="search" style="width:200px;margin-right:400px">
				<span>搜您喜欢的...</span>
			</div>
		</header>
		<!-- 主体==================================================================================== -->
		<section>
			<!-- 左侧部分   okokok-->
			<div class="list-l" ref="left">
				<!-- {{currentIndex}} -->
				<ul class="l-item">
					<li
						:class="{active:index==currentIndex}"
						v-for="(item, index) in leftData"
						:key="index"
						@click="goScroll(index)"
					>
						{{ item.name }}
					</li>
				</ul>
			</div>

			<!-- 右侧部分 -->
			<div class="list-r" ref="right">
				<div>
					<!-- 记住！！！！这里加一个div盒子，才能上下滑动，betterscroll才能生效 -->
					<ul class="shop-list" v-for="(item, index) in rightData" :key="index">
						<!-- {{item}} -->
						<li v-for="(k, i) in item" :key="i">
							<!-- <h2>{{k}}</h2>  k下面还有一个list数据，三级数据需要遍历循环 -->
							<h1>{{ k.name }}</h1>
							<ul class="r-content">
								<li v-for="(j, idx) in k.list" :key="idx">
									<img :src="j.imgUrl" alt="" /><span>{{ j.name }}</span>
								</li>
							</ul>
						</li>
					</ul>
                    <div style="height:200px"></div>
				</div>
			</div>
		</section>
		
	</div>
</template>

<script>

import BetterScroll from "better-scroll"; //子元素高度比父元素高度要高，必须添加在mounted中

export default {
	name:"Goods",
	// components: { Tabbar },
	data() {
		return {
			leftData: [], //左侧的数据(一级的那一列的数据)
			rightData: [], //右侧的数据
			rightBScroll: "", //右侧滑动BScroll
			allHeight: [], //承载右侧每一块的高度值
			scrollY:""//右侧滚动距离
		};
	},
	async created() {
		//去请求接口 获取数据
		let res = await this.$axios({
			url: "/api/goods",
		});
		console.log("这里是List的res", res);
		let leftArr = [];//就是leftData
		let rightArr = [];//就是rightData
		res.forEach((v) => {
			//循环res数组，然后拿出左边一级菜单的数据存到leftArr中
			leftArr.push({
				id: v.id,
				name: v.name,
			});
			rightArr.push(v.data);
		});
		console.log("这里是leftArr", leftArr);
		console.log("这里是rightArr", rightArr);
		this.leftData = leftArr;
		this.rightData = rightArr;


		//！！！当dom都加载完了再去执行！！！！！！！！！！！！！！！！！！！！！
		this.$nextTick(() => {
			// 左侧滑动
			new BetterScroll(this.$refs.left,{
				click:true,
				bounce:false//取消回弹效果
			});//better-scroll默认取消click事件

			// 右侧滑动        betterscroll默认取消scroll事件，probeType默认为0
			this.rightBScroll = new BetterScroll(this.$refs.right,{
				click:true,
				probeType:3,
				bounce:false//取消回弹效果
			});//配置probeType就可得到右侧滚动的值
			// 统计右侧所有板块高度值，并且放入数组中

			let height = 0;
			this.allHeight.push(height);
			// 获取右侧每一块高度
			let uls = this.$refs.right.getElementsByClassName("shop-list"); //1.这里是六个ul
			console.log("这里是List=>uls",uls);
			// 2.把dom对象(六个ul)转换成为真正的数组！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
			Array.from(uls).forEach((v) => {
				// console.log("@@@@@v",v);
				// console.log("@@@@@v.clientHeight",v.clientHeight);//259  就是每个ul盒子的可视区域高度(height+padding，不包含边框)
				height += v.clientHeight; //clientheigh： 内容的可视区域，不包含border
				this.allHeight.push(height);
				console.log("List=>allHeight", this.allHeight);
			});
			// 得到右侧滚动的值！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
			this.rightBScroll.on("scroll",(pos)=>{
				// console.log("List=>pos",pos);//{例 x: 0, y: -399...}//y可以看出右边页面滚去多少距离
				console.log("pos.y=scrollY",pos.y);
				this.scrollY=Math.abs(pos.y)//abs返回一个数的绝对值
			})
		});
	},

	methods: {
		goback(){this.$router.back()},
		goScroll(index){
			// console.log("左边索引和右边allHeight",index,this.allHeight);
			this.rightBScroll.scrollTo(0,-this.allHeight[index],300)//300是时间
		}
    //     scrollTo(x, y, time, easing)
    //   滚动到某个位置，x,y 代表坐标，time 表示动画时间，easing 表示缓动函数
    //   scroll.scrollTo(0, 500)
	},
	computed:{
		currentIndex(){  //根据这个计算属性判断左边菜单哪个显示高亮
			return this.allHeight.findIndex((item,index)=>{ //返回满足条件的index
				console.log("@@currentIndex的",item,index);
				return this.scrollY>=item&&this.scrollY<this.allHeight[index+1]//?????????????????????????????
			})
		}
	}
};  
</script>

<style scoped lang="scss">
.list {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	// background-color: skyblue;
	overflow: hidden;
}
header {
	display: flex;
	justify-content: space-between;
	height: 1.1733rem;
	align-items: center;
	background-color: #b0352f;
	.returns i {
		color: #fff;
		font-size: 0.72rem;
	}
	.search {
		display: flex;
		align-items: center;
		// flex: 1;
		background-color: red;
		border-radius: 23px;
		// padding: 0 10px;
		span {
			color: #666;
			font-size: 15px;
			// padding: 4px 0;
		}
	}
	.go-home {
		padding: 0 0.2666rem;
		width: 40px;
		height: 40px;
		img {
			width: 100%;
			height: 100%;
		}
	}
}
section {
	display: flex;
	flex: 1;
	// background-color: red;
	overflow: hidden;
}
.list-l {
	width: 93px;
	background-color: aqua;
	overflow: hidden;
	border-right: 1px solid #cccccc;
	.l-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		li {
			width: 100%;
			margin: 0.5333rem 0;
			padding: 0.08rem 0;
			text-align: center;
			font-size: 15px;
		}
	}
}
.active {
	color: #b54f4a;
	border-left: 6px solid #b54f4a;
}
.list-r {
	flex: 1;
	overflow: hidden;
	// background-color: yellow;
	.shop-list {
        height: 229px;
		text-align: center;
        background-color: #ccc;
		h2 {
			font-size: 0.64rem;
			font-weight: 400;
			padding: 0.5333rem 0;
		}
		.r-content {
			display: flex;
			flex-wrap: wrap;
			// justify-content: center;
			li {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 10px 0;
				width: 33.3%;
				img {
					width: 53px;
					height: 53px;
				}
				span {
					font-size: 16px;
				}
			}
		}
	}
}
::v-deep.tabbar {
	border-top: 1px solid #cccccc;
}
</style>