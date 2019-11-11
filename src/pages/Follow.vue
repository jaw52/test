<template>
	<!-- 关注列表 -->
	<div class="follow">
		<my-nav></my-nav>
		<!-- 账户卡片 -->
		<div class="name-card">
			<van-image class="avatar" round :src="headimg"></van-image>
			<div class="info">
				<p class="account-name">周星星</p>
				<span class="follow-count" @touchstart="test">{{followInfo.length}}关注</span>
			</div>
		</div>
		<!-- 关注瀑布 -->
		<div class="waterfall">
			<div class="item" v-for="item in followInfo" :key="item.id">
				<div class="gray"></div>
				<van-image round :src="item.headimg"></van-image>
				<p class="user-name">{{item.follow_nickname}}</p>
			</div>
		</div>
		<!-- 到达提醒 -->
		<div class="tips">
			<div class="text">没有更多了</div>
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/Nav.vue';
	
	export default{
		name:"Follow",
		components:{
			"my-nav":Nav
		},
		data() {
			return {
				followInfo:[],
				headimg:"//hbimg.huabanimg.com/663da7775232565c74e813bafbd59d3b5390f9a327312-n14lC2_sq120"
			}
		},
		methods: {
			test() {
				console.log(11)
			}
		},
		mounted() {
			/* 请求关注列表信息 */
			let postData=this.$qs.stringify({
				nickname:"什么时候会画画了再把名字改回来"
			})	
			this.axios.post("http://localhost:8888/follow",postData)
				.then(response=>{
					this.followInfo=response.data
				})
				.catch(error=>{
					console.log(error)
				})
		}
	}
</script>

<style scoped="scoped">
	.waterfall{
		display: flex;
		flex-wrap: wrap;
		width: 8rem;
		justify-content: space-between;
		margin: 0 auto;
	}
	/* 账户信息卡片 */
	/* 头像 */
	.name-card{
		display: flex;
		align-items: center;
		height: 2.26rem;
		border-bottom: 2px solid #F2F2F2;
	}
	.avatar{
		width: 1.2rem;
		height: 1.2rem;
		margin: 0 0.24rem ;
	}
	.info{
		display: flex;
		height: 1.2rem;
		flex-direction: column;
		justify-content: space-between;
	}
	.account-name{
		font-size: 0.48rem;

	}
	.follow-count{
		color: #999;

	}
	/* 关注列表 */
	.item{
		width: 3.86rem;
		height: 4.16rem;
		box-shadow: 0 1px 3px rgba(0,0,0,.3);
		text-align: center;
		position: relative;
		margin-top: 0.26rem;
		background: #fff;
	}
	.waterfall .van-image{
		width:  1.7rem;
		height: 1.7rem;
		box-shadow: 0 0 3px rgba(0,0,0,.3);
		margin-top: 0.26rem;
	}
	.user-name{
		margin-top: 0.13rem;
	}
	.gray{
		position: absolute;
		width: 3.86rem;
		height: 0.96rem;
		top: 0;
		left: 0;
		background-color: #fafafa;
	}
	/* 到底提醒 */
	.tips{
		height: 0.37rem;
		box-sizing: border-box;
		border-top: 1px solid #DDD;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin:0.8rem 0 0.4rem;
	}
	.tips .text{
		height: 0.74rem;
		line-height: 0.74rem;
		background-color: #DDD;
		font-size: 0.37rem;
		color: #fff;
		width: 2.93rem;
		border-radius: 0.37rem;
		text-align: center;
	}
</style>
