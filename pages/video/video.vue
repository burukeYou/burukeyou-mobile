<template>
	<view class="flex flex-wrap justify-aroud align-center">
		<block v-for="e in videoList" :key="i">
			<VideoCard :video="e" style="margin-top: 50rpx;"></VideoCard>
			
		</block>
		
	</view>
</template>

<script>
	import VideoCard from "@/bkcomponents/video-card.vue"
	export default {
		data() {
			return {
				videoList:[
					{	id:1,
						userNickname:"李白的手机",
						image:"/static/img/bg.jpg",
						timeLength:"10:45",
						visitsCount:"34万",
						thumbupCount:2400,
						description:"发上来大家疯狂拉升 发上来大家疯狂拉升 发上来大家疯狂拉升 发上来大家疯狂拉升 ",
						categoryName:"动漫"
					},
					{	id:2,
						userNickname:"陈旭元",
						image:"/static/img/content.jpg",
						timeLength:"1:45",
						visitsCount:"34万",
						thumbupCount:2400,
						description:"发上来大家疯狂拉升 发上来大家疯狂拉升 发上来大家疯狂拉升 发上来大家疯狂拉升 ",
						categoryName:"科技"
					},
					{	id:3,
						userNickname:"陈旭元",
						image:"/static/img/content.jpg",
						timeLength:"1:45",
						visitsCount:"34万",
						thumbupCount:2400,
						description:"发上来大家疯狂拉升 发上来大家疯狂拉升 发上来大家疯狂拉升 发上来大家疯狂拉升 ",
						categoryName:"科技"
					},
					{	id:4,
						userNickname:"陈旭元",
						image:"/static/img/content.jpg",
						timeLength:"1:45",
						visitsCount:"34万",
						thumbupCount:2400,
						description:"发上来大家疯狂拉升 发上来大家疯狂拉升 发上来大家疯狂拉升 发上来大家疯狂拉升 ",
						categoryName:"科技"
					}
				]
			}
		},
		methods: {
			
		},
		components:{
			VideoCard
		}
	}
</script>

<style>

</style>
