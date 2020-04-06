<template>
	<view style="border: 1px solid black;height:400rpx ;">
		<!-- <uni-swiper-dot :info="info" :current="current" mode="nav" dots-styles="newStyles" field="content"> -->
			<swiper indicator-color="#ffff"	 autoplay interval="2000" class="swiper-box" style="height: 400rpx;" @change="change">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view  class="flex-column justify-center align-center" style="color: #fff;">
						<image  style="width: 750rpx;height:300rpx ;" :src="item.url" mode="aspectFill" />
					</view>
				</swiper-item>
			</swiper>
		<!-- </uni-swiper-dot> -->
		
		
		
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				current: 0,
			}
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current
			}
		}
	}
</script>

<style>
	.newStyles {
		backgroundColor: 'rgba(0, 0, 0, .3)';
		border: '1px rgba(0, 0, 0, .3) solid';
		color: '#fff';
		selectedBackgroundColor: 'rgba(0, 0, 0, .9)';
		selectedBorder: '1px rgba(0, 0, 0, .9) solid';
	}
	
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* .image {
		width: 750rpx;
	} */

	
</style>