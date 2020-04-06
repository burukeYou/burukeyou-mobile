import $store from "@/vuex/index.js"

/**
 * 	 常量
 */
export let ChatConstant = {
	CONNECT: 1, 	// 第一次(或重连)初始化连接
	CHAT: 2, 		// 聊天消息
	SIGNED: 3, 		// 消息签收
	KEEPALIVE: 4, 	// 客户端保持心跳
	PULL_FRIEND:5 //"重新拉去好友请求"
}

/**
 * 		通讯消息格式 ChatProtocol
 */

// 基本消息
export function Message(type,sendId,sendNickName,sendAvatar,acceptId,msg,msgId){
	this.type = type;   //   消息类型;  "text", “IMG”....
	this.sendId = sendId;	
	this.sendNickName = sendNickName;
	this.sendAvatar = sendAvatar;
	
	this.acceptId =  acceptId;
	this.msg = msg ;
	this.msgId = msgId;
}

// 通讯携带消息的数据包
export function DataContent(act,message){
	this.action  = act; 
	this.message = message;
	this.time = new Date().getTime(); // 每条消息的时间戳
}	


export let ChatMethod = {
	// 构建数据包格式
	buildPrivateMessage: (msg) => {
		let user = $store.state.loginUser;
		let toUser = $store.state.loginUser;
		let message =  new Message("text",user.id,user.nickname,user.avatar,toUser.id,msg,null);
		return new DataContent(ChatConstant.CHAT,message)
	}
}