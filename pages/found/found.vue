<template>
	<view style="background-color: #F2F1F7;">
		<!-- 1- 导航栏 -->
		<nav-bar></nav-bar>
		
		<!-- 2 -新闻轮播图 -->
		<header-swiper></header-swiper>
		
		
		<!-- 3 多功能卡片-->
		<view id="moreCard" class="flex align-center justify-aroud bg-white" 
					style="margin-top: 46rpx;padding: 5rpx 0rpx;">
			<view class="flex-column">
				<view style="font-size: 60rpx;color: #7DC543;text-align: center;" class="iconfont iconwenzhang-copy"></view>
				<view>文章榜</view>
			</view>
			<view class="flex-column">
				<view style="font-size: 60rpx;color: #FDDE35;text-align: center;" class="iconfont iconpengyou"></view>
				<view>作者榜</view>
			</view>
			<view class="flex-column" @click="open('topic/topic')">
				<view style="font-size: 60rpx;color: #FD8B36;text-align: center;" class="iconfont iconhuati"></view>
				<view>话题</view>
			</view>
			<view  @click="open('video/video')" class="flex-column">
				<view style="font-size: 60rpx;color: #48B984;text-align: center;" class="iconfont iconshipin"></view>
				<view>小视频</view>
			</view>
		</view>
		
		<!-- 4- -->
		<view class="flex justify-between   border-bottom bg-white" 
					style="margin-top: 20rpx;padding: 14rpx 30rpx;">
			<view class="flex align-center">
				<view class="iconfont iconremen" style="color: #FB3B23;"></view>
				<view style="margin-left: 10rpx;">热门推荐</view>
			</view>
			<view class="flex align-center">
				<view class="iconfont iconshezhi" style="color: #7B8085;"></view>
				<view style="margin-left: 10rpx;">定制</view>
			</view>
		</view>
		
		
		<view style="margin-top: 20rpx;">
			<scroll-view scroll-y="true" style="height: 1000rpx" @scrolltolower="loadMore"	>
				<view v-for="e in 100">{{e}}</view>
			</scroll-view>
		</view>
		
		
	</view>
</template>

<script>
	import NavBar from "@/bkcomponents/nav-bar.vue"
	import HeaderSwiper from "@/pages/found/header-swiper.vue"
	import articleCard from "@/bkcomponents/articleCard"
	
	export default {
		components: {
			HeaderSwiper,NavBar,articleCard
		},
		data() {
			return {
				scrollH:500
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success() {
					//this.scrollH = uni.windowHeight - 
				}
			});
		},
		methods: {
			// 加载更多
			loadMore(){
				console.log("加载更多:");
			},
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				});
			},
		}
	}
</script>

<style>
	#moreCard >view > view:nth-of-type(0) {
		font-size: 200rpx;
	}
	
</style>