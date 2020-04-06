<template>
	<view class="bg-color">
		<!-- 1- 顶部 -->
		<view style="height: 500rpx;background-color: #ffff;">
			<!-- 背景 -->
			<view  style="height: 70%;background-color:#5E5E5E;">	
				<!-- 头像/名字/简介/编辑  -->
				<view class="flex-all-center" style="position: relative;top: 112rpx;left: 34rpx;width: 86%;">
					<image src="../../../static/img/my.png"
						style="height: 100rpx;width:100rpx;background-color: #FFFFFF;" 
						class="rounded-circle">
					</image>
					
					<view style="color:#FFFFFF;flex: 1;margin-left: 10rpx;">
						<view style="font-size: 40rpx;font-weight: 500;">李白的手机</view>
						<view style="color: #D8E7FB;font-size: 30rpx;">便途中.....</view>	
					</view>	
					
					<view style="border: 1px solid #FFFFFF;color: #FFFFFF;
								font-weight: 500;padding: 0rpx 20rpx;border-radius: 7rpx;">
						编辑
					</view>
				</view>		
			</view>
			<!-- 数据卡片 -->
			<view class="shadow3 flex align-center justify-aroud" style="height: 30%;width: 90%;background-color: #FFFFFF;
					margin: auto;position: relative;top: -70rpx;border-radius: 20rpx;
					">
					
					<view class="flex-column" @click="open('focus/focus')">
						<view style="color: #b7b7b7;">关注</view>
						<view style="font-size: 32rpx;font-weight: 500;text-align: center;">10</view>
					</view>
					<view style="border: 2rpx solid #F7F7F7;height: 64%;"></view>
					<view class="flex-column" @click="open('focus/fan')">
						<view style="color: #b7b7b7;">粉丝</view>
						<view style="font-size: 32rpx;font-weight: 500;text-align: center;">288</view>
					</view>
						<view style="border: 2rpx solid #F7F7F7;height: 64%;"></view>
					<view class="flex-column">
						<view style="color: #b7b7b7;">访问量</view>
						<view style="font-size: 32rpx;font-weight: 500;text-align: center;">1788</view>
					</view>	
					<view style="border: 2rpx solid #F7F7F7;height: 64%;"></view>
					<view class="flex-column">
						<view style="color: #b7b7b7;">点赞量</view>
						<view style="font-size: 32rpx;font-weight: 500;text-align: center;">10</view>
					</view>					
			</view>
		</view>
		
		
		<!-- 2- 选项卡  #A9A5A0 -->
		<view style="padding: 2rpx;">
			<bk-tabs :listHeight="listHeight" :tabList="tabList" :loadMoreStatus="loadMoreStatus" @changeTab="changeTab" @loadMore="loadMore">
				 <view slot="专栏">
					 <uni-list-item @click="open('my/user-home/column-detail?columnId=45')" title="运维部署" style="border-bottom:1px solid #B7B8C2;" rightText="2篇"></uni-list-item>
					 <uni-list-item @click="open('my/user-home/column-detail?columnId=4')" title="微服务" rightText="10篇"></uni-list-item>		
				 </view>
				 <view slot="说说">
					 3
				 </view>
				 <view slot="收藏">
					 <favorites></favorites>
				 </view>
				 <view slot="其他"> 
					4
				 </view>
			</bk-tabs>
		</view>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	import favorites from "./favorites.vue"
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	
	export default {
		data() {
			return {
				listHeight: "",
				loadMoreStatus: "more",
				tabList:[
					{id:"1",name:"专栏",isshow:true},
					{id:"2",name:"说说",isshow:true},
					{id:"3",name:"收藏",isshow:true},
					{id:"4",name:"其他",isshow:true},
				],
			}
		},
		onLoad() {
			this.intitHeight();
		},
		components: {
			uniListItem,favorites,BkTabs
		},
		methods: {
			//
			intitHeight(){
				this.listHeight = "600rpx";
			},
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				})
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
		}
	}
</script>

<style>
	.selectStyle {
		color: #1a73e8;
		font-size: 35rpx;
		font-weight: 500;
		
		border-bottom-width: 4rpx;
		border-bottom-style: solid;
		border-bottom-color: #007AFF;
	}
	
	// 解决view默认line-height问题
	van-tabs view {
		line-height: 3;
	}
	
	uni-list-item view {
		line-height: 1.8;
	}
	
	.uni-list-item__container {
		padding: 0rpx 20rpx;
	}

</style>
