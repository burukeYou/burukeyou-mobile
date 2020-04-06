<template>
	<view style="padding: 20rpx;">
		<!-- 1-头像昵称关注 -->
		<view class="flex-center-between">
				<view class="flex align-center" @click="toUserHome">
					<image class="rounded " :src="article.user_avatar" style="margin-right: 20rpx;height: 65rpx;width: 65rpx;" lazy-load>
					<view>
						<view style="font-size: 30rpx;line-height: 1.2">{{article.user_nickname}}</view>
						<text style="color: #909399;font-size: 25rpx;">{{article.createTime}}</text>
					</view>
				</view>
				<view>	
					<follow @reverseFollow="postOrCanelFollow" :isFollow="article.isFollow"></follow>
				</view> 
		</view>
		
		<!-- 2-标题 -->
		<view style="color: #0E151D;font-size: 42rpx;font-weight: 700;">
			{{article.title}}
		</view>
		
		<!-- 3-图片 -->
		<view>
			<image src="../../static/img/content.jpg" @click="preview('/static/img/content.jpg')" class="w-100"></image>
		</view>
		
		<!-- 4 -内容 -->
		<view>
			<rich-text v-html="article.content"></rich-text>
		</view>
		
		<!-- 5 -标签 -->
		<view class="flex">
			<view class="border">java</view>
			<view  class="border">后端</view>
		</view>
		
		
		<!-- ˜6 - 点赞量 ,访问量 -->
		<view>
			<text>赞  20</text>
			<text>阅读  130</text>
			<text>评论  2</text>
		</view>
		
		<divider></divider>
		
		<!-- 7- 评论 -->
		<view>
			<view class="" style="font-size: 30rpx;font-weight: 400;">评论列表: 309</view>
			
			<view class="uni-comment-list">
			    <view class="uni-comment-face">
			        <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			    </view>
			    <view class="uni-comment-body">
			        <view class="uni-comment-top">
			            <text>小猫咪</text>
			        </view>
			        <view class="uni-comment-content">支持国产，支持DCloud!</view>
			        <view class="uni-comment-date">
			            <view>2天前</view>
			            <view class="uni-comment-replay-btn">5回复</view>
			        </view>
			    </view>
			</view>
			 <view class="uni-comment-list-replay">
			     <view class="uni-comment-face">
			         <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			     </view>
			     <view class="uni-comment-body">
			         <view class="uni-comment-top">
			             <text>小猫咪</text>
			         </view>
			         <view class="uni-comment-content">支持国产，支持DCloud!</view>
			         <view class="uni-comment-date">
			             <view>2天前</view>
			             <view class="uni-comment-replay-btn">5回复</view>
			         </view>
			     </view>
			 </view> 
			 
			
			
		</view>
		
	</view>
</template>

<script>
	
	import follow from "@/bkcomponents/follow.vue"
	export default {
		data() {
			return {
				article:{
					id:"1",
					"user_id":"101",
					user_avatar:"/static/img/boilinged.png",
					user_nickname:"发送到家",
					label:"后端",
					title:"java实现云计算大叔平花",image:"/static/logo.png",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					content:"<h1>-<em>- coding: utf-8 -</em>-</h1><p>from PyQt5 import QtCore, QtGui, QtWidgets</p>",
					thumbup_count:20,
					comment_count:20,
					visits_count:"23",
					createTime:"2020-10-23",isThumbup:true,
					isFollow:true
				},
					
			}
		},
		onLoad: function (option) {
		     console.log(option.id); //打印出上个页面传递的参数。
			 
			 
		},
		components:{
			follow
		},
		methods: {
			// 跟新关注状态
			postOrCanelFollow(value){
				console.log("关注用户"+this.article.user_id+"---现在的值:"+value)
			},
			// 预览图片
			preview(src){	
				console.log(src)
				uni.previewImage({
					urls: [src,src]
				});
			},
			// 去用户主页
			toUserHome(){
				 console.log("去用户主页");
			},
		},
		
	}
</script>

<style>

</style>
