<template>
	<view style="background-color: #F2F1F7;">		
		<!--  1- 导航栏 -->
		<!-- <uni-nav-bar style="float: left;"  status-bar  color="#333333" background-color="#FFFFFF">
			<view slot="left">更多</view>
			<view  @click="toSearch" class="input-view" style="400rpx">
				<uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
				<input disabled confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词">
			</view>
		</uni-nav-bar> -->
				
		<!-- 2 选项卡 -->
		<!-- <view :style="{height:(scrollListHight+'px')}">		 -->
		<!-- <view  style="height: 20%;width: 760rpx;background-color: #FFFFFF;"> -->
		<view>
			<view class="flex">
				<view style="flex: 1;">
					
					<scroll-view :scroll-into-view="scrollIntoView"  scroll-x="true" scroll-with-animation 
								 style="width: 100%;white-space: nowrap;height: 100rpx;">
						<view   class="ml-4 "  v-for="(e,i) in channelsTopBar" :key="i" 
								style="display: inline-block;" :id="'tab'+i" 
								:class="tabIndex === i ? 'selectStyle' : ''" @click="changeTab(i)">
								{{e.name }}
						</view> 
					</scroll-view> 	
				</view>
				<view >
					更多
				</view>
			</view>		
		</view>
		
		<!-- </view> -->
			
			<!-- 3- 可向左右切换滑片 -->
			<!-- <view style="height: 96%;background-color: #FFFFFF;">
				<swiper  :current="tabIndex" :duration="150" @change="onchangeTab" style="height: 50%;"> 
					<swiper-item v-for="(e,i) in channelsTopBar" :key="i">
						<scroll-view  @refresherpulling="onPulling"	
									  scroll-y="true" style="height: 100%;"  @scrolltolower="loadMore(e)"> 
									
							<article-card v-for="(item,j) in articleList" :key="j" :article="item"></article-card>
						
							<divider></divider>
						
							<view class="flex-all-center py-3 font">
								<text class="font text-light-muted">{{loadMode}}</text>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view> -->
			
			
		<!-- </view> 	 -->
</view>
</template>

<script>
	import articleCard from "@/bkcomponents/articleCard"
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import NavBar from "@/bkcomponents/nav-bar"
	
	export default {
		data() {
			return {
				// 顶部选项卡列表
				scrollIntoView:"", //值应为某子元素id（id不能以数字开头设置哪个方向可滚动，则在哪个方向滚动到该元素
				tabIndex:0,
				channelsTopBar:[
					{id:"1",name:"推荐",isshow:true},
					{id:"2",name:"热榜",isshow:true},
					{id:"3",name:"后端",isshow:true},
					{id:"4",name:"android",isshow:true},
					{id:"5",name:"ios",isshow:true},
					{id:"6",name:"人工智能",isshow:true},
					{id:"7",name:"开发工具",isshow:true},
					{id:"8",name:"代码人生",isshow:true},
					{id:"9",name:"阅读",isshow:true}
				],
				
				active:1,
				scrollListHight:500,
				statusBarHeight:20,
				tabTopHeight:40,
				
				//
				loadMode:"加载中...",
				
				articleList:[
					{id:"1",user_avatar:"/static/img/boilinged.png",user_nickname:"发送到家",label:"后端",
					title:"java实现云计算大叔平花",image:"/static/logo.png",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:20,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:true},
					
					{id:"2",user_avatar:"/static/img/boilinged.png",user_nickname:"李白",label:"后端",
					title:"java实现云计算大叔平花",image:"",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:20,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:true},
					{id:"2",user_avatar:"/static/img/boilinged.png",user_nickname:"李白",label:"后端",
					title:"java实现云计算大叔平花",image:"",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:20,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:true},
					{id:"2",user_avatar:"/static/img/boilinged.png",user_nickname:"李白",label:"后端",
					title:"java实现云计算大叔平花",image:"",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:20,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:true}		
				]
			}
		},
		components:{
			articleCard,uniNavBar
		},

		onLoad() {			
			// uni.getSystemInfo({
			// 	success:res=>{
			// 		console.log("windowHeight: "+res.windowHeight);// px 可使用窗口高度
			// 		console.log("statusBarHeight: "+res.statusBarHeight);// px 状态栏的高度
			// 		console.log("navigationBarHeight: "+res.statusBarHeight);// px 导航栏的高度
					
										
			// 		this.statusBarHeight = (res.statusBarHeight+5)*2;
			// 		this.tabTopHeight = (this.statusBarHeight + 10)*2;
			// 		this.scrollListHight =  (res.windowHeight - (this.tabTopHeight/2) - 15)*2;
			// 		// console.log("scrollListHight: "+this.scrollListHight);// px
			// 	}
			// });
			
			//
			console.log("当前登陆状态:"+this.$store.state.loginStatus);
		},
		// onPullDownRefresh() {
		// 	console.log(document)
		// 	console.log('refresh');
		// 	setTimeout(function () {
		// 		uni.stopPullDownRefresh();
		// 	}, 1000);
		// },
		
		methods: {
			search(value){
				console.log(value);
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			// 切换tab标签栏时
			changeTab(index){
				this.loadMode = "加载中..";
				this.loadMore(index);
				
				if(index === this.tabIndex)
					return;
				
				this.tabIndex = index;	
				this.scrollIntoView = 'tab'+index;
				
				this.articleList = [	
					{id:"3",user_avatar:"/static/img/boilinged.png",user_nickname:"发送到家",label:"后端",
					title:"微服务",image:"/static/logo.png",
					description:"法律;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:29,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:true}];
			},
			// 显示划片时
			onchangeTab(e){
				console.log(e);
				this.changeTab(e.detail.current); // 同时切换选中的tab标签
			},
			
			//
			loadMore(channel){
				console.log("加载更多:"+channel);
				this.loadMode = "加载中..";
				
				setTimeout(()=>{
					this.loadMode = "没有更多";
					this.articleList.push({id:"8",user_avatar:"/static/img/boilinged.png",user_nickname:"傻逼",label:"后端",
					title:"微服务",image:"/static/logo.png",
					description:"法律;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:29,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:true});
				},2000)
			},
			//
			toSearch(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
	
	/* .boilingImage image{
		margin: 6rpx;
	}
	
	.selectStyle2 {
		font-size: 35rpx;
		font-weight: 500;
	}
	

	.selectStyle {
		color: #1a73e8;
		font-size: 35rpx;
		font-weight: 500;
		
		border-bottom-width: 4rpx;
		border-bottom-style: solid;
		border-bottom-color: #007AFF;
	}
	
	.nav-class{
		padding-top: 10rpx;
		line-height: 3;
	}
	 */

</style>
