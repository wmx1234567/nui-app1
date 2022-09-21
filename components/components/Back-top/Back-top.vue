<template>
	<view>
		<img class="top" @click="backtop" v-show="scrollTop>=800" src="https://www.mescroll.com/img/mescroll-totop.png">
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from 'vue'
	import {
		onPageScroll,onPullDownRefresh
	} from '@dcloudio/uni-app'
	export default {
		setup(props, tcx) {
			const data = reactive({
				scrollTop:0,
			})
			const backtop = () => {
				let a = document.documentElement.scrollTop;
				let timer = setInterval(() => {
					if (a > 0) {
						a -= 100;
						window.scrollTo(0, a);
					} else {
						clearInterval(timer);
					}
				}, 10);
			}
			onPageScroll((e) => {
				data.scrollTop = e.scrollTop
			})
			return {
				...toRefs(data),
				backtop
			}
		}
	}
</script>

<style>
	.top {
		position: fixed;
		right: 20rpx;
		top: 80%;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
</style>
