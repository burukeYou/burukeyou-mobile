<template>
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
			<input @confirm="sendMsg" v-model="message" type="text" style="flex: 1;margin: 0px 10rpx;background-color: #FFFFFF;padding: 5rpx;"/>
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
				
				msgList:[
				  {userId:'2',avatar:"../../../static/logo.png",content:"约吗,约吗",type:"text",createTime:1585144449},
				  {userId:'1',avatar:"../../../static/logo.png",content:"约吗,约吗",type:"text",createTime:1585144449},
				  {userId:'2',avatar:"../../../static/logo.png",content:"约吗,约吗",type:"text",createTime:1585144449},
				  {userId:'2',avatar:"../../../static/logo.png",content:"约吗,约吗",type:"text",createTime:1585144449},
				  {userId:'1',avatar:"../../../static/logo.png",content:"约吗,约吗",type:"text",createTime:1585144449},
				  {userId:'2',avatar:"../../../static/logo.png",content:"约吗,约吗",type:"text",createTime:1585144449},
				  {userId:'2',avatar:"../../../static/logo.png",content:"约吗,约吗",type:"text",createTime:1585144449},
				],
				
				message:"",
				
				scrollInto:""
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.friendNickname
			});
			
			this.intiMsgHeight();
			
			//打印出上个页面传递的参数。
			console.log("当前朋友id"+option.friendId + "/"+option.friendNickname+"/"+option.friendAvatar); 
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
				console.log("盾冬到底部")
				let index = this.msgList.legth - 1;
				if(index < 0 )
					return;
				
				this.scrollInto = 'chat' + index;
			}
			
		}
	}
</script>

<style>

</style>
