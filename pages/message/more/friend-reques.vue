<template>
	<view>
		<block v-for="(e,i) in requestList">
			<view :key="i" class="flex align-center border-top p-2">
				<view>
					<image class="rounded" :src="e.sendUserAvatar" style="height: 80rpx;width: 80rpx;">
					</image>
				</view>
				<view class="flex flex-column justify-start ml-2" style="flex: 1;">
					<view>{{e.sendUserNickname}}</view>
					<view class="text-muted font-small"> {{convertTime(e.createTime)}}</view>
					<view class="text-light-muted font-sm">{{e.msg}}  </view>
				</view>	
				<view  v-if="e.status !== 0">
					<text class="text-muted">{{convertStatus(e.status)}}</text>
				</view>
			</view>
			<view v-if="e.status === 0" class="flex align-center justify-end border-bottom">
				<view style="margin-right: 5rpx;">
					<button class="font-sm" @click="operation(e.sendUserId,e.sendUserNickname,e.sendUserAvatar,1)">接受</button>
				</view>
				<view style="margin-right: 5rpx;">
					<button class="font-sm"  @click="operation(e.sendUserId,e.sendUserNickname,e.sendUserAvatar,2)">拒绝</button>
				</view>
				<view>
					<button class="font-sm"  @click="operation(e.sendUserId,e.sendUserNickname,e.sendUserAvatar,3)">忽略</button>
				</view>
			</view>
			<view v-else class="border-bottom"></view>
		</block>
		
	</view>
</template>

<script>
	import {formatTime} from "@/utils/Time.js"
	
	export default {
		data(){
			return{
				// 0-待处理，1-通过请求，2-拒绝，3-忽略
				requestList:[]
			}
		},
		
		onShow() {
			this.$http.friend.getFriendRequestList(this.$store.state.loginUser.id).then(res => {
				if(res.code === "200"){
					console.log(JSON.stringify(res))
					this.requestList = res.data;
				}
			}).catch(err => console.log(err));
		},
		
		methods:{
			convertTime: function(str){
				return formatTime(new Date(str));
			},
			operation(sendUserId,sendUserNickname,sendUserAvatar,operation){
				let arg = {sendUserId:sendUserId,sendUserNickname:sendUserNickname,sendUserAvatar:sendUserAvatar,operation:operation}
				console.log(JSON.stringify(arg))
				this.$http.friend.opFriendRequest(arg).then(res => {
					
				}).catch(err => console.log(err));
			},
			convertStatus(str){
				if(str === 1)
					return "已通过"
				if(str === 2)
					return "已拒绝"
				if(str === 3)
					return "已忽略"
			}
		},
	}
</script>

<style>
</style>
