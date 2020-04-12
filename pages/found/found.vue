<template>
	<view style="background-color: #F2F1F7;">
		<!-- 1- 导航栏 -->
		<nav-bar></nav-bar>
		
		<!-- 2 -新闻轮播图 -->
		<header-swiper></header-swiper>
		
		
		<!-- 3 多功能卡片-->
		<view id="moreCard" class="flex align-center justify-aroud bg-white" 
					style="margin-top: 46rpx;padding: 5rpx 0rpx;">
			<view class="flex-column">
				<view style="font-size: 60rpx;color: #7DC543;text-align: center;" class="iconfont iconwenzhang-copy"></view>
				<view>文章榜</view>
			</view>
			<view class="flex-column">
				<view style="font-size: 60rpx;color: #FDDE35;text-align: center;" class="iconfont iconpengyou"></view>
				<view>作者榜</view>
			</view>
			<view class="flex-column" @click="open('topic/topic')">
				<view style="font-size: 60rpx;color: #FD8B36;text-align: center;" class="iconfont iconhuati"></view>
				<view>话题</view>
			</view>
			<view  @click="open('video/video')" class="flex-column">
				<view style="font-size: 60rpx;color: #48B984;text-align: center;" class="iconfont iconshipin"></view>
				<view>小视频</view>
			</view>
		</view>
		
		<!-- 4- -->
		<view class="flex justify-between   border-bottom bg-white" 
					style="margin-top: 20rpx;padding: 14rpx 30rpx;">
			<view class="flex align-center">
				<view class="iconfont iconremen" style="color: #FB3B23;"></view>
				<view style="margin-left: 10rpx;">热门推荐</view>
			</view>
			<view class="flex align-center">
				<view class="iconfont iconshezhi" style="color: #7B8085;"></view>
				<view style="margin-left: 10rpx;">定制</view>
			</view>
		</view>
		
		
		<view style="margin-top: 20rpx;">
			<bk-list :loadMoreStatus="loadMoreStatus" @loadMore="loadMore">
				<block v-for="(e,i) in articleList">
					<article-card-mini :article="e" :key="i"></article-card-mini>
				</block>
			</bk-list>
		</view>
		
		
	</view>
</template>

<script>
	import NavBar from "@/bkcomponents/nav-bar.vue"
	import HeaderSwiper from "@/pages/found/header-swiper.vue"
	import articleCard from "@/bkcomponents/articleCard"
	import articleCardMini from "@/bkcomponents/articleCard-mini"
	import BkList from "@/bkcomponents/bk-list.vue"
	
	export default {
		components: {
			HeaderSwiper,NavBar,articleCard,BkList,articleCardMini
		},
		data() {
			return {
				scrollH:500,
				loadMoreStatus:"more",
				articleList:[
					{id:"1",user_avatar:"/static/img/boilinged.png",user_nickname:"发送到家",label:"后端",
					title:"java实现云计算大叔平花",image:"/static/logo.png",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:20,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:false},
					
					{id:"2",user_avatar:"/static/img/boilinged.png",user_nickname:"李白",label:"后端",
					title:"java实现云计算大叔平花",image:"",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:20,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:true},
					{id:"2",user_avatar:"/static/img/boilinged.png",user_nickname:"李白",label:"后端",
					title:"java实现云计算大叔平花",image:"",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:20,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:false},
					{id:"2",user_avatar:"/static/img/boilinged.png",user_nickname:"李白",label:"后端",
					title:"java实现云计算大叔平花",image:"",
					description:"法律上的纠纷卡拉斯京费拉达斯福利看到撒了;副 发考试的纠纷剋拉基舍夫的快乐;撒",
					thumbup_count:20,comment_count:20,visits_count:"23",
					createTime:"2020-10-23",isThumbup:true}		
				]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success() {
					//this.scrollH = uni.windowHeight - 
				}
			});
		},
		methods: {
			// 加载更多
			loadMore(){
				console.log("加载更多:");
				this.loadMoreStatus = loading;
			},
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				});
			},
		}
	}
</script>

<style>
	#moreCard >view > view:nth-of-type(0) {
		font-size: 200rpx;
	}
	
</style>