<template>
	<view class="flex align-center justify-between border-bottom" style="background-color: #FFFFFF;padding: 20rpx;">
		<view style="margin-right: 5rpx;">
			<text>{{article.title}}</text>
			<view class="text-light-muted">{{article.thumbupCount}} 人点赞  {{article.userNickname}}  {{convertTime}}</view>
		</view>
		<view>
			<image v-if="article.image" :src="article.image" style="width: 120rpx;height: 120rpx;"></image>
		</view>
	</view>

</template>

<script>
	import {formatTime} from "@/utils/Time.js"
	
	export default {
		props:{
			'article' :{
				type: Object,
				required:true
			}
		},
		data() {
			return {
			}
		},
		methods: {
			// 去文章详情页
			toArticleDetail(articleId){
				uni.navigateTo({
					url:"/pages/detail/articleDetail?id="+articleId
				})
			},
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				});
			}
		},
		computed:{
			convertTime:function(){
				return formatTime(new Date(this.article.createdTime));
			}
		}
	}
	
</script>
	

<style>
</style>
