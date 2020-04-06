<template>
	<view class="bg-color2">
		    <!-- 1 - 顶部背景 -->
			<view style="color: #ffff;font-weight: 500;height: 370rpx;background-color: #5E5E5E;">
				<view style="position: relative;top: 128rpx;padding: 28rpx;">
					<view class="flex align-center">
						 <image src="../../../static/img/boilinged.png" style="width: 60rpx;height: 60rpx;">
						 </image>
						 <view>李白的手机</view>
					</view>
					<view>
										 MySQL
					</view>
					<view class="flex justify-between">
						 <view>2篇</view>
						 <view style="border: 1px solid #FFFFFF;padding: 0rpx 20px;border-radius: 8rpx;">编辑</view>
					</view>
				</view>	 
			</view>
			
			<!-- 2 - 数据列表 -->
			<article-card-mini :article="e" v-for="e in articleList" :key="i"></article-card-mini>
			<!-- <view  class="flex align-center justify-between border-bottom" style="background-color: #FFFFFF;padding: 20rpx;">
				<view style="margin-right: 5rpx;">
					<text>关于微服务下xxx的</text>
					<view class="text-light-muted">411 人点赞  dff里    2020-02-10</view>
				</view>
				<view>
					<image src="../../../static/img/bg.jpg" style="width: 120rpx;height: 120rpx;"></image>
				</view>
			</view>
			 -->
			
	</view>
</template>

<script>
	import articleCardMini from "@/bkcomponents/articleCard-mini"
	
	export default {
		data() {
			return {
				articleList:[
					{
						id:"1",
						userNickname:"发送到家",
						title:"java实现云计算大叔平花",image:"/static/logo.png",
						thumbupCount:20,
						commentCount:20,
						visitsCount:"23",
						createTime:"2020-10-23",
					},
					{
						id:"2",
						user_nickname:"发送到家",
						title:"java实现云计算大叔平花",image:"/static/logo.png",
						thumbup_count:20,
						comment_count:20,
						visits_count:"23",
						createTime:"2020-10-23",
					}
					
				]	
			}
		},
		
		onLoad(args) {
			console.log("当前收藏夹id为:"+ args.id);
		},
		
		components:{
			articleCardMini
		}
		
		
	}
	
</script>

<style>
	img {
	    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
	    filter: grayscale(100%);
	}
</style>
