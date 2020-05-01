<template>
	<!-- 好友列表 -->
	<view>
		<view v-for="(value,key,index) in list" :key="index" style="display: flex;flex-direction: column;align-items: flex-start;padding: 20rpx;">
			<view style="border-bottom: 3rpx solid #E0E0E0;width: 100%;">{{key}}</view>
			
			<uni-swipe-action style="width: 100%;">
				<uni-swipe-action-item  :options="options" :element="e" :key="i" v-for="(e,i) in value" @click="bindClick" :auto-close="true">
					<view @click="toChatDialog(e)"  style="display: flex;align-items: center;justify-content: flex-start;margin: 5rpx 0rpx;">
						<view>	
							<image :src="e.friendAvatar" style="height: 80rpx;width: 80rpx;"class="rounded-circle"></image>
						</view>
						<view style="margin-left: 20rpx;">
							{{e.friendNickname}}
						</view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>
		
		
	</view>
</template>

<script>
	import uniIndexedList from "@/components/uni-indexed-list/uni-indexed-list.vue"
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	
	export default {
		data() {
			return {
				list:[],
				options: [{
					text: '删除好友',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
			}
		},
		methods: {
			toChatDialog: (e) => {
				console.log("去聊天对话框:"+JSON.stringify(e));
				uni.navigateTo({
				    url: '/pages/message/chat/chat?friendId='+e.friendId+'&friendNickname='+e.friendNickname+'&friendAvatar='+e.friendAvatar+''
				});
			},
			// 获取好友列表
			getFriendList(){
				this.$http.friend.getFriendList().then(res => {
					this.list =res.data;
				}).catch(err => console.log(err));
			},
			bindClick(e) {				  
				console.log(JSON.stringify(e.index));
				// uni.showToast({
				// 	title: `点击了${e.index.id}`,
				// 	icon: 'none'
				// });	
				this.$http.friend.deleteFriend(e.index.friendId).then(res => {
					if(res.code === "200"){
						uni.showToast({
						 	title: `删除好友${e.index.friendNickname}成功`,
						 });	
						 this.getFriendList();
					}else{
						uni.showToast({
						 	title: `删除好友${e.index.friendNickname}失败`,
							icon: 'none'
						 });
					}
				}).catch(err => console.log(err));
			}
			
		},
		components: {uniIndexedList,uniSwipeAction,uniSwipeActionItem},
		
		onShow() {
			this.getFriendList();
		},
		onLoad() {
		}
	}
</script>

<style>

</style>
