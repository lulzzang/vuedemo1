<template>
  <div class="welcome">
    <h1>欢迎进入后台管理系统~</h1>
  </div>
</template>

<script>
export default {
name:"Welcome",
data() {
    return {
        
    }
},
}
</script>

<style>
.welcome{
    background-color: azure;
}
h1{
  font-size: 40px;
  color: skyblue;
  background:linear-gradient(to right,green,yellow) ;
	background-clip:text;
	color: transparent;
	text-shadow: 3px 3px rgba(179,94,88,0.4);
}
</style>