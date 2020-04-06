<template>
	<view style="padding: 20rpx;">
		<block v-for="(e,i) in focusUserList">
			<user-card :user="e"></user-card>
		</block>
		
	</view>
</template>

<script>
	import UserCard from "@/bkcomponents/user-card"
	export default {
		data() {
			return {
				focusUserList: [
					{id:3,avatar:"/static/img/video.png",nickname:"李白的手机",description:"java工程师"},
					{id:4,avatar:"/static/img/video.png",nickname:"李白的手机",description:"java工程师"},
					{id:5,avatar:"/static/img/video.png",nickname:"李白的手机",description:"java工程师"},
					{id:6,avatar:"/static/img/video.png",nickname:"李白的手机",description:"java工程师"},
				]
			}
		},
		methods: {
			
		},
		components:{
			UserCard
		}
	}
</script>

<style>

</style>
