/**
 * 
 * 		chatServer
 */

import $store from "@/vuex/index.js"
import $config from "@/utils/config.js"
import {ChatMethod} from "@/utils/chat/ChatEntity.js"


let state = $store.state

export let ChatServer =  {
	// 连接聊天服务器
	connectChatSever(){
		$store.dispatch('openSocket');
		
		// 监听连接状态
		setInterval(()=>{
			let status = this.$store.state.SocketTask.readyState;
			console.log("检测连接状态:" + status);
			if(status === 2 || status === 3	|| status === undefined){
				console.log("已断开");
				//this.$store.state.SocketTask.close();
				//this.$store.state.SocketTask = null;
				this.$store.dispatch('openSocket'); // 重连接
			}
		},10000);
	},
		
	// 发送私聊消息  (tcp)
	sendMsg(msg){	
		// 1- 格式化消息
		let data = ChatMethod.buildPrivateMessage(msg);
		
		// 2- 发送消息
		$store.state.SocketTask.send({
			data: JSON.stringify(data),
			success:() => {
				console.log("发送success");
			},
			fail:(error) => {
				// 消息失败尝试重发尝试 (这里的失败时网络发送失败,而ack是业务失败)
				console.log("失败"+JSON.stringify(error));
			}
		})
		
		// 3 -消息ack (失败重发处理)	
	}
	
	//
	
	
}

export default ChatServer