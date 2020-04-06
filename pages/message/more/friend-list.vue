<template>
	<!-- 好友列表 -->
	<view>
		<view v-for="(item,index) in list" style="display: flex;flex-direction: column;align-items: flex-start;padding: 40rpx;">
			<view style="border-bottom: 3rpx solid #E0E0E0;width: 100%;">{{item.firstLetter}}</view>
			<view @click="toChatDialog(e)" v-for="(e,i) in item.data" style="display: flex;align-items: center;justify-content: flex-start;margin: 5rpx 0rpx;">
				<view>	
					<image :src="e.friendAvatar" style="height: 80rpx;width: 80rpx;"class="rounded-circle"></image>
				</view>
				<view style="margin-left: 20rpx;">
					{{e.friendNickname}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniIndexedList from "@/components/uni-indexed-list/uni-indexed-list.vue"
	export default {
		data() {
			return {
				list:[
					{
						"firstLetter": "A",
						"data": [
							{friendId:4,friendNickname:"阿白发反馈",friendAvatar:"/static/img/boliing.png"},
							{friendId:5,friendNickname:"阿里",friendAvatar:"/static/img/boliing.png"},
							{friendId:6,friendNickname:"阿三",friendAvatar:"/static/img/boliing.png"}
								
						]
					}, 
					{
						"firstLetter": "B",
						"data": [
							{friendId:7,friendNickname:"本法",friendAvatar:"/static/img/boliing.png"},
							{friendId:8,friendNickname:"崩地",friendAvatar:"/static/img/boliing.png"},
						]
					},
					{
						"firstLetter": "E",
						"data": [
							{friendId:10,friendNickname:"蛾紫",friendAvatar:"/static/img/boliing.png"},
							{friendId:11,friendNickname:"恶魔",friendAvatar:"/static/img/boliing.png"},
							{friendId:12,friendNickname:"俄欧打开了",friendAvatar:"/static/img/boliing.png"}
						]
					},
					
					
				]
			}
		},
		methods: {
			toChatDialog: (e) => {
				console.log("去聊天对话框:"+JSON.stringify(e));
				uni.navigateTo({
				    url: '/pages/message/chat/chat?friendId='+e.friendId+'&friendNickname='+e.friendNickname+'&friendAvatar='+e.friendAvatar+''
				});
			}
		},
		components: {uniIndexedList}
	}
</script>

<style>

</style>
