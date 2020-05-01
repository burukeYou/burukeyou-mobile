<template>
	<view class="bg-color2">
		    <!-- 1 - 顶部背景 -->
			<view style="color: #ffff;font-weight: 500;height: 370rpx;background-color: #5E5E5E;">
				<view style="position: relative;top: 128rpx;padding: 28rpx;">
					<view class="flex align-center">
						 <image src="../../../static/img/boilinged.png" style="width: 60rpx;height: 60rpx;">
						 </image>
						 <view>{{columnInfo.username}}</view>
					</view>
					<view>
										 {{columnInfo.name}}
					</view>
					<view class="flex justify-between">
						 <view>{{columnInfo.count}}篇</view>
						 <view style="border: 1px solid #FFFFFF;padding: 0rpx 20px;border-radius: 8rpx;">编辑</view>
					</view>
				</view>	 
			</view>
			
			<!-- 2 - 数据列表 -->
			<bk-list :loadMoreStatus="loadMoreStatus" @loadMore="loadMore">
				<article-card-mini :article="e" v-for="e in articleList" :key="i">
				</article-card-mini>	
			</bk-list>
			
			
	</view>
</template>

<script>
	import articleCardMini from "@/bkcomponents/articleCard-mini"
	import BkList from "@/bkcomponents/bk-list.vue"
	
	
	export default {
		data() {
			return {
				columnInfo:{},
				loadMoreStatus:"more",
				condition:{
					page:1,
					size:10,
					userId: this.$store.state.loginUser.id,
					columnId:""
				},
				articleList:[]	
			}
		},
		
		onLoad(args) {
			console.log("当前专栏id为:"+ args.columnId);
			this.condition.columnId = args.columnId;
			this.getDetailById(args.columnId);
			this.getArticleByColumnId();
		},
		
		components:{
			articleCardMini,BkList
		},
		methods:{
			getDetailById(id){
				this.$http.column.getOne(id).then(res => {
					this.columnInfo = res.data;
				}).catch(err => console.log(err));
			},
			
			getArticleByColumnId(){
				this.loadMoreStatus = "loading";
				this.$http.article.getMiniArticlePage(this.condition).then(res => {
					if(res.data.records.length <= 0){
						this.loadMoreStatus = "noMore";
						return;
					}
					
					this.articleList = res.data.records;
					this.loadMoreStatus = "more";
				}).catch(err => console.log(err));
			},
			loadMore(){
				if(this.loadMoreStatus === "noMore")
					return;
					
				this.condition.page += 1;
				this.getArticleByColumnId();
			},
		}
		
		
	}
	
</script>

<style>
	img {
	    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
	    filter: grayscale(100%);
	}
</style>
