<template>
	<div class="register-box">
		<div class="filebox">
			<file-uploader :file-num-limit="1" @file-list="handleImg" :multiple="true"></file-uploader>
			<img :src="headimg" class="file-headimg" v-if="headimg">
		</div>
		<van-cell-group>
			<van-field v-model="nickname" required clearable label="昵称" placeholder="请输入昵称" />
		</van-cell-group>
		<van-radio-group v-model="sex">
			<van-cell-group>
				<van-cell title="男" clickable @click="sex = '男'">
					<van-radio slot="right-icon" name="男" />
				</van-cell>
				<van-cell title="女" clickable @click="sex = '女'">
					<van-radio slot="right-icon" name="女" />
				</van-cell>
			</van-cell-group>
		</van-radio-group>

		<van-area :area-list="areaList" :title="areaTitle" @confirm="confirm"/>
		
		<van-cell-group>
		  <van-field v-model="introduce" rows="2" autosize label="个人简介" type="textarea" maxlength="50" placeholder="请输入个人简介" show-word-limit/>
		</van-cell-group>
		<van-button type="primary" size="large" @click="register()">注册</van-button>
	</div>
</template>

<script>
	import WebUploader from "@/components/WebUploader"
	import AreaList from "@/assets/Area.js"
	export default {
		name: 'RegisterTwo',
		components: {
			"file-uploader": WebUploader
		},
		data() {
			return {
				headimg: "",
				nickname: "",
				sex: "",
				introduce: "",
				location: [],
				areaList:AreaList,
				areaTitle:"请选择地区"
			}
		},
		methods: {
			handleImg(urlimg) {
				this.headimg = urlimg;
			},
			confirm(data){
				this.location = data[0].name + "," + data[1].name + "," + data[2].name;
			},
			register() {
				if (this.headimg == "" || this.nickname == "" || this.sex == "" || this.introduce == "") {
					this.$dialog.alert({
						message: '请信息填写完整'
					});
					return
				}
				let postData = this.$qs.stringify({
					username: this.$route.query.username,
					passwd: this.$route.query.passwd,
					nickname: this.nickname,
					headimg: this.headimg,
					sex: this.sex,
					introduce: this.introduce,
					location: this.location,
					active: 1
				})
				this.axios.post('http://localhost:8888/register', postData).then(response => {
					if (response.data.code == 1) {
						this.$dialog.alert({
							message:"注册成功！"
						})
						this.$router.push('/login')
					} else {
						this.$dialog.alert({
							message: response.data.msg
						});
					}
				}).catch(response => {
					console.log(response.err);
				})
			},
			confirm(areaInfo){
				
				this.areaTitle="";
				for(let i=0;i<areaInfo.length;i++){
					this.areaTitle+=areaInfo[i].name
				}
				let length=this.areaTitle.length;
				this.areaTitle=this.areaTitle.substring(0,length)
				
				this.location=areaInfo[0].name;
			}
		}
	}
</script>

<style scoped>
	.filebox{
		display: flex;
		justify-content: center;
		margin: 1rem 0;
	}
	.filebox img {
		margin-left: 2rem;
		width: 126px;
	}
	.van-cell-group{
		margin: 1rem 0;
	}
</style>
