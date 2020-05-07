<template>
	<view>
		<view style="width: 750rpx;padding: 10rpx;" >
			<uni-search-bar  placeholder="搜索手机号/账号" @confirm="search"></uni-search-bar>
		</view>
		
		<divider></divider>
		
		<view v-if="user">
			<view  class="flex align-center border-bottom p-2">
				<view>
					<image class="rounded" :src="user.avatar" style="height: 80rpx;width: 80rpx;">
					</image>
				</view>
				<view class="flex flex-column justify-start ml-2" style="flex: 1;">
					<view>{{user.nickname}}</view>
					<view>{{user.description}}</view>
				</view>	
			</view>
			
			<divider></divider>
			
			<view class="mt-1 mb-1">
				 发送添加朋友申请
			</view>
			<textarea v-model="msg"  class="p-2" auto-height ></textarea>
			
			<view class="flex  mt-5 justify-center">
				<view @click="sendFriendRequest"  style="padding: 5rpx 15rpx;color: #FFFFFF;" class="border  bg-blue rounded-16">
					发送好友请求
				</view>
			</view>
		</view>
	
		
		
	</view>
</template>

<script>

	export default {
		components:{
			
		},
		data() {
			return {
				user:null,
				loginUser: "",
				msg:""
			}
		},
		methods: {
			search(args){
				this.$http.user.searchUser(args.value).then(res => {
					if(res.data === null){
						uni.showToast({
							title:"未找到用户",
							icon:"none"
						})
					}else{
						this.loginUser = this.$store.state.loginUser.nickname;
						if(this.loginUser === 'undefined'){
							this.$global.restoreUserState();
							this.loginUser = this.$store.state.loginUser.nickname;
						}
						
						this.user = res.data;
						this.msg = '你好，我是'+this.loginUser;
					}
						
				}).catch(err => console.log(err));
			},
			sendFriendRequest(){
				this.$http.friend.sendFriendRequest({msg:this.msg,acceptUserId:this.user.id}).then(res =>{
					if(res.code === "200"){
						uni.showToast({
							title:"发送成功",
							icon:"none"
						});
						uni.navigateBack({
							delta:-1
						})
					}else{
						uni.showToast({
							title:res.message,
							icon:"none"
						})
					}
						
				}).catch(err => console.log(err));
			}
		},
		
		
	}
</script>

<style>

</style>
