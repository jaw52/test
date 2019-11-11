<template>
	<div class="nav">
		<van-nav-bar title="标题" left-text="返回" left-arrow>
			<div slot="right">
				<van-icon name="search"></van-icon>
				<van-icon name="ellipsis" />
			</div>
		</van-nav-bar>
	</div>
</template>

<script>
	export default {
		name: "Nav",
		methods: {

			onClickLeft() {
				Toast('返回');
			},
			onClickRight() {
				Toast('按钮');
			}

		},
	}
</script>

<style scoped="scoped">
</style>
