<template>
	<view>
		<!-- 1 -导航栏 -->
		<uni-nav-bar @clickLeft="toMore" fixed status-bar left-icon="pengyouquan" title="消息列表"></uni-nav-bar>
		
		<!-- 2- 会话列表 -->
		<chat-card v-for="(e,i) in msgList" :key="i" 
				   :src="e.src" :nickname="e.nickname" :time="e.time" :msg="e.msg" :count="e.count">
	   </chat-card>
		
		<!-- 3 -顶部更多弹出层 -->
		<uni-popup ref="popup" type="top">
			<view class="flex flex-column align-center" style="background-color: #fff;padding-top: 156rpx;font-size: 14px;" >
				<navigator :url="'/pages/message/more/friend-list'">
					<view>好友列表</view>
				</navigator>
				<view>添加好友</view>
			</view>	 
		</uni-popup>
		
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	import chatCard from "@/bkcomponents/chatCard.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import ChatServer from "@/utils/chat/ChatServer.js"

	
	export default {
		data() {
			return {
				msgList:[
					{src:"/static/img/my.png",nickname:"王大好",time:"前天",msg:"啊凡事多方面,asmfd/asm,d.fma,省的麻烦,阿姆斯对方发送	啊凡事多方面,asmfd/asm,d.fma,省的麻烦,阿姆斯对方发送",count:10},
					{src:"/static/img/my.png",nickname:"王大好",time:"前天",msg:"啊凡事多方面,asmfd/asm,d.fma,省的麻烦,阿姆斯对方发送	啊凡事多方面,asmfd/asm,d.fma,省的麻烦,阿姆斯对方发送",count:0},
					{src:"/static/img/my.png",nickname:"王大好",time:"前天",msg:"啊凡事多方面,asmfd/asm,d.fma,省的麻烦,阿姆斯对方发送	啊凡事多方面,asmfd/asm,d.fma,省的麻烦,阿姆斯对方发送",count:3}
				]
			}
		},
		//
		onPullDownRefresh() {
				
		},
		onLoad() {
		},
		components: {uniNavBar,uniBadge,chatCard,uniPopup},
		methods: {
			bindClick(e) {
				console.log(e);
				uni.showToast({
					title: `点击了${e.content.text}按钮`,
					icon: 'none'
				});
			},
			
			toMore(){
				//uni.navigateTo({url:'/pages/message/more/more'})
				this.$refs.popup.open()
			}
		}
	}
</script>

<style>

</style>
