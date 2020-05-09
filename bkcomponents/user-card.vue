<template>
	<view class="flex align-center border-bottom" style="padding: 20rpx;background-color: #FFFFFF;">
			 <view>
				 <image :src="user.avatar" style="height: 80rpx;width: 80rpx;">
				 </image>
			 </view>
			 <view style="margin-left: 20rpx;flex: 1;" class="">
				 <view>{{user.nickname}}</view>
				 <view class="text-light-muted">{{user.description}}</view>
			 </view>
			 <view>
				<follow :parentId="user.id" @reverseFollow="postOrCanelFollow" :isFollow="true"></follow>
			 </view>
	</view>
</template>

<script>
	import follow from "@/bkcomponents/follow.vue"
	export default {
		props:{
			'user':{
				type: Object,
				required:true
			}
		},
		methods:{
			// 跟新关注状态
			postOrCanelFollow(value) {
				console.log("关注用户" + value.parentId + "---现在的值:" + value.isFollow)
				
				if(value.isFollow){
					let args = {targetId:value.parentId,targetType:"USER"}
					this.$http.focus.postFocus(args).then(res => {
						
					}).catch(err => console.log(err));
				}else{
					let args = {type:"USER",id:value.parentId}
					this.$http.focus.cancelFocus(args).then(res => {
						
					}).catch(err => console.log(err));
				}	
			},	
		},
		components: {
			follow
		}
		
	}
</script>

<style>
</style>
