<template>
	<!-- 关注列表 -->
	<div class="follow">
		<!-- 账户卡片 -->
		<div class="name-card">
			<div @touchstart="goToHome()">
				<van-image class="avatar" round :src="$store.state.headimg"></van-image>
			</div>
			<div class="info">
				<p class="account-name" @touchstart="goToHome">{{$store.state.nickname}}</p>
				<span class="follow-count">{{followInfo.length}}关注</span>
			</div>
		</div>
		<!-- 关注瀑布 -->
		<div class="waterfall" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-sroll-distance="10">
			<div class="item" v-for="item in loadData" :key="item.id">
				<div class="gray"></div>
				<van-image v-lazy="item.headimg" round :src="item.headimg"></van-image>
				<p class="user-name">{{item.follow_nickname}}</p>
			</div>

		</div>
		<van-loading v-if="isLoading" type="spinner" size="16px">加载中...</van-loading>
		<!-- 到达提醒 -->
		<div class="tips" v-if="!isLoading">
			<div class="text">没有更多了</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Follow",
		data() {
			return {
				followInfo: [],
				loadData: [], //读取到展示在页面的数据
				count: 0, //用于下拉刷新时，计数
				busy: false, //busy为false表示空闲,可执行loadMore(下拉刷新)
				isLoading: true
			}
		},
		methods: {
			/* 调转至个人主页 */
			goToHome() {
				this.$router.push({
					path: "/user",
					query: {
						nickname: this.nickname
					}
				})
			},
			/* 下拉刷新处理 */
			loadMore() {
				this.busy = true;
				if (this.count < this.followInfo.length || this.count == 0) {
					setTimeout(() => {
						for (var i = 0, j = 6; i < j; i++) {
							if (this.count + 1 <= this.followInfo.length) {
								this.loadData.push(this.followInfo[this.count++]) //每次刷新，读取6个数据
							}
						}
						this.busy = false
					}, 1000)
				} else {
					this.isLoading = false
				}
			}
		},
		mounted() {
			let nickname = this.$store.state.nickname
			/* 请求关注列表信息 */
			let postData = this.$qs.stringify({
				nickname
			})
			this.axios.post("http://localhost:8888/mobilefollow", postData)
				.then(response => {
					this.followInfo = response.data
				})
				.catch(error => {
					console.log(error)
				})
		}
	}
</script>

<style scoped="scoped">
	.waterfall {
		display: flex;
		flex-wrap: wrap;
		width: 8rem;
		justify-content: space-between;
		margin: 0 auto;
	}

	/* 账户信息卡片 */
	/* 头像 */
	.name-card {
		display: flex;
		align-items: center;
		height: 2.26rem;
		border-bottom: 2px solid #F2F2F2;
	}

	.avatar {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0 0.24rem;
	}

	.info {
		display: flex;
		height: 1.2rem;
		flex-direction: column;
		justify-content: space-between;
	}

	.account-name {
		font-size: 0.48rem;

	}

	.follow-count {
		color: #999;

	}

	/* 关注列表 */
	.item {
		width: 3.86rem;
		height: 4.16rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		text-align: center;
		position: relative;
		margin-top: 0.26rem;
		background: #fff;
	}

	.waterfall .van-image {
		width: 1.7rem;
		height: 1.7rem;
		box-shadow: 0 0 3px rgba(0, 0, 0, .3);
		margin-top: 0.26rem;
	}

	.user-name {
		margin-top: 0.13rem;
	}

	.gray {
		position: absolute;
		width: 3.86rem;
		height: 0.96rem;
		top: 0;
		left: 0;
		background-color: #fafafa;
	}

	/* 到底提醒 */
	.tips {
		height: 0.37rem;
		box-sizing: border-box;
		border-top: 1px solid #DDD;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin: 0.8rem 0 0.4rem;
	}

	.tips .text {
		height: 0.74rem;
		line-height: 0.74rem;
		background-color: #DDD;
		font-size: 0.37rem;
		color: #fff;
		width: 2.93rem;
		border-radius: 0.37rem;
		text-align: center;
	}

	/* 加载反馈组件 */
	.van-loading {
		display: flex;
		justify-content: center;
		margin-top: 0.26rem;
	}
</style>
