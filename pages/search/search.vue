<template>
	<view class="header">
		<img src="../../static/左箭头.png" alt="返回">
		<view><input type="text" placeholder="所搜你想要的内容"><img src="../../static/放大镜.png" alt=""></view>
		<span>取消</span>
	</view>
	<view class="hot">
		<p>热门搜索</p>
		<ul>
			<li>java</li>
			<li>Python</li>
			<li>Vue.js</li>
			<li>React</li>
			<li>SpringBoot</li>
			<li>SpringCloud</li>
		</ul>
	</view>
	<view class="history">
		<view class="a"><span>历史搜索</span><span>清空</span></view>
		<ul>
			<li>java</li>
		</ul>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data = reactive({})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.history{
		width: 90%;
		margin: 0 auto;
		margin-top: 30rpx;
		.a{
			display: flex;
			justify-content: space-between;
			margin-bottom: 30rpx;
			span:nth-child(2){
				color: #ccc;
			}
		}
		ul{
			display: flex;
			list-style: none;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			justify-content: space-between;
			li{
				border: 1px solid #ccc;
				padding: 10rpx 10rpx;
				font-size: 26rpx;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
			}
		}
	}
	.hot{
		width: 90%;
		margin: 0 auto;
		p{
			font-size: 36rpx;
			margin-bottom: 20rpx;
		}
		ul{
			display: flex;
			list-style: none;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			justify-content: space-between;
			li{
				border: 1px solid #ccc;
				padding: 10rpx 10rpx;
				font-size: 26rpx;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
			}
		}
	}

	.header {
		display: flex;
		height: 100rpx;
		align-items: center;

		img {
			width: 52rpx;
			height: 52rpx;
			margin: 0 10rpx;
		}

		view {
			flex: 1;
			position: relative;
			img{
				position: absolute;
				width: 40rpx;
				height: 40rpx;
				left: 6rpx;
				top: 26rpx;
			}

			input {
				width: 80%;
				background-color: rgba(204, 204, 204, 0.336);
				padding: 10rpx 50rpx 10rpx 70rpx;
				font-size: 30rpx;
				border-radius: 40rpx;
				display: inline-block;
				margin-top: 14rpx;
			}
		}



		span {
			margin: 0 10rpx;
		}
	}
</style>
