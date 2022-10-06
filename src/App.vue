<template>
  <div id="app">
     <!-- <h2>app</h2> -->
    <!-- 路由占位符 -->
		<router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import News from './components/News.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped>
#app {
  /* padding-top: 50px; */
	/* background-color:skyblue; */
  /* background-image: url('./assets/bgc.jpeg'); */
  background-image:url(./../public/images/mn2.jpg);
  background-size: 100% 100%;
width: 100%;
/* height: 1200px; */
/* height: 100%; */
}
</style>
