<template>
	<div class="main" style="padding: 20px 0">
		<div class="loginBox" style="margin-top: 100px">
			<div class="dljm">
                 <img src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/000000/external-Man-male-avatar-blue-others-cattaleeya-thongsriphong-2.png"/>
		        <p>验证码登录界面</p>
			</div>
			<el-form ref="loginFormRef">
				<el-form-item>
					<img src="https://img.icons8.com/office/40/000000/super-mario.png" />
					<el-input
						v-model="userTel"
						pattern="[0-9]*"
						placeholder="请输入手机号"
						type="text"
					/>
				</el-form-item>

				<el-form-item prop="">
					<img src="https://img.icons8.com/office/40/000000/closed-topic.png" />
					<el-input
						v-model="userCode"
						pattern="[0-9]*"
						placeholder="请输入验证码"
						type="text"
					/>
					<el-button
						:disabled="disabled"
						type="primary"
						style="height: 41px !important"
                        @click="sendCode"
						>{{ codeMsg }}</el-button
					>
				</el-form-item>

				<el-form-item class="loginbtn">
					<el-button class="btn" style="padding-left: 13px !important"
                    @click="$router.push('/login')"
					>密码登录</el-button>
					<el-button
						@click="login"
						class="btn"
						style="padding-left: 7px !important"
					>验证码登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	name: "Codelogin",
	data() {
		return {
			token: "",
			disabled: false,
			userTel: "", //用户输入的手机号
			codeNum: 6, //定时器的倒计时秒数
			codeMsg: "获取短信验证码",
			code: "", //从后端得到的短信验证码
			userCode: "", //用户输入的短信验证码
			// 手机号验证规则
			rules: {
				// 手机号验证
				userTel: {
					rule: /^1[23456789]\d{9}$/,
					msg: "手机号不能为空,并且是11位数字",
				},
			},
		};
	},
	methods: {
		// 验证
		validate(key) {
			// !!!!！！@@@@@@@@@@！！！！
			let bool = true; //test() 方法是正则表达式的一个方法，用于检测一个字符串是否匹配某个模式.语法：regexp.test(str)
			if (!this.rules[key].rule.test(this[key])) {
				//this[key]就是用户输入的值  key就是传递过来的userTel
				// 提示信息
                this.$message.warning(this.rules[key].msg)
				bool = false; //这里用bool做变量来定义true和false,直接return true会报错
				return false; //没有通过正则验证，就返回flase
			} else {
				return bool;
			}
		},


		// 点击获取短信验证码按钮
		sendCode() {
			// 前端验证
			if (!this.validate("userTel")) return; //如果没有通过验证。直接return掉，如果通过验证就进行下面的操作
            this.$message.success("手机号输入正确")
			this.$axios({
					url: "/api/code",
					method: "get",
				})
				.then((res) => {
					console.log("Codelogin=>sendcode=>res", res); 
                    console.log("验证码：",res.yzm);
					if (res.success) {
						this.code = res.yzm;
					}
				});
			// 禁用按钮
			this.disabled = true;
			// 倒计时
			let timer = setInterval(() => {
				//6秒没有走完的时候，显示’重新发送‘
				this.codeNum--;
				this.codeMsg = `等${this.codeNum}秒重新发送`;
			}, 1000);
			// 判断什么时候停止定时器
			setTimeout(() => {
				clearInterval(timer);
				this.codeNum = 6;
				this.disabled = false;
				this.codeMsg = "获取短信验证码";
			}, 6000);
		},


		login() {
			if(this.code!==""&&this.code==this.userCode){
              this.$message.success("您输入的验证码正确")
                this.$axios.get('/api/login').then(res=>{
                    if(!res.success) return
                    console.log("@",res);
                    this.$router.push('/home')
                })
            }else{
              this.$message.warning("您输入的验证码有错")
            }
		},

		// 点击回车键登录
		keyDown(e) {
			if (e.keyCode == 13) {
				this.login();
			}
		},
	},
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
			// justify-content: center;
			align-items: center;
			font-size: 14px;
			// color: blue;
		}
	}
}

/deep/.el-form-item__error {
	color: black;
}

// .loginbtn /deep/ .el-button:nth-child(2){
//     // background-color: #03e9f4;
// }

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
	width: 85px;
	height: 30px;
	padding-top: 16px;
	margin-top: 10px;
	color: #03e9f4;
	position: relative;
	overflow: hidden;
	// text-transform: uppercase;
}
.loginbtn {
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
.dljm {
	text-align: center;
	margin: 0 10px 0;
	color: #fff;
	margin-bottom: 30px;
	color: #fff;
	font-weight: 700;
}
</style>