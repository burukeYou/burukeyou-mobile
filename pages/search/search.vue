<template>
	<view>	
			<!-- 搜索框 -->
			<view style="width: 750rpx;padding: 10rpx;" >
				<uni-search-bar placeholder="搜索文章/标签/用户/视频/话题" @confirm="search"></uni-search-bar>
			</view>
			
			<!-- 搜索历史-->
			<view style="margin-top: 20rpx;width: 100%;padding: 10rpx;">
				<view class="flex align-center justify-between" style="width: 90%;margin: auto;">
					<view>历史搜索</view>
					<view><uni-icons type="trash" size="19"></uni-icons></view>
				</view>
				<view id="history" style="padding: 12rpx;" class="flex align-center flex-wrap">
					<view>java</view>
					<view>微服务整合ouath2</view>
					<view>msql回表和索引覆盖</view>
					<view>springboot整合mybatis-plus</view>
					<view>并发实战秒杀</view>
				</view>
			</view>
			
			<!-- 选择搜索 -->
			<view>
				
			</view>
			
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			uniSearchBar
		}
	}
</script>

<style>
	#history > view {
		margin-left: 20rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
		background-color: #F2F2F2;
		color: #868686;
		padding: 4rpx 10rpx;
	}
</style>
