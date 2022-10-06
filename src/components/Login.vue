<template>
	<div class="main" style="padding: 20px 0">
		<div class="loginBox" style="margin-top: 100px">
			<div class="dljm">
				<img src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/000000/external-Man-male-avatar-blue-others-cattaleeya-thongsriphong-2.png"/>
		        <p>密码登录界面</p>
			</div>
			<el-form ref="loginFormRef" :rules="loginFormRules" :model="loginForm">
				<el-form-item prop="username">
                   <!-- <div class="item"> -->
					  <img src="https://img.icons8.com/office/40/000000/super-mario.png"/>
					  <el-input placeholder="请输入用户名" type="text" v-model="loginForm.username" />
				   <!-- </div> -->
				</el-form-item>

				<el-form-item prop="password">
                    <!-- <div class="item"> -->
					   <img src="https://img.icons8.com/office/40/000000/closed-topic.png"/>
					   <el-input  placeholder="请输入密码" type="password" v-model="loginForm.password" />
				    <!-- </div> -->
				</el-form-item>
				
				<el-form-item class="loginbtn">
					<el-button class="btn" @click="login">密码登录</el-button>
					<el-button class="btn" @click="$router.push('/codelogin')">验证码登录</el-button>
				</el-form-item>

			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			// 这是登录表单的数据绑定对象
			loginForm: {
				username: "",
				password: "",
			},
			token: "",
			//这是表单的验证规则对象
			loginFormRules: {
				//验证用户名是否合法
				username: [
					{ required: true, message: "请输入正确的登录名称", trigger: "blur" },//input空白时，鼠标离开就会提示这个信息
					{ min: 5, max: 7, message: "用户名为wenwen", trigger: "blur" },////input填入数据时，鼠标离开就会提示这个信息
				],
				//验证密码是否合法
				password: [
					{ required: true, message: "请输入正确的登录密码", trigger: "blur" },
					{min: 5,max: 7,message: "密码长度是5到7个字符",trigger: "blur",},
				],
			},
		};
	},
	methods: {

		login() {
			this.$refs.loginFormRef.validate( async (valid) => {
				//对整个表单进行校验的方法 validate
			if (!valid) return; 
			const res=await this.$axios.get("/api/login")
				console.log("Login=>res",res);
				window.sessionStorage.setItem("token", res.token);
				console.log(res.token);
				this.token = res.token;
				console.log(this.token);
			//  1.2token只应该在当前网站打开期间生效，所以把token保存在sessionstorage中
			this.$router.push("/home");
			this.$message.success("登录成功,欢迎您继续探索~");
			})
		 },


		// 点击回车键登录
		keyDown(e) {
			if (e.keyCode == 13) {
				this.login();
			}
		},
	},
	created() {},
	mounted() {
		window.addEventListener("keydown", this.keyDown);
	},
	destroyed() {
		window.removeEventListener("keydown", this.keyDown, false); // 如果将 useCapture 设置为 true，则侦听器只在捕获阶段处理事件，
		// 而不在目标或冒泡阶段处理事件。 如果useCapture 为 false，则侦听器只在目标或冒泡阶段处理事件
	},
};
</script>

<style scoped lang="scss">
.el-form {
  .el-form-item {
    /deep/ * {
		display: flex;
		margin-bottom: 4px;
		justify-content: center;
		align-items: center;
        font-size: 14px;
        // color: blue;
    }
	
  }
}
/deep/.el-form-item__error {
		color: #e4e4e4;
		
	}

.main {
	/* background-color: #4B0082; */
	width: 100%;
	height: 100%;
}
* {
	margin: 0;
	padding: 0;
}
.loginBox {
	width: 400px;
	height: 364px;
	background-color: #4b0082;
	margin: 100px auto;
	border-radius: 10px;
	box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.6);
	padding: 40px;
	box-sizing: border-box;
}

.item {
	height: 45px;
	border-bottom: 1px solid #fff;
	/* margin-bottom: 30px; */
	position: relative;
	display: flex;
}

.btn {
	width: 80px;
	height: 30px;
	padding-top: 16px;
	margin-top: 10px;
	color: #03e9f4;
	position: relative;
	overflow: hidden;
	// text-transform: uppercase;
}
.loginbtn{
	display: flex;
	margin-left: 73px;
}

.btn:hover {
	border-radius: 5px;
	color: #fff;
	background: #03e9f4;
	box-shadow: 0 0 5px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4,
		0 0 100px 0 #03e9f4;
	transition: all 1s linear;
}
.dljm{
	text-align: center;
	margin: 0 10px 0;
	color: #fff;
    margin-bottom: 30px;
	color: #fff;
	font-weight: 700;
}

</style>