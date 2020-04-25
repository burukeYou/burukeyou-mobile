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
				 <view :slot="i" v-for="(e,i) in tabList" :key="i">
					 <article-card v-for="(item,j) in articleList" :key="j" :article="item"></article-card>	 
				 </view>
				
				
				 <view slot="right" style="margin-left: 10rpx;" class="iconfont icongengduo1"></view>
			</bk-tabs>
		</view>
	
		
		<view @click="toPublicArticle" class="iconfont iconcombinedshape"
			style="position: fixed;right: 20px;bottom: 0;z-index: 1030;
			color: #2376E5;font-size: 38px;opacity:1.0">		
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
				tabList:[],
				
				condition:{
					page:1,
					size:10,
					channelId:""
				},
				articleList:[]
			}
		},
		onLoad() {
		
		},
		onShow() {
			this.initChannel();
			this.search();
			
		},
		methods:{
			//
			initChannel(){
				this.$http.channel.getAll().then(res => {
					 this.tabList = res.data;
					 this.tabList.unshift({id:"",name:"全部"})
					 console.log(JSON.stringify(this.tabList));
				}).catch(err => console.log(err));
			},
			toSearch(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			// 4- get data
			search(){
				this.loadMoreStatus = "loading";
				this.$http.article.getArticlePage(this.condition).then(res => {
					if(res.data.records.length <= 0){
						this.loadMoreStatus = "noMore";
						return;
					}
					res.data.records.forEach(e => this.articleList.push(e));
						this.loadMoreStatus = "more";
				}).catch(err => console.log(err));
			},
			//
			changeTab(e){
				this.articleList = []
				this.loadMoreStatus = "more";
				this.condition = {
					page:1,
					size:10,
					channelId: e.id
				}
				console.log("切换:"+JSON.stringify(e));
				this.search();
			},
			loadMore(){		
				if(this.loadMoreStatus === "noMore")
					return;
				
				this.loadMoreStatus = "loading";
				this.condition.page += 1;
				this.search();
			},
			toPublicArticle(){
					this.$global.open("index/public-article")
			}
		}
	}
</script>

<style>
</style>
