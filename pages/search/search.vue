<template>
	<view>	
			<!-- 搜索框 -->
			<view style="width: 750rpx;padding: 10rpx;" >
				<uni-search-bar placeholder="搜索文章/标签/用户/视频/话题" @confirm="search"></uni-search-bar>
			</view>
			
			<!-- 搜索历史-->
			<view v-if="!isSearch" style="margin-top: 20rpx;width: 100%;padding: 10rpx;">
				<view class="flex align-center justify-between" style="width: 90%;margin: auto;">
					<view>历史搜索</view>
					<view><uni-icons type="trash" size="19"></uni-icons></view>
				</view>
				<view id="history" style="padding: 12rpx;" class="flex align-center flex-wrap">
					<view>java</view>
					<view>微服务整合ouath2</view>
					<view>msql回表和索引覆盖</view>
					<view>springboot整合mybatis-plus</view>
					<view>并发实战秒杀</view>
				</view>
			</view>
			
			<!-- 选择搜索 -->
			<view class="mt-3">
				<block v-for="(e,i) in dataList">
					<!-- 标签 -->
					<view v-if="'label' === e.type" class="flex align-center border-bottom" style="padding: 20rpx;" :key="i">
						 <view>
							<!-- <image :src="e.entity.avatar" style="height: 80rpx;width: 80rpx;">
							 </image> -->
							 <image src="/static/img/videoed.png" style="height: 80rpx;width: 80rpx;">
							  </image>
						 </view>
						 <view style="margin-left: 20rpx;flex: 1;" class="">
							 <view>{{e.entity.name}}</view>
							 <view class="text-light-muted">{{e.entity.focusCount}}人 关注    {{e.entity.articleCount}} 篇文章</view>
						 </view>
						<!-- <view>
							<follow :parentId="e.id" @reverseFollow="postOrCanelFollow" :isFollow="e.follow"></follow>
						 </view> -->
					</view>
					<!-- 文章 -->
					<view  v-if="'article' === e.type" class="p-2 border-bottom">
						<view>{{e.entity.title}}</view>
						<view class="text-light-muted font-sm">
							{{e.entity.thumbupCount}}赞 * {{e.entity.visitsCount}}访问 - {{e.entity.createdTime}}
						</view>
					</view>
					<!-- 用户 -->
					<view  v-if="'user' === e.type" class="flex align-center border-bottom">
							<view>
								 <image :src="e.entity.avatar" style="height: 80rpx;width: 80rpx;">
								 </image>
							</view>
							<view style="margin-left: 20rpx;flex: 1;" class="">
								 <view>{{e.entity.nickname}}</view>
								 <view class="text-light-muted">{{e.entity.description}}</view>
							</view>
					</view>
					
				</block>
				 
			</view>
			
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	
	export default {
		data() {
			return {
				condition:{
					type:"all",
					keyword:"",
					page: 0,
					size:6,
				},
				
				dataList : [
					//{type:"",entity:{}}
				],
				
				isSearch:false
			}
		},
		methods: {
			search(args){
				console.log(args);
				this.condition.keyword = args.value;
				this.$http.search.search(this.condition).then(res => {
					this.dataList = res.data;
					this.isSearch = true;
				}).catch(err => console.log(err))
			}
		},
		components:{
			uniSearchBar
		}
	}
</script>

<style>
	#history > view {
		margin-left: 20rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
		background-color: #F2F2F2;
		color: #868686;
		padding: 4rpx 10rpx;
	}
</style>
