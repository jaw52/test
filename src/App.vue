<template>
	<div id="app">
		<my-nav></my-nav>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/Nav.vue'
	export default {
		name: 'app',
		components:{
			"my-nav":Nav
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	/* 设置字体图标 */
	@font-face {
	  font-family: 'iconfont';  /* project id 1500739 */
	  src: url('//at.alicdn.com/t/font_1500739_geh7bjdt5v.eot');
	  src: url('//at.alicdn.com/t/font_1500739_geh7bjdt5v.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1500739_geh7bjdt5v.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1500739_geh7bjdt5v.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1500739_geh7bjdt5v.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1500739_geh7bjdt5v.svg#iconfont') format('svg');
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
	.main{
		margin-top: 1.22rem;
	}
</style>
