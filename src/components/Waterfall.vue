<template>
	<!-- 瀑布流展示作品 -->
	<div class="waterfall">
		<div class="waterfall-col">
			<my-card v-for="(item,index) in cardData.firstCol" :key="item.id" :card-data="cardData.firstCol[index]"></my-card>
		</div>
		<div class="waterfall-col">
			<my-card v-for="(item,index) in cardData.secondCol" :key="item.id" :card-data="cardData.secondCol[index]"></my-card>
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
					secondCol: []
				}
			}
		},
		components: {
			"my-card": Card
		},
		methods: {
			//将请求的数据分为两个数组，方便页面展示
			handleShow(cardArr) {
				for (let i = 0; i < cardArr.length; i++) {
					if (i % 2 == 0) {
						this.cardData.firstCol.push(cardArr[i])
					} else {
						this.cardData.secondCol.push(cardArr[i])
					}
				}
			}
		},
		mounted() {

		},
		watch: {
			/* 监听workInfo对象，当有值时才触发handleShow */
			workInfo(newValue) {
				this.handleShow(newValue)
			}
		},
	}
</script>

<style scoped="scoped">
	.waterfall {
		display: flex;
		justify-content: center;
	}

	.waterfall-col {
		margin: 0 0.16rem;
	}

	.card {
		padding: 0 0 0.4rem;
	}
</style>
