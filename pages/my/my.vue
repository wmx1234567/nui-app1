<template>
	<view>
		<view class="header"></view>
		<view class="content">
			<view class="top">
				<view class="left">
					<img src="../../static/logo.png">
					<h3>请登录</h3>
				</view>
				<view class="right"><img src="../../static/右箭头.png"></view>
			</view>
			<view class="two">
				<ul>
					<li><span><img src="../../static/我的订单.png">我的订单</span><img src="../../static/右箭头.png"> </li>
					<li><span><img src="../../static/24gf-lock2.png">我的余额</span><img src="../../static/右箭头.png"> </li>
					<li><span><img src="../../static/奖牌.png">我的学习</span><img src="../../static/右箭头.png"> </li>
				</ul>
			</view>
			<view class="two">
				<ul>
					<li><span><img src="../../static/设置.png">设置</span><img src="../../static/右箭头.png"> </li>
					<li><span><img src="../../static/意见反馈.png">意见反馈</span><img src="../../static/右箭头.png"> </li>
				</ul>
			</view>
			<view class="two two1">
				<ul>
					<li><span><img src="../../static/关于我们.png">我的订单</span><img src="../../static/右箭头.png"> </li>
				</ul>
			</view>
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
	.two1{
		border: 0 !important;
	}
	.two{
		width: 100%;
		border-bottom: 20rpx solid rgba(204, 204, 204, 0.3);
		ul{
			li{
				display: flex;
				justify-content: space-between;
				border-bottom: rgba(204, 204, 204, .6) 2rpx solid;
				padding: 20rpx 40rpx;
				img:nth-child(1){
					width: 48rpx;
					height: 48rpx;
					vertical-align: middle;
					margin-right: 30rpx;
				}
				img:nth-child(2){
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
				}
			}
			
		}
	}
.header{
	width: 100%;
	height: 150rpx;
	background-color: #345dc2;
}
.content{
	width: 100%;
	border-radius: 30rpx 30rpx 0 0;
	margin-top: -50rpx;
	background-color: #fff;
	.top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx 30rpx;
		border-bottom: 20rpx solid rgba(204, 204, 204, 0.3);
		.left{
			width: 45%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			img{
				width: 150rpx;
				height: 150rpx;
				vertical-align: middle;
				border-radius: 50%;
			}
		}
		.right{
			width: 10%;
			img{
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
}
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
</style>
