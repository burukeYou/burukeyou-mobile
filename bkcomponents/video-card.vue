<template>
	<view @click="toVideoDetail" class="shadow5" style="background-color: #FFFFFF;width: 330rpx;height: 350rpx;border-radius: 10rpx;">
		<view style="height: 60%;position: relative;">	
			<image :src="video.image" style="width: 100%;height: 100%;"></image>
			<view  class="bimg-lg-m flex align-center" style="color: #FFFFFF;width: 100%;position: absolute;bottom: 5rpx;padding-top: 10rpx;">
				<view>{{video.visitsCount}}</view>
				<view style="margin-left: 10rpx;flex: 1;">{{video.thumbupCount}}</view>
				<view>{{video.timeLength}}</view>
			</view>	
		</view>
		<view class="text-ellipsis font-fam" style="padding: 5rpx;height: 22%;">
			{{video.description}}
		</view>
		<view class="text-light-muted flex justify-between" style="height: 28%;">
			 <view>{{video.categoryName}}</view>
			 <view>{{video.userNickname}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			video:{
				type:Object,
				require:true
			}
		},
		methods:{
			toVideoDetail(){
				uni.navigateTo({
					url:"/pages/video/video-detail?id="+this.video.id
				})
			}
		}
	}
</script>

<style>
	image {
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		//opacity: 0.5;
		
	}	
</style>
