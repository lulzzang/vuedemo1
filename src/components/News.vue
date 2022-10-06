<template>
	<div class="news">
		<section>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</section>
		<div class="video">
			<video autoplay="false" controls src="../../public/images/jksp.mp4"></video>
		</div>
	</div>
</template>

<script>
const axios = require("axios");
export default {
	name: "News",
	data() {
		return {};
	},
	methods: {},
};
</script>

<style scoped lang="scss">
.news {
     display: flex;
  	height: 100vh;
	 section{
            position: relative;
            width: 300px;
            height: 250px;
            margin: 200px auto;
            transform-style: preserve-3d;
            transition: all 6s;
            animation: xuanzhuan 4s;
            background-image: url(../assets/swiper2.jpeg);
            animation-iteration-count: infinite;
        }
        section:hover{
         animation-play-state: paused;       
         }
      section div{
         position: absolute;
         top:0;
         left:0;
         width: 100%;
         height: 100%;
         background:url(../assets/swiper1.jpeg) no-repeat;
        }
        section div:nth-child(1){
            transform: translateZ(300px);
        }
        section div:nth-child(2){
            transform: rotateY(60deg) translateZ(300px);
        }
        section div:nth-child(3){
            transform: rotateY(120deg) translateZ(300px);
        }
        section div:nth-child(4){
            transform: rotateY(180deg) translateZ(300px);
        }
        section div:nth-child(5){ 
            transform: rotateY(240deg) translateZ(300px);
        }
        section div:nth-child(6){
            transform: rotateY(300deg) translateZ(300px);
        }
        @keyframes xuanzhuan{
            0%{
                transform: rotateY(0);
            }
            100%{
                transform: rotateY(360deg);
            }
        }
}
.video {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 300px;
	video {
		width: 100%;
		height: 100%;
	}
}

body{
      /* 非常关键 */
   perspective: 1000px;
}
       
</style>