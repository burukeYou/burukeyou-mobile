<template>
	<view>
	<bk-tabs :tabList="tabList" :loadMoreStatus="loadMoreStatus" @changeTab="changeTab" @loadMore="loadMore">
			<view slot="0">
				<view v-for="(e,i) in dataList" class="flex align-center border-bottom" style="padding: 20rpx;">
					 <view>
						 <image src="../../static/img/videoed.png" style="height: 80rpx;width: 80rpx;">
						 </image>
					 </view>
					 <view style="margin-left: 20rpx;flex: 1;" class="">
						 <view>{{e.name}}</view>
						 <view class="text-light-muted">{{e.focusCount}}人 关注    {{e.articleCount}} 篇文章</view>
					 </view>
					 <view>
						<follow :parentId="3" @reverseFollow="postOrCanelFollow" :isFollow="e.follow"></follow>
					 </view>
				</view>
			</view>			
			<view slot="1">
				<view v-for="(e,i) in dataList" class="flex align-center border-bottom" style="padding: 20rpx;">
					 <view>
						 <image src="../../static/img/videoed.png" style="height: 80rpx;width: 80rpx;">
						 </image>
					 </view>
					 <view style="margin-left: 20rpx;flex: 1;" class="">
						 <view>{{e.name}}</view>
						 <view class="text-light-muted">{{e.focusCount}}人 关注    {{e.articleCount}} 篇文章</view>
					 </view>
					 <view>
						<follow :parentId="3" @reverseFollow="postOrCanelFollow" :isFollow="e.follow"></follow>
					 </view>
				</view>
			</view>		
	</bk-tabs>
	
	
		
		
		
		
	</view>
</template>

<script>
	import follow from "@/bkcomponents/follow.vue"
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	
	export default {
		data() {
			return {
				loadMoreStatus: "more",
				tabList:[{id:"1",name:"已关注标签"},{id:"2",name:"全部标签"}],
				condition:{
					page:1,
					size:10,
					focusStatus:"已关注"
				},
				dataList:[],
				height:""
				
			}
		},
		methods: {
			// 跟新关注状态
			postOrCanelFollow(args) {
				console.log("关注沸点" + args.parentId + "---现在的值:" + args.isFollow)
			},
			//
			search(){
				this.$http.label.getPage(this.condition).then(res => {
					this.loadMoreStatus = "more"
					
					if(res.data.records.length <= 0){
						this.loadMoreStatus = "noMore"
						return;
					}
					
					res.data.records.forEach(e  => this.dataList.push(e));
				}).catch(err => console.log(err));
			},
			//
			changeTab(e){
				this.dataList = [];
				this.loadMoreStatus = "more";
				
				this.condition.page = 1;
				this.condition.size = 10;
					
				if(e.id === "1"){
					this.condition.focusStatus = "已关注";
				}else {
					this.condition.focusStatus = "全部";
				}
				
				console.log("切换:"+JSON.stringify(e));
				this.search();
			},
			loadMore() {
				console.log("加载更多");
				this.condition.page += 1;
				this.loadMoreStatus = "loading";
				this.search();
			},
		},
		components: {
			follow,BkTabs
		},
		onLoad() {
			this.dataList = [];
			this.height = this.$global.initHeight()+'px';			
			this.search();
		},
		
		
	}
</script>

<style>

</style>
