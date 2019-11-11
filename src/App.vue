<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	/* 设置字体图标 */
	@font-face {
		font-family: 'iconfont';
		/* project id 1500739 */
		src: url('//at.alicdn.com/t/font_1500739_h0kmbxpqoy.eot');
		src: url('//at.alicdn.com/t/font_1500739_h0kmbxpqoy.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1500739_h0kmbxpqoy.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1500739_h0kmbxpqoy.woff') format('woff'),
			url('//at.alicdn.com/t/font_1500739_h0kmbxpqoy.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1500739_h0kmbxpqoy.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		font-size: 0.32rem;
	}
</style>
