<template>
	<div class="login-box">
		<p class="tips" v-if="show">账户或密码错误</p>
		<van-cell-group>
			<van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

			<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
		</van-cell-group>
		<van-button type="primary" size="large" @click="login">登陆</van-button>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				username: "",
				password: "",
				show: false
			}
		},
		methods: {
			login() {

				this.axios.get("http://localhost:8888/login", {
					params: {
						username: this.username,
						passwd: this.password
					}
				}).then(response => {
					if (response.data.code == 0) {
						
						this.show = true
					} else {
						this.show = false
						
						// Toast.success('登陆成功')
						
						/* 将登陆状态放置于缓存中，并更新vuex置于isLogin:true */
						this.$store.commit("login");
						console.log(response.data)
						localStorage.setItem("accountMes", JSON.stringify({
							nickname: response.data.userMes.nickname,
							headimg: response.data.userMes.headimg
						}))
						localStorage.setItem("Flag", "isLogin")
						
						/* 跳转 */
						
						this.$router.push({
							path:"/user",
							query:{
								nickname:response.data.userMes.nickname
							}
						})
					}
					
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.tips {
		color: firebrick;
		padding:0.16rem 0.42rem;
	}
</style>
