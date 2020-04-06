<template>
 <!-- 沸点 -->
 <view style="padding: 20rpx;">
	 <!-- 1-头像昵称关注 -->
	 <view class="flex-center-between">
		<view class="flex align-center" @click="toUserHome">
			<image class="rounded " :src="boiling.userAvatar" style="margin-right: 20rpx;height: 65rpx;width: 65rpx;" lazy-load>
			<view>
				<view style="font-size: 30rpx;line-height: 1.2">{{boiling.userNickname}}</view>
				<text style="color: #909399;font-size: 25rpx;">{{boiling.createdTime}}</text>
			</view>
		</view>
		<view>	
			<follow @reverseFollow="postOrCanelFollow" :isFollow="boiling.isFollow"></follow>
		</view> 
	 </view>
	 <!-- 2-内容 -->
	 <view style="font-size: 30rpx;" @click="toBoilingDetail">
			{{boiling.content}}
	 </view>
	 <!-- 3-图片 -->
	 <view @click="toBigImage" class="boilingImage" style="display: flex;flex-wrap:wrap;margin-top: 10rpx;">
		<image v-for="(e,i) in boiling.contentPic" :src="e" :key="i" 
		style="height: 220rpx;width: 220rpx;" lazy-load mode="widthFix">
	 </view>
	 <!-- 4-话题 -->
	 <view @click="toTopic(boiling.topicName)" v-if="boiling.topicName" class="bk-color" 
		style="display:inline;padding: 5rpx 15rpx;text-align: center; border-radius: 20rpx;font-size: 20rpx;border: 1px solid #1a73e8;">
		  {{boiling.topicName}}
	 </view>
	 <!-- 5-点赞评论分享 -->
	 <view class="flex align-center">
		<view @click="postThump" class="flex-all-center animated" hover-class="bounceIn" style="flex: 1;">
			<text v-if="localIsThumbup" class="iconfont iconzan" style="margin-right: 20rpx;color:#409eff;">
			</text>
			<text v-else class="iconfont iconzan"  style="margin-right: 20rpx;"></text>
			<text>{{boiling.thumbupCount}}</text>
		</view>
		<view @click="toBoilingDetail"  class="flex-all-center" style="flex: 1;">
			<text class="iconfont iconpinglun"  style="margin-right: 20rpx;"></text>
			<text>{{boiling.commentCount}}</text>
		</view>
		<view  class="flex-all-center" style="flex: 1;">
			<text class="iconfont iconfenxiang"  style="margin-right: 20rpx;"></text>
			<text>分享</text>
		</view>
	 </view>
 </view>
		
</template>

<script>
	import follow from "@/bkcomponents/follow.vue"
	export default {
		props:{
			'boiling' :{
				type: Object,
				required:true
			}
			
			
		},
		data() {
			return {
				localIsThumbup: this.boiling.isThumbup
			}
		},
		components:{
			follow
		},

		onLoad() {

		},
		methods: {
			// 去用户主页
			toUserHome(){
				 console.log("去用户主页");
			},
			// 去沸点详情页 / 
			toBoilingDetail(){
				 console.log("去沸点详情页");
			},
			// 查看图片
			toBigImage() {
				 console.log(" 查看图片");
			},
			//点赞
			postThump(){
				this.localIsThumbup = !this.localIsThumbup;
				console.log('点赞沸点id'+this.boiling.id+"--先赞的值"+this.localIsThumbup);
			},
			// 去话题页
			toTopic(topicName){
				console.log("打开话题:"+topicName);
			},
			// 跟新关注状态
			postOrCanelFollow(value){
				console.log("关注用户"+this.boiling.userId+"---现在的值:"+value)
			}
		},
		mounted() {
		}
	}
</script>

<style>
	//
	.boilingImage image{
		margin: 6rpx;
	}
	
	
	
</style>
