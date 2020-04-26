<template>
	<view class="bg-color2">
		    <!-- 1 - 顶部背景 -->
			<view style="color: #ffff;font-weight: 500;height: 370rpx;background-color: #5E5E5E;">
				<view style="position: relative;top: 128rpx;padding: 28rpx;">
					<view class="flex align-center">
						 <image :src="favoritiesInfo.userAvatar"  style="width: 60rpx;height: 60rpx;border-radius: 100%;">
						 </image>
						 <view>{{favoritiesInfo.userNickname}}</view>
					</view>
					<view>
										 {{favoritiesInfo.name}}
					</view>
					<view class="flex justify-between">
						 <view>{{favoritiesInfo.count}}篇  {{favoritiesInfo.createdTime}} 创建</view>
						 <view @click="toAdd" style="border: 1px solid #FFFFFF;padding: 0rpx 20px;border-radius: 8rpx;">
							 编辑</view>
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
				favoritiesInfo:{},
				loadMoreStatus:"more",
				articleList:[],
				condition:{
					id:'',
					page:1,
					size:10,
					type:'Article', // Video
				}
			}
		},
		
		onLoad(args) {
			console.log("当前收藏夹id为:"+ args.id);
			console.log("当前收藏夹type为:"+ args.type);
			this.condition.type = args.type;
			this.condition.id = args.id;
			this.initFavoritiesInfo();
			this.search();
		},
		
		onShow() {
			
		},
		
		components:{
			articleCardMini,BkList
		},
		
		methods:{
			initFavoritiesInfo(){
				this.$http.favorities.getOne(this.condition.id).then(res => {
					this.favoritiesInfo = res.data;
				}).catch(err => console.log(err));
			},
			search(){
				this.loadMoreStatus = "loading";
				console.log(JSON.stringify(this.condition))
				this.$http.favorities.getTargetListByFavoritiesId(this.condition).then(res => {
					if(res.data.records === null || res.data.records.length <= 0){
						this.loadMoreStatus = "noMore"
						return;
					}
					this.articleList = res.data.records
					this.loadMoreStatus = "more"
				}).catch(err => console.log(err));
			},
			loadMore(){
				if(this.loadMoreStatus === "noMore")
					return;
					
				this.condition.page += 1;
				this.search();
			},
			toAdd(){
				this.$global.open('my/user-home/favorites-add?id='+this.condition.id)
			}
		}
		
		
	}
	
</script>

<style>
	img {
	    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
	    filter: grayscale(100%);
	}
</style>
