<template>
	<view>
		 <view class="flex align-center border-bottom" style="padding: 20rpx;">
			 <view>
				 <image src="../../static/img/videoed.png" style="height: 80rpx;width: 80rpx;">
				 </image>
			 </view>
			 <view style="margin-left: 20rpx;flex: 1;" class="">
				 <view>算法</view>
				 <view class="text-light-muted">288877 人 关注    15552 篇文章</view>
			 </view>
			 <view>
				<follow :parentId="3" @reverseFollow="postOrCanelFollow" :isFollow="true"></follow>
			 </view>
		 </view>
	</view>
</template>

<script>
	import follow from "@/bkcomponents/follow.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 跟新关注状态
			postOrCanelFollow(args) {
				console.log("关注沸点" + args.parentId + "---现在的值:" + args.isFollow)
			},
		},
		components: {
			follow
		},
	}
</script>

<style>

</style>
