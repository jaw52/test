<template>
	<!-- 单个作品组件 -->
	<div class="card">
		<img :src="imgUrl" v-lazy="imgUrl" class="content-img"></img>
		<p class="desc">{{descText}}</p>
		<div class="bottom">
			<div class="bottom-left">
				<img :src="cardData.headimg" alt="" class="avatar">
				<span>{{name}}</span>
			</div>
			<div class="bottom-right">
				<van-icon name="good-job-o" />
				<span>{{cardData.work_like}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Card",
		data() {
			return {
				imgUrl: this.cardData.workimg,
				nickname: this.cardData.nickname
			}
		},
		props: {
			cardData: {
				type: Object
			}
		},
		computed: {
			descText() {
				return this.cardData.work_desc.substring(0, 13) + "..."
			},
			name() {
				return this.nickname.substring(0, 6) + "..."
			}
		},
		methods: {
			/* 查看大图 */
			/* viewImg() {
				this.$imagePreview([
					this.cardData.workimg
				])
			} */
		},
		mounted() {

		}
	}
</script>

<style scoped>
	.card {
		width: 4.53rem
	}

	.content-img {
		width: 4.53rem;
		border-radius: 8px;
	}

	/* 内容描述 */
	.desc {
		margin-top: 0.08rem;
		color: #575759;
	}

	/* 卡片底部 */
	.bottom {
		display: flex;
		justify-content: space-between;
		margin-top: 0.08rem;
	}

	.bottom-left {
		display: flex;
		align-items: center;
		color: #252526;
	}

	.bottom-right {
		display: flex;
		align-items: center;
	}

	.avatar {
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		margin-right: 4px;
	}
</style>
