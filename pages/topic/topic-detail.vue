<template>
	<view style="background-color: #EEEEEE;" class="bg-color2">
		<app-tabs  v-if="isShowSticky"  @scroll="scroll" v-model="tabIndex" :tabs="tabs"></app-tabs>
		
		<!-- 1 - 顶部 -->
		<view class="flex justify-between align-end" style="padding: 27rpx;background-color: #FFFFFF;">
			<view class="flex">
				<view>
					<image :src="topic.avatar" style="height: 172rpx;width: 168rpx;border-radius: 32rpx;"></image>
				</view>
				<view class="flex-column justify-start" style="margin-left: 20rpx;">
					<view style="font-size: 44rpx;font-weight: 500;">{{topic.name}}</view>
					<view>
						<view style="font-weight: 400;"> {{topic.focusCount}}</view>
						<view class="text-light-muted">关注者</view>
					</view>
				</view>
			</view>
			<view style="margin-bottom: 40rpx;">
				<follow :color="'#3F90E8'" :parentId="topic.id" @reverseFollow="postOrCanelFollow" :isFollow="topic.isFollow">		
				</follow>
			</view>
		</view>	
		
		<!--  简介 -->
		<view style="padding: 27rpx;color: #736E6F;margin-bottom: 40rpx;background-color: #FFFFFF;">
			<text>{{topic.description}}</text>
		</view>
		
		
		
		<!-- 3 -热门最新 -->
		<bk-tabs :listHeight="height" :loadMoreStatus="loadMoreStatus"
				 :tabList="tabs"  @changeTab="changeTab" @loadMore="loadMore">
				<view slot="最热">
					<boiling-card v-for="(e,i) in boilingList" :key="i" :boiling="e"></boiling-card>
					
				</view>
				<view slot="最新">3</view>
		</bk-tabs>
		
	</view>
</template>

<script>
	import follow from "@/bkcomponents/follow.vue"
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	import BoilingCard from "@/bkcomponents/boilingCard"
	
	export default {
		data(){
			return{
				// 当前tab的下标
				tabIndex: 0,
				tabs: [	
					{id:"1",name:"最热",isshow:true},
					{id:"2",name:"最新",isshow:true}
				],
				height:"",
				loadMoreStatus:"more",
				
				//
				topic:{
						id: "2",
						description: "来分享你刚看过的商业科技 / 互联网 / 数码咨询吧\n发布要求: 活动介绍,公众号,volog形式\n 活动合作请联系: wx8889999",
						avatar: "/static/logo.png",
						name: "New 资讯",
						focusCount: 83,
						isFollow: false
				},
				
				isShowSticky: false ,// 是否悬浮
				navTop: null, // nav距离到顶部的距离 (如计算不准确,可直接写死某个值)
				boilingList:[
					{
							"id":"22",
						   "userId":"998",
							userNickname:"小芙蓉100",
							userAvatar:"/static/img/home.png",
							createdTime:"2020-10-22",
							content:"闪避不能看发就是看到好风景",
							contentPic:[
							],
							topicName:"提问回答",
							visitsCount:"20",
							thumbupCount:"10",
							commentCount: "30",
							url:"",
							isFollow:true,
							isThumbup:false	
					}
				],		
			}
		},
		onLoad(options) {
			console.log("当前话题id:  "+options.topidId);
			
			// 需要固定swiper的高度
			this.height = uni.getSystemInfoSync().windowHeight + 'px'
			console.log(":  "+this.height);
			
		},
		methods:{
			// 更新关注状态
			postOrCanelFollow(args) {
				console.log("关注沸点" + args.parentId + "---现在的值:" + args.isFollow)
			},
			//
			changeTab(e){
				this.loadMoreStatus = "more";
				console.log("切换:"+JSON.stringify(e));
			},
			loadMore(){		
				this.loadMoreStatus = "loading";
				setTimeout(()=>{
					console.log("加载数据完成");
					this.loadMoreStatus = "noMore";
				},3000);
			}
			
		
		},
		components: {
			follow,BkTabs,BoilingCard
		}
	}
</script>

<style>
</style>
