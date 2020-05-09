<template>
	<!-- 关注用户 -->
	<view style="padding: 20rpx;">
		<block v-for="(e,i) in focusUserList" :key="i">
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
					// {id:3,avatar:"/static/img/video.png",nickname:"李白的手机",description:"java工程师"},
					// {id:4,avatar:"/static/img/video.png",nickname:"李白的手机",description:"java工程师"},
					// {id:5,avatar:"/static/img/video.png",nickname:"李白的手机",description:"java工程师"},
					// {id:6,avatar:"/static/img/video.png",nickname:"李白的手机",description:"java工程师"},
				]
			}
		},
		onShow() {
			this.$http.focus.getFocusUser().then(res => {
				this.focusUserList = res.data;
			}).catch(err => console.log(err));
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
