<template>
	<view style="padding: 20rpx;">
		<scroll-view scroll-y="true" refresher-enabled @scrolltolower="loadMore" refresher-background="lightgreen"
		 @refresherrefresh="onRefresh" @refresherpulling="onPulling" :refresher-threshold="100" :refresher-triggered="triggered">

			<view @click="toTopicDetail(e.id)" class="flex" v-for="(e,i) in topicList" style="margin-top: 20rpx;">
				<view>
					<image :src="e.avatar" style="height: 80rpx;width: 80rpx;"></image>
				</view>
				<view style="flex: 1;margin-left: 30rpx;" class="flex align-center justify-between border-bottom">
					<view>
						<view>{{e.name}}</view>
						<view>{{e.focusCount}} 关注者</view>
					</view>
					<view>
						<follow :color="'#3F90E8'" :parentId="e.id" @reverseFollow="postOrCanelFollow" :isFollow="e.isFollow"></follow>
					</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	import follow from "@/bkcomponents/follow.vue"

	export default {
		data() {
			return {
				triggered: false,
				topicList: [{
						id: "1",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: true
					},
					{
						id: "2",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: false
					},
					{
						id: "3",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: true
					},
					{
						id: "4",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: false
					},
					{
						id: "5",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: true
					},
					{
						id: "6",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: false
					},
					{
						id: "7",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: true
					},
					{
						id: "8",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: false
					},
					{
						id: "9",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: true
					},
					{
						id: "10",
						avatar: "/static/logo.png",
						name: "活动推荐",
						focusCount: 83,
						isFollow: true
					}
				]
			}
		},
		onLoad() {
			this._freshing = false;
			setTimeout(() => {
				this.triggered = true;
			}, 1000)
		},
		methods: {
			// 跟新关注状态
			postOrCanelFollow(args) {
				console.log("关注沸点" + args.parentId + "---现在的值:" + args.isFollow)
			},
			loadMore() {
				console.log("加载更多");
			},
			toTopicDetail(id){
				uni.navigateTo({
					url:"/pages/topic/topic-detail?topidId="+id
				})
			},
			//
			onPulling(e) {
				console.log("onpulling", e);
			},
			onRefresh() {
				if (this._freshing) return;
				this._freshing = true;
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
				}, 3000)
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			}
		},
		components: {
			follow
		},
	}
</script>

<style>

</style>
