<template>
	<div class="home-box">
		<div class="page-content">
			<div class="list" v-for="(item,index) in list" :key="item.id">
				<div class="headimg">
					<van-image round width="1.07rem" height="1.07rem" fit="cover" :src="item.headimg" />
					<span class="nickname">{{item.nickname}}</span>
				</div>
				<div class="desc">{{item.work_desc}}</div>
				<div class="workimg">
					<van-image fit="cover" :src="item.workimg" v-lazy="item.workimg" />
				</div>
				<div class="tags">
					<span class="tag" v-for="item in tagList">绘画</span>
				</div>
				<div class="footer">
					<div class="footer-content">
						<van-icon name="share" />转发</div>
					<div class="footer-content">
						<van-icon name="comment-o" />{{item.work_comment}}</div>
					<div @click="fabulous(index)" class="footer-content" :style="(item.islike)? 'color: red' : ''">
						<van-icon :name="(item.islike)? 'like':'like-o'" />{{item.work_like}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomePage',
		data() {
			return {
				list: [],
				tagList: [1, 2],
			}
		},
		methods: {
			fabulous(index) {
				this.list[index][0].islike = !this.list[index][0].islike;
				if (this.list[index][0].islike) {
					this.list[index][0].work_like++;
				} else {
					this.list[index][0].work_like--;
				}
				return
			}
		},
	
		mounted() {
			
			let nickname = JSON.parse(localStorage.getItem('accountMes')).nickname
			
			this.axios.get("http://localhost:8888/getfollow", {
				params: {
					nickname
				}
			}).then(response => {
				this.list = response.data;
				for (let i = 0; i < this.list.length; i++) {
					this.list[i].islike = false;
				}
			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.page-content {
		width: 100%;
		background-color: #F8F8F8;
	}

	.list {
		background-color: white;
		margin-bottom: 0.21rem;
		padding: 0.34rem;
	}

	.headimg {
		display: flex;
		align-content: center;
		font-size: 0.39rem;
		line-height: 1.07rem;
		font-weight: 600;
	}

	.nickname {
		margin-left: 0.21rem;
	}

	.desc {
		font-size: 0.39rem;
		line-height: 0.39rem;
		margin: 0.34rem 0 0.21rem;
	}

	.tags {
		display: flex;
		color: #478EEC;
		text-align: center;
		margin: 0.21rem 0 0.21rem;
	}

	.tag {
		font-size: 0.34rem;
		padding: 0.01rem 0.09rem;
		border-radius: 0.04rem;
		background-color: #C1EBFC;
		margin-right: 0.21rem;
	}

	.footer {
		display: flex;
		font-size: 0.34rem;
		justify-content: space-around;
		color: #A2A2A4;
	}

	.footer-content {
		display: flex;
		align-content: center;
	}

	.footer .footer-content i {
		font-size: 0.64rem;
		margin-right: 0.21rem;
	}
</style>
