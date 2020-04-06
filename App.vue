<script>
	import ChatServer from "@/utils/chat/ChatServer.js"
	
	//  全局脚本
	export default {
		// 程序启动时
		onLaunch: function() {
			console.log('App Launch');
			this.getNetWorkInfo();
			
			// 连接聊天服务器
			//ChatServer.connectChatSever();  //this.$store.dispatch('openSocket');	
		},
		// 关闭和开启时
		onShow: function() {
			console.log('App Show')
		},
		//隐藏时, 推出到系统后台,但不是退出程序
		onHide: function() {
			console.log('App Hide')
		},
		
		// ===========================methods==========================================
		methods:{
			// 
			getNetWorkInfo(){
				//
				uni.getNetworkType({
					success(res) {
						console.log("网络状态:" + res);
						if(res.networkType === 'none'){
							uni.showToast({
								title:'当前网路状态不佳',
								icon:'none'
							})
						}	
					}
				});
				
				//
				uni.onNetworkStatusChange((res)=>{
					console.log("网络状态改变:" + res);
					if(res.networkType === 'none'){
						uni.showToast({
							title:'当前网路状态不佳',
							icon:'none'
						})
					}	
				});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 官方CSs库 */
	@import "./common/uni.css";
	
	/*  动画库 */
	@import "./common/animate.css";
	
	/*  iconfont.css */
	@import "./common/iconfont.css";
	
	/*  自定义样式 */
	@import "./common/custom/custom.css";
	@import "./common/custom/global.css";
	
</style>
