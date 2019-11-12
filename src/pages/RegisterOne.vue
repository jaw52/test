<template>
	<div class="register-box">
		<van-cell-group>
			<van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

			<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
		</van-cell-group>
		<van-button type="primary" size="large" @click="next()">下一步</van-button>
	</div>
</template>

<script>
	import WebUploader from "@/components/WebUploader"

	export default {
		name: 'RegisterOne',
		components: {
			"file-uploader": WebUploader
		},
		data() {
			return {
				headimg: "",
				username: "",
				password: ""
			}
		},
		methods: {
			next() {
				if (this.username == "" || this.password == "") {
					this.$dialog.alert({
						message: '用户名和密码不能为空'
					});
					return
				}
				let postData = this.$qs.stringify({
					username: this.username,
					active: 0
				})
				this.axios.post('http://localhost:8888/register', postData).then(response => {
					if (response.data.code == 1) {
						this.$router.push({
							path: "/registertwo",
							query: {
								username: this.username,
								passwd: this.password
							},
						})
					} else {
						this.$dialog.alert({
							message: response.data.msg
						});
					}
				}).catch(response => {
					console.log(response.err);
				})
			}
		}
	}
</script>

<style scoped>
	.van-cell-group{
		margin: 1rem 0;
	}

</style>
