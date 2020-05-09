<template>
	<view style="padding: 20rpx;" >
		<!-- 1-头像名字标签 -->
		<view class="flex-center-between">
			<view class="flex" style="flex-start;">
				<image  @click="open('my/user-home/user-home')" :src="article.userAvatar" class="rounded-circle" 
				style="height: 65rpx;width: 65rpx;margin-right: 10rpx;" lazy-load></image>
				<view style="font-size: 30rpx;font-weight: 600;">
					<view>{{article.userNickname}}</view>
					<view class="font-small text-light-muted">{{convertTime}}</view>
				</view>
			</view>
			<view v-if="article.channelName" class="text-light-muted">
				{{article.channelName}}
			</view>
		</view>
		<!-- 2- 标题简介,图片 -->
		<view style="display: flex;justify-content: space-between;" @click="toArticleDetail(article.id)">
			<view>
				<view style="font-size: 30rpx;">
						{{article.title}}
				</view>
				<view style="font-size: 25rpx;color:  #7d7d7d;">
					{{article.description}}
				</view>
			</view>
			<view v-if="article.image">
				<image :src="article.image" style="height: 70rpx;width: 70rpx;"></image>
			</view>
		</view>
		
		<!-- 3-点赞评论 -->
		<view class="flex-all-center">
			<view @click="postThump" style="flex: 1;"  class="flex-all-center animated" hover-class="bounceIn">
				<text v-if="localIsThumbup"   class="iconfont iconzan" style="color: #007BFF;margin-right: 20rpx;"></text>
				<text v-else  class="iconfont iconzan" style="margin-right: 20rpx;"></text>	
				<text>{{article.thumbupCount}}</text>
			</view>
			
			<view style="flex: 1;"  class="flex-all-center" >
				<text class="iconfont iconpinglun" style="margin-right: 20rpx;"></text>	
				<text>{{article.commentCount}}</text>
			</view>
			
			<view style="flex: 1;"  class="flex-all-center" >
				<text class="iconfont iconweibiaoti3" style="margin-right: 20rpx;"></text>	
				<text>{{article.visitsCount}}</text>
			</view>
			
			<!-- <view style="flex: 1;"  class="flex-all-center" >
				<text class="text-light-muted"></text>
			</view> -->
		</view>
	</view>

</template>

<script>
	import {formatTime} from "@/utils/Time.js"
	import http from "@/api/index.js"
	
	export default {
		props:{
			'article' :{
				type: Object,
				required:true
			}
		},
		data() {
			return {
				localIsThumbup: this.article.thumbup
			}
		},
		methods: {
			//点赞
			postThump(){
				this.$auth(()=>{
					this.localIsThumbup = !this.localIsThumbup;
					console.log('点赞沸点id'+this.article.id+"--先赞的值"+this.localIsThumbup);
					let con = {isLike:this.localIsThumbup,parentType:"ARTICLE",parentId:this.article.id}
					
					http.like.postLike(con).then(res => {
						if(res.code === "200"){
							uni.showToast({
								title:"点赞成功"
							})	
							this.article.thumbupCount += 1;
						}else{
							uni.showToast({
								title:"点赞失败"
							})
							this.localIsThumbup = !this.localIsThumbup;
						}
					}).catch(err => console.log(err));
				});
			},
			
			// 去文章详情页
			toArticleDetail(articleId){
				uni.navigateTo({
					url:"/pages/detail/articleDetail?id="+articleId
				})
			},
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				});
			}
		},
		//====================================================
		computed:{
			convertTime: function () {
				return formatTime(new Date(this.article.createdTime));
			}
		}
	}
	
</script>
	

<style>
</style>
