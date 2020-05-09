<template>
	<view class="bg-color" style="height: 1500rpx;">
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
						<!-- <view style="font-size: 32rpx;font-weight: 500;text-align: center;">10</view> -->
					</view>
					<view style="border: 2rpx solid #F7F7F7;height: 64%;"></view>
					<view class="flex-column" @click="open('focus/fan')">
						<view style="color: #b7b7b7;">粉丝</view>
						<!-- <view style="font-size: 32rpx;font-weight: 500;text-align: center;">288</view> -->
					</view>
						<view style="border: 2rpx solid #F7F7F7;height: 64%;"></view>
					<view class="flex-column">
						<view style="color: #b7b7b7;">访问量</view>
						<!-- <view style="font-size: 32rpx;font-weight: 500;text-align: center;">1788</view> -->
					</view>	
					<view style="border: 2rpx solid #F7F7F7;height: 64%;"></view>
					<view class="flex-column">
						<view style="color: #b7b7b7;">点赞量</view>
						<!-- <view style="font-size: 32rpx;font-weight: 500;text-align: center;">10</view> -->
					</view>					
			</view>
		</view>
		
		
		<!-- 2- 选项卡  #A9A5A0 -->
		<view style="padding: 2rpx;">
			<bk-tabs :tabList="tabList" :loadMoreStatus="loadMoreStatus" @changeTab="changeTab" @loadMore="loadMore">
				 <view slot="0">
					 <block v-for="(e,i) in columnDataList" :key="i">
						 <uni-list-item @click="open('my/user-home/column-detail?columnId='+e.id)" :title="e.name"
						 								style="border-bottom:1px solid #B7B8C2;" :rightText="e.count+'篇'">	 
						 </uni-list-item>
					 </block>
				 </view>
				 <view slot="1">
					<block v-for="(item,index) in boilingDataList">
						  <boiling-card :key="index" :boiling="item"></boiling-card>	
					 </block>
				 </view>
				 <view slot="2" class="p-5"> 
					  待实现.......
				 </view>
			</bk-tabs>
		</view>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	import favorites from "./favorites.vue"
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	import BoilingCard from "@/bkcomponents/boilingCard"
	
	
	export default {
		data() {
			return {
				listHeight: "",
				loadMoreStatus: "more",
				tabList:[
					{id:"1",name:"专栏",isshow:true},
					{id:"2",name:"说说",isshow:true},
					{id:"3",name:"其他",isshow:true},
				],
				//
				currentTab:"专栏",
				
				// 专栏
				columnArgs:{
					page:1,
					size:10,
					userId:""
				},
				columnDataList:[],
				
				// about boiling
				boilingArgs:{
					page:1,
					size:10,
					userId:""
				},
				boilingDataList:[]
				
			}
		},
		onLoad(options) {
			this.intitHeight();
			this.intitUserInfo(options.userId);
			this.boilingArgs.userId = options.userId;
			this.columnArgs.userId = options.userId;
			
		},
		components: {
			uniListItem,favorites,BkTabs,BoilingCard
		},
		methods: {
			//
			intitHeight(){
				this.listHeight = "600rpx";
			},
			intitUserInfo(userId){
				console.log("用户ID为：{}",userId);
				// 1 - 查找用户信息
				this.getUserDetail(userId);
				// 2- 
				this.columnArgs.userId = userId;
				this.searchColumn();
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
				this.currentTab = e.name;
				if(this.currentTab === "专栏"){
					//this.columnArgs.page = 1;
					this.searchColumn();	
				}else if(this.currentTab === "说说"){
					//this.boilingArgs.page = 1
					this.searchBoliling();
				}
			},
			loadMore(){		
				console.log("sahdjk");
				if(this.loadMoreStatus === "noMore")
					return;
						
				console.log(this.currentTab);		
				if(this.currentTab === "专栏"){
					this.columnArgs.page += 1
					this.searchColumn();	
				}else if(this.currentTab === "说说"){
					this.boilingArgs.page += 1
					this.searchBoliling();
				}			
			},
			getUserDetail(userId){
				
			},
			//=========================Column===================================
			searchColumn(){
				this.loadMoreStatus = "loading";
				this.$http.column.getPage(this.columnArgs).then(res => {
					if(res.data.records.length <= 0){
							console.log("没了");
							this.loadMoreStatus = "noMore";
							return;
					}
					res.data.records.forEach(e => this.columnDataList.push(e));
					//this.columnDataList = res.data.records;
					this.loadMoreStatus = "more";
				}).catch(err => console.log(err));
			},
			//=========================boiling===================================
			searchBoliling(){
				this.loadMoreStatus = "loading";
				this.$http.boiling.getPageCondition(this.boilingArgs).then(res => {
					if(res.data.records.length <= 0){
							this.loadMoreStatus = "noMore";
							return;
					}
					res.data.records.forEach(e => this.boilingDataList.push(e));
					//this.boilingDataList = res.data.records
					this.loadMoreStatus = "more";
				}).catch(err => console.log(err));
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
