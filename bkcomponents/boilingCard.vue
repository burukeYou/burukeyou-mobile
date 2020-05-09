<template>
 <!-- 沸点 -->
 <view style="padding: 20rpx;">
	 <!-- 1-头像昵称关注 -->
	 <view class="flex-center-between">
		<view class="flex align-start" @click="toUserHome">
			<image  :src="boiling.userAvatar" style="margin-right: 20rpx;height: 100rpx;width: 100rpx;border-radius:100%" lazy-load>
			<view>
				<view style="font-size: 30rpx;line-height: 1.2">{{boiling.userNickname}}</view>
				<text style="color: #909399;font-size: 25rpx;">{{boiling.createdTime}}</text>
			</view>
		</view>
		<view>	
			<follow @reverseFollow="postOrCanelFollow" :parentId="boiling.userId" :isFollow="boiling.follow"></follow>
		</view> 
	 </view>
	 <!-- 2-内容 -->
	 <view style="font-size: 30rpx;" @click="toBoilingDetail">
			{{boiling.content}}
	 </view>
	 <!-- 3-图片 -->
	 <view @click="toBigImage" class="boilingImage" style="display: flex;flex-wrap:wrap;margin-top: 10rpx;">
		<image  v-for="(e,i) in boiling.contentPic" :src="e" :key="i" 
		style="height: 220rpx;width: 220rpx;" lazy-load mode="widthFix">
	 </view>
	 <!-- 4-话题 -->
	 <view @click="toTopic(boiling.topicId)" v-if="boiling.topicName" class="bk-color" 
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
		<view   class="flex-all-center" style="flex: 1;">
			<text class="iconfont iconweibiaoti3"  style="margin-right: 20rpx;"></text>
			<text>{{boiling.visitsCount}}</text>
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
	import http from "@/api/index.js"
	
	export default {
		props:{
			'boiling' :{
				type: Object,
				required:true
			}
			
			
		},
		data() {
			return {
				localIsThumbup: this.boiling.thumbup
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
				 let _this = this;
				 // 预览图片
				 uni.previewImage({
					 urls: _this.boiling.contentPic,
					 longPressActions: {
						 itemList: ['发送给朋友', '保存图片', '收藏'],
						 success: function(data) {
							 console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						 },
						 fail: function(err) {
							 console.log(err.errMsg);
						 }
					 }
				 });
			},
			//点赞
			postThump(){
				this.localIsThumbup = !this.localIsThumbup;
				console.log('点赞沸点id'+this.boiling.id+"--先赞的值"+this.localIsThumbup);
				
				this.$auth(()=>{
					let con = {isLike:this.localIsThumbup,parentType:"BOILING",parentId:this.boiling.id}
					http.like.postLike(con).then(res => {
						if(res.code === "200"){
							uni.showToast({
								title:"点赞成功"
							})	
							this.boiling.thumbupCount += 1;
						}else{
							uni.showToast({
								title:"点赞失败"
							})
							this.localIsThumbup = !this.localIsThumbup;
						}
					}).catch(err => console.log(err));
				});
				
			},
			// 去话题页
			toTopic(id){
				console.log("打开话题:"+id);
				uni.navigateTo({
					url:"/pages/topic/topic-detail?topidId="+id
				})
			},
			// 跟新关注状态
			postOrCanelFollow(value){
				console.log("关注用户"+this.boiling.userId+"---现在的值:"+JSON.stringify(value))
				
				if(value.isFollow){
					let args = {targetId:this.boiling.userId,targetType:"USER"}
					this.$http.focus.postFocus(args).then(res => {
						
					}).catch(err => console.log(err));
				}else{
					let args = {type:"USER",id:this.boiling.userId}
					this.$http.focus.cancelFocus(args).then(res => {
						
					}).catch(err => console.log(err));
				}		
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
