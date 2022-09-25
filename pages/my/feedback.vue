<template>
	<view class="bgc">
		<view class="header">
			<img src="../../static/左箭头.png" @click="$router.go(-1)">
			<h4>意见反馈</h4>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.bgc{
		background-color: rgba(119, 119, 119, 0.1);
		height: 100vh;
	}
	.header {
		display: grid;
		height: 100rpx;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 20rpx solid rgba(119, 119, 119, 0.1);
		background-color: #fff;
	
		img {
			grid-area: 1/1/1/1;
			width: 40rpx;
			height: 40rpx;
		}
	
		h4 {
			grid-area: 1/1/1/1;
			text-align: center;
		}
	}
</style>
