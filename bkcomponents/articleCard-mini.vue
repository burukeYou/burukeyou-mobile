<template>
	<view class="flex align-center justify-between border-bottom" style="background-color: #FFFFFF;padding: 20rpx;">
		<view style="margin-right: 5rpx;">
			<text>{{article.title}}</text>
			<view class="text-light-muted">{{article.thumbupCount}} 人点赞  {{article.userNickname}}  {{article.createTime}}</view>
		</view>
		<view>
			<image :src="article.image" style="width: 120rpx;height: 120rpx;"></image>
		</view>
	</view>

</template>

<script>
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
		}
	}
	
</script>
	

<style>
</style>
