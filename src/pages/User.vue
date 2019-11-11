<template>
	<!-- 个人主页 -->
	<div class="User">
		<div class="mes-card">
			<div class="card-top">
				<van-image round width="2.13rem" height="2.13rem" fit="cover" :src="headimg" />
				<van-button type="info">关注</van-button>
			</div>
			<p class="user-name">{{nickname}}</p>
			<div class="tag">
				<i class="iconfont icon-man" v-if="sex=='男'?true:false">&#xe661;</i>
				<i class="iconfont icon-woman" v-else>&#xe6e3;</i>
				<span>{{tag}}</span>
			</div>
			<p class="introduce">{{introduce}}</p>
			<div class="bg" :style="{backgroundImage:`url(${headimg})`}"></div>
		</div>
		<waterfall :work-info="workInfo" :v-if="workInfo.length"></waterfall>
	</div>
</template>

<script>
	import Waterfall from "@/components/Waterfall.vue"

	export default {
		name: "User",
		components: {
			"waterfall": Waterfall
		},
		data() {
			return {
				headimg: "",
				nickname: "",
				introduce: "",
				sex: "",
				tag: "",
				workInfo:[]
			}
		},
		methods: {

		},
		mounted() {
			
			/* 请求用户作品信息 */
			let postData=this.$qs.stringify({
				nickname:"什么时候会画画了再把名字改回来"
			})
			this.axios.post("http://localhost:8888/info",postData)
				.then(response => {				
					this.nickname=response.data[0].nickname
					this.headimg=response.data[0].headimg
					this.introduce=response.data[0].intrduce
					this.sex=response.data[0].sex
					this.tag=response.data[0].tag
					
					this.workInfo=response.data
				})
				.catch(error => {
					console.log(error)
				})
		}
	}
</script>

<style scoped="scoped">
	/* 用户资料卡片 */
	.mes-card {
		height: 7.46rem;
		padding: 0.64rem 0.53rem;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
		background: rgba(122,122,122,.6);
	}
	/* 顶部背景图片 */
	.bg {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		-webkit-filter: blur(0.16rem);
		-moz-filter: blur(0.16rem);
		-o-filter: blur(0.16rem);
		-ms-filter: blur(0.16rem);
		filter: blur(0.16rem);
		background-repeat: no-repeat;
		background-size: cover;
		z-index: -1;

	}

	.card-top {
		height: 2.13rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.van-button {
		width: 2.34rem;
		height: 0.96rem;
		line-height: 0.96rem;
		border-radius: 0.16rem;
	}

	.user-name {
		font-size: 0.53rem;
		color: #fff;
		padding-top: 0.26rem;
	}

	.tag {
		margin: 0.26rem 0 0.53rem;
		display: flex;
		align-items: center;
	}

	.tag i {
		display: inline-block;
		color: #FFFFFF;
		border-radius: 0.08rem;
		line-height: 0.53rem;
		width: 0.53rem;
		text-align: center;
		margin-right: 0.21rem;
	}

	.tag .icon-man {
		background-color: #4a8bed;
	}

	.tag .icon-woman {
		background-color: #fb4e4e;
	}

	.tag span {
		padding: 0.08rem 0.16rem;
		background: rgba(255, 255, 255, .3);
		border-radius: 0.1rem;
		color: #fff;
	}

	.introduce {
		color: #fff;
		font-size: 0.34rem;
	}

	.waterfall {
		margin-top: 0.53rem;
	}
</style>
