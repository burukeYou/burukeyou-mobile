<template>
	<view class="flex align-center border-bottom" style="padding: 20rpx;background-color: #FFFFFF;">
			 <view>
				 <image :src="user.avatar" style="height: 80rpx;width: 80rpx;">
				 </image>
			 </view>
			 <view style="margin-left: 20rpx;flex: 1;" class="">
				 <view>{{user.nickname}}</view>
				 <view class="text-light-muted">{{user.description}}</view>
			 </view>
			 <view>
				<follow :parentId="user.id" @reverseFollow="postOrCanelFollow" :isFollow="true"></follow>
			 </view>
	</view>
</template>

<script>
	import follow from "@/bkcomponents/follow.vue"
	export default {
		props:{
			'user':{
				type: Object,
				required:true
			}
		},
		methods:{
			// 跟新关注状态
			postOrCanelFollow(args) {
				console.log("关注沸点" + args.parentId + "---现在的值:" + args.isFollow)
			},	
		},
		components: {
			follow
		}
		
	}
</script>

<style>
</style>
