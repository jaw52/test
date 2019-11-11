<template>
	<div id="app">
		<my-nav></my-nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import Nav from '@/components/Nav.vue'
	export default {
		name: 'app',
		components:{
			"my-nav":Nav
		},
		mounted() {
			
			/* TEST CODE */
			localStorage.setItem("accountMes",JSON.stringify({
				nickname:"什么时候会画画了再把名字改回来",
				headimg:"https://p3-bcy.byteimg.com/img/banciyuan/Public/Upload/avatar/3057721/173c98251b8f4f1e9fbb57b1b3174a03/fat.jpg~tplv-banciyuan-amiddle.image"
			}))
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
	  src: url('//at.alicdn.com/t/font_1500739_l7ykhxim4ee.eot');
	  src: url('//at.alicdn.com/t/font_1500739_l7ykhxim4ee.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1500739_l7ykhxim4ee.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1500739_l7ykhxim4ee.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1500739_l7ykhxim4ee.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1500739_l7ykhxim4ee.svg#iconfont') format('svg');
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
