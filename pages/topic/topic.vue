<template>
	<view style="padding: 20rpx;">
		<bk-list :loadMoreStatus="loadMoreStatus" :listHeight="listHeight" @loadMore="loadMore">
			<view @click="toTopicDetail(e.id)" class="flex" v-for="(e,i) in topicList" style="margin-top: 20rpx;">
				<view>
					<image src="../../static/logo.png" style="height: 80rpx;width: 80rpx;"></image>
				</view>
				<view style="flex: 1;margin-left: 30rpx;" class="flex align-center justify-between border-bottom">
					<view>
						<view>{{e.name}}</view>
						<view>{{e.focusCount}} 关注者  {{e.boilingCount}} 访问量  </view>
					</view>
					<view>
						<follow :color="'#3F90E8'" :parentId="e.id" @reverseFollow="postOrCanelFollow" 
						:isFollow="e.isFollow"></follow>
					</view>
				</view>
			</view>
		</bk-list>
	
		

	</view>
</template>

<script>
	import follow from "@/bkcomponents/follow.vue"
	import BkList from  "@/bkcomponents/bk-list.vue"

	export default {
		data() {
			return {
				loadMoreStatus: "more",
				topicList: [],
				condition:{
					page:0,
					size:15
				},
				listHeight:"1500rpx"
				
			}
		},
		onLoad() {
			this.search();
		},
		methods: {
			// 跟新关注状态
			postOrCanelFollow(args) {
				console.log("关注沸点" + args.parentId + "---现在的值:" + args.isFollow)
			},
			loadMore() {
				if(this.loadMoreStatus === "noMore")
					return;
				
				console.log("加载更多");
				this.condition.page += 1;
				this.loadMoreStatus = "loading";
				this.search();
			},
			toTopicDetail(id){
				uni.navigateTo({
					url:"/pages/topic/topic-detail?topidId="+id
				})
			},
			//
			search(){
				this.$http.topic.getTopicPage(this.condition).then(res => {
					this.loadMoreStatus = "more"
					
					if(res.data.records.length <= 0){
						this.loadMoreStatus = "noMore"
						return;
					}
					res.data.records.forEach(e => this.topicList.push(e));
					//this.topicList = res.data.records;
				}).catch(err => console.log(err));
			}
		},
		components: {
			follow,BkList
		},
	}
</script>

<style>

</style>
