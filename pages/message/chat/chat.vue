<template>
	<!-- 聊天对话框 -->
	<view>
		<!-- 2 -聊天消息列表 -->
		<scroll-view scroll-y="true" :style="{'height': (msgHeight + 'px')}" 
				:scroll-into-view="scrollInto" scroll-with-animation>

			<block v-for="(e,i) in msgList" :key="i">
				<view :id="'chat'+i">
					<chat-detail :msgItem="e" :index="i" :preTime="index > 0 ? msgList[index-1].createTime : 0">
					</chat-detail>
				</view>
			</block>
		</scroll-view>
		
		<!-- 3 底部操作 -->
		<view class="fixed-bottom flex justify-aroud align-center border-top bg-white" 
				style="height: 100rpx;background-color: #EEEEEE;padding: 7rpx;">
			<input @confirm="sendMsgHttp" v-model="message" type="text" style="flex: 1;margin: 0px 10rpx;background-color: #FFFFFF;padding: 5rpx;"/>
			<view style="font-size: 24px;color: #BBBBBB;" class="iconfont iconfasong" @click="sendMsg"></view>
		</view>
		
	</view>
</template>

<script>
	import chatDetail from "./chatDetail.vue"
	import ChatServer from "@/utils/chat/ChatServer.js"
	 
	
	export default {
		data() {
			return {
				msgHeight:500,
				
				msgList:this.$store.state.chatList,
				
				message:"",
				
				scrollInto:"",
				
				friend:{}
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.friendNickname
			});
			
			this.intiMsgHeight();
			this.friend = option;
			
			//打印出上个页面传递的参数。
			console.log("当前朋友id"+option.friendId + "/"+option.friendNickname+"/"+option.friendAvatar); 
			
			// 连接IM服务器绑定用户和通道关系
			ChatServer.sendConnectMsg();
		},
		onReady() {
				this.pageToBootom();
		},
		components:{
			chatDetail
		},
		methods: {
			intiMsgHeight(){
				uni.getSystemInfo({
					success:res=>{
						console.log("获取聊天框自适应高度:"+res.windowHeight);
						this.msgHeight = res.windowHeight - uni.upx2px(100);
					}
				});
			},
			// http
			sendMsgHttp(){
				if(this.message === ""){
					uni.showToast({
						title:'消息不能为空',
						icon:'none'
					});
					return;
				}		
				// 本地先发一份
				let re = {	
					userId: this.$store.state.loginUser.id,
					avatar: this.$store.state.loginUser.avatar,
					content:this.message,
					type:"text",
					createTime:new Date().getTime(),
				};
					
				this.$store.state.chatList.push(re);
						
				//
				this.$http.IM.sendMsg(this.friend.friendId,this.message).then(res => {
					
				}).catch(err => {
					console.log(err);
					uni.showToast({
						title:"网络异常发送失败"
					})
				})
				this.message = "";	
			},
			// tcp
			sendMsg(){
				let re = {	userId:'1',
							avatar:"../../../static/logo.png",
							content:this.message,
							type:"text",
							createTime:new Date().getTime(),
						};
				if(this.message === ""){
					uni.showToast({
						title:'消息不能为空',
						icon:'none'
					});
					return;
				}
				
				this.msgList.push(re);
				this.message = "";		
					
				this.pageToBootom();			
					
				// 发送消息到
				console.log(this.message);
				ChatServer.sendMsg(this.message);	
			},
			//
			pageToBootom(){
				let lastIndex = this.msgList.length - 1
				if (lastIndex < 0) return;
				this.scrollInto = 'chat'+lastIndex
			}
			
		}
	}
</script>

<style>

</style>
