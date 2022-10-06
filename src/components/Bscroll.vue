<template>
<div class="bscroll">
    <header><h1>是您喜欢的</h1>
    </header>
    <section>
	<div class="content">
		<div>
			<ul class="ul" v-for="item in dataArr">
				<li>
                    <h4>{{item.name}}</h4>
				   <img class="pic" :src='item.url' alt="">
                </li>
			</ul>
		</div>
	</div>
    </section>
</div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
	name: "Bscroll",
	data() {
		return {
			dataArr: [
				{ name: "大红袍", url:require("../assets/swiper2.jpeg") },//注意一下这里要用require，图片路径才能正常访问
				{ name: "大红袍", url:require("../assets/swiper1.jpeg") },
				{ name: "大红袍", url:require("../assets/swiper2.jpeg") },
				{ name: "大红袍", url:require("../assets/swiper1.jpeg") },
				{ name: "大红袍", url:require("../assets/swiper2.jpeg") },
				{ name: "大红袍", url:require("../assets/swiper3.jpeg") },
				{ name: "大红袍", url:require("../assets/swiper1.jpeg") },
				{ name: "大红袍", url:require("../assets/swiper2.jpeg") },
				{ name: "大红袍", url:require("../assets/swiper3.jpeg") },
				{ name: "大红袍", url:require("../assets/swiper1.jpeg") },
				
			],
		};
	},
	mounted() {
		this.scroll = new Bscroll(".content", {
			click: true,
			probeType: 3,
            bounce:false
		});
	},
};
</script>

<style lang="scss">
.bscroll{
    width: 100%;
    height: 650px;
}
.content {
    margin-top: 100px;
	height: 200px;
	width: 420px;
	background-color: aqua;
    border: 2px solid black;
    .ul{
        height: 200px;
        border: 2px solid red;
        li{
            list-style: none;
            display: flex;
        }
    }
    .pic{
        width: 350px;
        height: 200px;
    }
}
</style>