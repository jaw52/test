<template>
	<div class="nav">
		<!--  使用router 中配置的meta字段，动态改变导航栏的标题 -->
		<van-nav-bar :title="$route.meta.title" left-text="返回" left-arrow @click-left="back">
			<div slot="right">
				<div class="btn">
					<i class="iconfont">&#xe611;</i>
				</div>
				<div :class="['btn',isPulldown?'touch-color':'']" @touchstart="isPulldown=!isPulldown">
					<i class="iconfont" v-if="!isPulldown">&#xe605;</i>
					<i class="iconfont" v-else>&#xe62c;</i>
				</div>
			</div>
		</van-nav-bar>
		<transition name="fade">
			<!-- 登录状态的下拉菜单 -->
			<div class="pull-down" v-if="isPulldown">
				<div v-if="$store.state.isLogin">
					<div class="user-card" @touchstart="goToHome">
						<van-image fit="cover" class="avatar" :src="this.$store.state.headimg"></van-image>
						<span>{{pulldownNickname}}</span>
						<van-icon name="arrow"></van-icon>
					</div>
					<ul class="link-list">
						<li @touchstart="goTo(item.url)" v-for="item in linkData" :key="item.id">
							{{item.title}}
							<van-icon name="arrow"></van-icon>
						</li>
					</ul>
					<div class="bottom" @touchstart="logout">
						<div class="logout-btn">退出登陆</div>
					</div>
				</div>
				<!-- 退出登陆后的下拉菜单 -->
				<div v-else>
					<div class="btn-div">
						<router-link class="logout-btn" to="/registerone">注册</router-link>
						<router-link class="login-btn" to="/login">登陆</router-link>
					</div>
					<ul class="link-list">
						<li @touchstart="goTo(item.url)" v-for="item in LogoutLineData" :key="item.id">
							{{item.title}}
							<van-icon name="arrow"></van-icon>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import "@/assets/animate.css"
	export default {
		name: "Nav",
		data() {
			return {
				isPulldown: false, //目前下拉菜单有无
				linkData: [{
						id: 0,
						title: "我的关注",
						url: "/follow"
					},
					{
						id: 1,
						title: "热门",
						url: "/browse"
					},{
						id:2,
						title:"首页",
						url:"/"
					}
				],
				/* 退出登陆后，导航栏下拉菜单内容 */
				LogoutLineData: [{
					id: 0,
					title: "热门",
					url: "/browse"
				}]
			}
		},
		computed: {
			pulldownNickname() {
				return this.$store.state.nickname.substring(0, 6) + "..."
			},
			isLogin() {
				return localStorage.getItem("Flag") ? true : false
			}
		},
		methods: {
			//返回
			back() {
				this.$router.go(-1)
			},
			goTo(path) {
				if (this.$route.path == path) {
					this.$router.go(0);
					this.$router.push(path)
				} else {
					this.$router.push(path)
				}
			},
			/* 登出 */
			logout() {

				localStorage.removeItem("accountMes");
				localStorage.removeItem("Flag");
				this.$store.commit("logout");
				this.$router.push('/login');
				this.isLogout = true
			},
			/* 调转至个人主页 */
			goToHome() {
				
				let nickname=this.$store.state.nickname
				
				if (this.$route.path == "/user") {
					this.$router.go(0);
					this.$router.push({
						path: "/user",
						query: {
							nickname
						}
					})
				} else {
					this.$router.push({
						path: "/user",
						query: {
							nickname
						}
					})
				}
			}
		},
	}
</script>

<style scoped="scoped">
	.nav {
		position: fixed;
		width: 100%;
		z-index: 99;
		top: 0;
	}

	.nav>>>.van-nav-bar__right div {
		display: flex;
		align-items: center;
	}

	.nav>>>.van-nav-bar__right {
		right: 0;
	}

	.nav>>>.van-nav-bar__left {
		left: 0.24rem;
	}

	.iconfont {
		font-size: 0.58rem;
	}

	.btn {
		width: 1.17rem;
		height: 100%;
		display: flex;
		justify-content: center;
	}

	/* 点击按钮后的背景色 */
	.touch-color {
		background-color: #f2f2f2;
	}

	/* 下拉菜单 */
	.pull-down {
		width: 100%;
		background-color: #444444;
		color: #DDD;
		font-size: 0.42rem;
		position: absolute;
		top: 1.17rem;
	}

	.user-card {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #3B3B3B;
		padding: 0.32rem 0 0.24rem;
		box-sizing: border-box;
	}

	.avatar {
		width: 1.33rem;
		height: 1.33rem;
		margin: 0 0.53rem 0.16rem;
		border: 2px solid #555;
	}

	.user-card span {
		font-size: 0.48rem;
		position: relative;
	}

	.user-card .van-icon {
		font-size: 0.42rem;
		position: absolute;
		right: 0.32rem;
	}

	.link-list li {
		border-bottom: 1px solid #3B3B3B;
		height: 1.17rem;
		line-height: 1.17rem;
		padding-left: 20px;
		position: relative;
	}

	.link-list .van-icon {
		position: absolute;
		right: 0.32rem;
		line-height: 1.17rem;
	}

	/* 下拉菜单底部 */
	.bottom {
		padding: 0.32rem 0.53rem;
	}

	.logout-btn {
		width: 100%;
		background: linear-gradient(#E53E49, #D43636);
		line-height: 1.06rem;
		text-align: center;
		border-radius: 0.1rem;
		color: #DDD;
	}

	/* 退出登陆后的下拉菜单 */
	.btn-div {
		display: flex;
		justify-content: space-between;
		padding: 0.53rem;
		border-bottom: 0.02rem solid #3B3B3B;
	}

	.login-btn {
		width: 3.14rem;
		text-align: center;
		line-height: 1.06rem;
		background: linear-gradient(#FAFAFA, #F2F2F2);
		color: #444;
		margin-left: 0.42rem;
		border-radius: 0.1rem;
	}

	/* 动画效果 */
	.fade-enter-active {
		transition: all .5s ease;
	}

	.fade-leave-active {
		transition: all .5s ease;
	}

	.fade-enter,
	.fade-leave-active {
		top: -6.26rem;
		opacity: 0.8;
	}
</style>
