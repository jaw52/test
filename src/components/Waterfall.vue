<template>
	<!-- 瀑布流展示作品 -->
	<div class="waterfall">
		<div v-show="complete" class="waterfall-container" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy"
		 infinite-sroll-distance="10">
			<div class="waterfall-col">
				<my-card v-for="(item,index) in cardData.firstCol" :key="item.id" :card-data="cardData.firstCol[index]"></my-card>
			</div>
			<div class="waterfall-col">
				<my-card v-for="(item,index) in cardData.secondCol" :key="item.id" :card-data="cardData.secondCol[index]"></my-card>
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
	import Card from "@/components/Card"
	export default {
		name: "Waterfall",
		props: {
			//作品信息
			workInfo: {
				type: Array
			},
		},
		data() {
			return {
				//用户的作品信息
				cardData: {
					firstCol: [], //第一列
					secondCol: [],
				},
				loadData: [], //读取到展示在页面的数据
				count: 0, //用于下拉刷新时，计数
				busy: false, //busy为false表示空闲,可执行loadMore(下拉刷新)
				complete: false,
				isLoading: true
			}
		},
		components: {
			"my-card": Card
		},
		methods: {
			//将请求的数据分为两个数组，方便页面展示
			handleShow(cardArr) {
				this.cardData={
					firstCol: [], //第一列
					secondCol: [],
				}
				for (let i = 0; i < cardArr.length; i++) {
					if (i % 2 == 0) {
						this.cardData.firstCol.push(cardArr[i])
					} else {
						this.cardData.secondCol.push(cardArr[i])
					}
				}
			},
			/* 下拉刷新处理 */
			loadMore() {
				this.busy = true;
				
				if (this.count < this.workInfo.length || this.count == 0) {
					setTimeout(() => {
						for (var i = 0, j = 6; i < j; i++) {
							if (this.count + 1 <= this.workInfo.length) {
								this.loadData.push(this.workInfo[this.count++]) //每次刷新，读取6个数据
							}
						}
						this.handleShow(this.loadData)
						this.busy = false
					}, 1000)
				} else {
					this.isLoading = false
				}
			}
		},
		watch: {
			/* 监听workInfo对象，当有值时才触发渲染 */
			workInfo(newValue) {
				this.complete = true;
			}
		},
	}
</script>

<style scoped="scoped">
	.waterfall-container {
		display: flex;
		justify-content: center;
		margin-top: 0.26rem;
	}

	.waterfall-col {
		margin: 0 0.16rem;
	}

	.card {
		padding: 0 0 0.4rem;
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
	}
</style>
