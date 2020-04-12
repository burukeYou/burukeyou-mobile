<template>
	<view style="background-color: #F2F1F7;">
		<!-- 1 -导航栏 -->
		<uni-nav-bar  status-bar fixed  color="#333333" background-color="#FFFFFF">
			<view slot="left">更多</view>
			<view @click="toSearch">
				<uni-search-bar length="450rpx" placeholder="请输入搜索" :cancelButton="none"></uni-search-bar>
			</view>
		</uni-nav-bar>
		
		<!-- 2 - 标签栏 
		-->
		<view style="padding: 2rpx;">
			<bk-tabs :tabList="tabList" :loadMoreStatus="loadMoreStatus" @changeTab="changeTab" @loadMore="loadMore">
				 <view slot="推荐" >
					 <article-card v-for="(item,j) in articleList" :key="j" :article="item"></article-card>	 
				 </view>
				 <view slot="后端"><view v-for="i in 100" :key="i">{{i}}</view></view>
				 <view slot="热榜"><view v-for="i in 100" :key="i">{{i}}</view></view>
				 <view slot="right" style="margin-left: 10rpx;" class="iconfont icongengduo1"></view>
			</bk-tabs>
		</view>
	
		
			
		
		
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	import articleCard from "@/bkcomponents/articleCard"
	
	
	export default {
		components:{
			uniNavBar,uniSearchBar,BkTabs,articleCard
		},
		data(){
			return{
				loadMoreStatus: "more",
				tabList:[
					{id:"1",name:"推荐",isshow:true},
					{id:"2",name:"热榜",isshow:true},
					{id:"3",name:"后端",isshow:true},
					{id:"4",name:"android",isshow:true},
					{id:"5",name:"ios",isshow:true},
					{id:"6",name:"人工智能",isshow:true},
					{id:"7",name:"开发工具",isshow:true},
					{id:"8",name:"代码人生",isshow:true},
					{id:"9",name:"阅读",isshow:false}
				],
				
			
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
				this.getData();
		},
		methods:{
			//
			toSearch(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			// 4- get data
			getData(){
				for(let e of this.tabList){
					
				}
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
</style>
