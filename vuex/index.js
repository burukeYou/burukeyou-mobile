import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import $config from "@/utils/config.js"


export default new Vuex.Store({
	// =======================state========================================
    state:{
		// user info
		loginStatus: false,
		loginUser:{}, 
		
		// socket
		isConnect: false ,
		SocketTask: false,   // new WebSocket后返回的对象
		isOnline: false,    // 是否上线
		
		// 当前聊天对象（进入聊天页面获取）
		ToUser:{
			id:999, // 通过判断user_id是否为0，当前用户处在什么场景下
			userNickname:"tangtanwei",
			userAvatar:"",
			status: ""      // 用户状态( 在线,离线,)
		},
		
		// 聊天会话列表
		chatList:[]
	},
	// =======================mutations============this.$store.commit('login',user);============================
	mutations:{
		// 登陆
		login(state,user){
			state.loginStatus = true;
			state.loginUser = user
			//uni.setStorageSync('user', JSON.stringify(user)); 将用户信息缓存	
		},
		// 注销
		logout:(state) => {
			state.loginStatus = false;
			state.loginUser = {}
		}
	},
	// =======================actions(异步方法)======	this.$store.dispatch('openSocket');============
	actions:{
		// 1 - 打开socket
		openSocket({ state,dispatch }){
			// 防止重复连接
			if(state.isConnect) return
			
			// 连接
			state.SocketTask = uni.connectSocket({
			    url: $config.WsUrl,
			    complete: ()=> {
					console.log("ws连接成功");
				}
			});
			
			
			if (!state.SocketTask){
				console.log("未打开SocketTask");
				return;
			} ;
			
			
			
			// 监听开启
			state.SocketTask.onOpen(()=>{
				// 将连接状态设为已连接
				console.log('将连接状态设为已连接');
				state.isConnect = true
			})
			
			console.log("AAAAAAAAAAAAAAAAAAAAAAAAA:::"+state.isConnect);
			
			
			// 监听关闭
			state.SocketTask.onClose(()=>{
				console.log('连接已关闭');
				state.isConnect  = false;
				state.SocketTask = false;
				state.IsOnline = false
				// 清空会话列表
				// 更新未读数提示
			})
			
			// 监听错误
			state.SocketTask.onError(()=>{
				console.log('连接错误');
				state.isConnect = false;
				state.SocketTask = false;
				state.IsOnline = false
			})
			
			// 监听接收信息
			state.SocketTask.onMessage((e)=>{
				console.log('接收消息',e);
				// 字符串转json
				let res = JSON.parse(e.data);
				// 绑定返回结果
				if (res.type == 'bind'){
					// 用户绑定
					return dispatch('userBind',res.data)
				}
				// 处理接收信息
				if (res.type !== 'text') return;
				/*
				{
					to_id:1,      // 接收人 
					from_id:12,	  // 发送人id
					from_username:"某某",  // 发送人昵称
					from_userpic:"http://pic136.nipic.com/file/20170725/10673188_152559977000_2.jpg",
					type:"text",	 // 发送类型
					data:"你好啊",	 // 发送内容
					time:151235451   // 接收到的时间
				}
				*/
			   // 处理接收消息
			   dispatch('handleChatMessage',res)
			})
		},
			
			
		// 2- 处理接收消息
		handleChatMessage({state,dispatch},data){
			console.log('处理接收消息',data);
			// 全局通知接口
			uni.$emit('UserChat',data);
			// 存储到chatdetail
			dispatch('updateChatDetailToUser',{
				data,
				send:false
			})
			// 更新会话列表
			dispatch('updateChatList',data)
		},	
		
	},
	// =======================getters========================================
	
	getters:{
		// 总未读数
		totalNoread(state){
			let total = 0
			state.chatList.forEach(item=>{
				total += item.noread
			})
			return total
		}
	}	
});