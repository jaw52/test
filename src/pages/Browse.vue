<template>
	<!-- 广场 -->
	<div class="browse">
		<waterfall :work-info="workInfo" :v-if="workInfo.length"></waterfall>
	</div>
</template>

<script>
	import Waterfall from '@/components/Waterfall.vue';
	
	
	export default {
		name: "Browse",
		components: {
			"waterfall": Waterfall
		},
		data() {
			return {
				workInfo: []
			}
		},
		mounted: function() {
			
			// 请求广场页面信息
			this.axios.get("http://localhost:8888/browse")
				.then(response => {
					this.workInfo =response.data
				})
				.catch(error => {
					console.log(error)
				})
		}
	}
</script>

<style scoped="scoped">

</style>
